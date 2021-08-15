<template>
  <div class="max-w-2xl mx-auto text-left my-20">
    <h2 class="text-secondary-dark font-oswald my-10 text-center">
      Contact Gammage
    </h2>
    <div v-if="showSuccess">Thanks I'll Be in touch</div>
    <form class="w-full space-y-4" @submit.prevent="onSubmit" v-else>
      <p v-if="v$.$error" class="text-center error">
        Please fill out required fields
      </p>
      <div class="flex flex-col sm:flex-row gap-4">
        <div class="flex flex-col flex-grow">
          <label class="" for="name">Full Name</label>
          <input
            class="w-full text-secondary-dark"
            name="name"
            type="text"
            v-model="v$.name.$model"
            @blur="v$.name.$touch()"
          />
          <div v-if="v$.name.$error" class="error">Name field is required</div>
        </div>
        <div class="flex flex-col text-left flex-grow">
          <label for="email">Email</label>
          <input
            class="w-full"
            name="email"
            type="email"
            v-model="v$.email.$model"
            @blur="v$.email.$touch()"
          />
          <template v-if="v$.email.$error">
            <p v-if="v$.email.email" class="error">
              Please enter a valid email
            </p>

            <p v-if="!v$.email.required" class="error">Email is required</p>
          </template>
        </div>
      </div>
      <div class="flex flex-col text-left flex-grow">
        <label for="message">Message</label>
        <textarea
          class="w-full"
          rows="5"
          type="textarea"
          v-model="v$.message.$model"
          @blur="v$.message.$touch()"
        ></textarea>
      </div>
      <div class="max-w-sm text-center mx-auto">
        <button
          class="
            mt-6
            text-secondary-dark
            w-full
            active:bg-accent
            bg-primary
            uppercase
            font-bold
            py-2
            px-3
            rounded-sm
            transition-all
            transform
            hover:bg-primary-light
            active:scale-75
          "
          type="submit"
          :disabled="v$.$invalid"
        >
          send
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive, ref } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

export default {
  setup() {
    const showSuccess = ref(false);

    const form = reactive({
      name: '',
      email: '',
      message: '',
    });

    const rules = {
      name: { required },
      email: { required, email },
      message: { required },
    };

    const num = 1;
    const v$ = useVuelidate(rules, form);

    const onSubmit = async () => {
      if (!v$.value.$invalid) {
        const mydata = {
          name: form.name,
          email: form.email,
          message: form.message,
        };
        await fetch('https://formspree.io/f/xbjqplpo', {
          method: 'POST',
          headers: {
            // Authorization: `Bearer ${import.meta.env.AIRTABLE}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(mydata),
        })
          .then(res => {
            if (res.status) {
              (showSuccess.value = true),
                (form.name = ''),
                (form.email = ''),
                (form.message = ''),
                v$.value.$reset();
            }
          })
          .catch(error => {
            console.error(error);
          });
      }
    };

    return {
      name: form.name,
      email: form.email,
      message: form.message,
      v$,
      showSuccess,
      onSubmit,
    };
  },
};
</script>

<style lang="scss">
h2 {
  font-size: 4rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
  line-height: 1;
}

.error {
  @apply text-yellow-600;
}
</style>
