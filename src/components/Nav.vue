<template>
  <nav class="bg-secondary-dark">
    <div class="p-5 pt-8 items-center text-center">
      <div class="container mx-auto flex flex-col-reverse sm:flex-row">
        <div
          class="
            flex
            mx-auto
            flex-col
            place-content-center
            text-center
            sm:mr-auto sm:mx-0 sm:flex-row sm:text-left
          "
        >
          <div
            class="
              sm:mr-2
              place-content-center
              bg-primary
              p-1
              logo
              hidden
              md:block
            "
          >
            <img
              itemprop="logo"
              src="/logo.svg"
              alt="Gammunition Logo"
              class="h-28 w-auto md:block hidden"
            />
          </div>
          <div class="mb-6 sm:mb-0 font-oswald">
            <p
              itemprop="name"
              class="
                text-white
                uppercase
                tracking-wide
                text-3xl
                font-medium
                logo
              "
            >
              Gammunition
            </p>
            <p
              class="
                uppercase
                text-secondary-light
                tracking-wide
                font-light
                text-small
              "
            >
              Arms and Training
            </p>
          </div>
        </div>
        <div itemprop="telephone" class="text-primary text-2xl font-oswald">
          <p><span>PH: </span>813 785-5462</p>
        </div>
      </div>
    </div>
    <div class="container mx-auto">
      <ul
        class="
          justify-end
          ml-auto
          space-x-4
          tracking-widest
          text-xs
          uppercase
          text-white
          pb-2
          hidden
          md:flex
          font-oswald
        "
      >
        <li><a href="#TrainingServices">Training Services</a></li>
        <li><a href="#FirearmServices">Firearm Services</a></li>
        <li><a href="#Testimonials">Testimonials</a></li>
        <li><a href="#Booking">Contact-Booking</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
