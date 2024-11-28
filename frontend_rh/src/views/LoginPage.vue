<template>
  <div
    class="bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-400 flex justify-center items-center h-screen"
  >
    <BackgroundImage />
    <div
      class="lg:p-36 md:p-24 sm:p-12 p-8 w-full lg:w-1/2 bg-white rounded-lg shadow-xl"
    >
      <LoginForm />
      <div class="my-4 flex items-center gap-4">
        <hr class="w-full border-gray-300" />
        <p class="text-sm text-gray-800 text-center">ou</p>
        <hr class="w-full border-gray-300" />
      </div>
      <SocialLogin />
      <SignUpLink />
    </div>
  </div>
</template>

<script>
import BackgroundImage from "@/components/Login/BackgroundImage.vue";
import LoginForm from "@/components/Login/LoginForm.vue";
import SocialLogin from "@/components/Login/SocialLogin.vue";
import SignUpLink from "@/components/Login/SignUpLink.vue";

export default {
  components: {
    BackgroundImage,
    LoginForm,
    SocialLogin,
    SignUpLink,
  },
};
</script>
