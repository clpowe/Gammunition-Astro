<template>
  <div class="max-w-2xl mx-auto text-left my-20 px-4">
    <div class="section-heading text-gradient-grey text-center mb-10">
      Contact Gammage
    </div>
    <div v-if="showSuccess" class="text-center text-yellow-500">
      Thanks I'll Be in touch
    </div>
    <form class="w-full space-y-4" @submit.prevent="onSubmit" v-else>
      <p v-if="v$.$error" class="text-center error">
        Please fill out required fields
      </p>
      <div class="flex flex-col sm:flex-row gap-4">
        <div class="flex flex-col flex-grow">
          <label class="" for="name"
            >Full Name
            <input
              class="w-full text-secondary-dark input"
              name="name"
              type="text"
              v-model="v$.name.$model"
              @blur="v$.name.$touch()"
            />
          </label>
          <div v-if="v$.name.$error" class="error">Name field is required</div>
        </div>
        <div class="flex flex-col text-left flex-grow">
          <label for="email"
            >Email
            <input
              class="w-full input"
              name="email"
              type="email"
              v-model="v$.email.$model"
              @blur="v$.email.$touch()"
            />
          </label>
          <template v-if="v$.email.$error">
            <p v-if="v$.email.email" class="error">
              Please enter a valid email
            </p>

            <p v-if="!v$.email.required" class="error">Email is required</p>
          </template>
        </div>
      </div>
      <div class="flex flex-col text-left flex-grow">
        <label for="phone"
          >Phone Number
          <input
            class="w-full input"
            name="phone"
            type="text"
            v-model="v$.phone.$model"
            @blur="v$.phone.$touch()"
          />
        </label>
        <template v-if="v$.phone.$error">
          <p
            v-if="v$.phone.minLength || v$.phone.maxLength || v$.phone.numeric"
            class="error"
          >
            Please enter a valid phone number
          </p>
        </template>
        <label for="message"
          >Message
          <textarea
            class="w-full input"
            rows="5"
            type="textarea"
            v-model="v$.message.$model"
            @blur="v$.message.$touch()"
          ></textarea>
        </label>
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
            px-2
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
import {
  required,
  email,
  minLength,
  numeric,
  maxLength,
} from '@vuelidate/validators';

export default {
  setup() {
    const showSuccess = ref(false);

    const form = reactive({
      name: '',
      email: '',
      message: '',
      phone: '',
    });

    const rules = {
      name: { required },
      email: { required, email },
      message: { required },
      phone: {
        required,
        minLength: minLength(10),
        numeric,
        maxLength: maxLength(11),
      },
    };

    const num = 1;
    const v$ = useVuelidate(rules, form);

    const onSubmit = async () => {
      if (!v$.value.$invalid) {
        const mydata = {
          name: form.name,
          email: form.email,
          message: form.message,
          phone: form.phone,
        };
        await fetch('https://formspree.io/f/xbjqplpo', {
          method: 'POST',
          headers: {
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
                (form.phone = ''),
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

<style lang="scss" scoped>
.error {
  @apply text-yellow-600;
}

.input {
  @apply border-secondary-dark  outline-none focus:ring focus:ring-primary focus:bg-white focus:outline-yellow;
}
</style>
