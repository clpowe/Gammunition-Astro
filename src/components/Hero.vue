<template>
  <div class="hero grid content-center h-screen sm:h-2xl">
    <div
      class="
        container
        mx-auto
        text-center
        md:text-right
        font-bold
        flex flex-col
        items-center
        md:items-end
        px-2
      "
    >
      <img
        src="/assets/Logo@2x.png"
        alt="Gammunition Logo"
        class="h-60 w-auto md:hidden block mb-14 mx-auto"
      />
      <h1
        class="
          uppercase
          leading-none
          mb-2
          text-5xl
          sm:text-8xl
          md:text-9xl
          text-primary
          font-oswald
        "
      >
        <span class="text-4xl sm:text-7xl text-white">Welcome to</span><br />
        Gammunition
      </h1>
      <div
        class="
          flex
          space-x-2
          text-white text-xl
          sm:text-3xl
          tracking-wider
          uppercase
          font-oswald font-thin
          mb-14
        "
      >
        <h2>Knowledge</h2>
        <span>|</span>
        <h2>Skill</h2>
        <span>|</span>
        <h2>Attitude</h2>
      </div>
      <p
        class="
          text-body
          font-roboto font-light
          text-white
          mb-6
          max-w-lg
          px-4
          md:px-0
        "
      >
        However You’ve Arrived Here, You’re Ready. Allow A Certified NRA
        Instructor To Transfer The Knowledge, Skills and Attitude You Need To Be
        A Responsible Firearm Operator.
      </p>
      <div class="flex w-full sm:w-auto justify-self-end">
        <a
          href="#Booking"
          class="
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
        >
          Book Now
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style language="scss">
.hero {
  background-image: url('https://ik.imagekit.io/cpds/HeroIMG_dvHjr-HYP.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
