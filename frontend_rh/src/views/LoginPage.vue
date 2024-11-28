<template>
  <div
    class="bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-400 flex justify-center items-center h-screen"
  >
    <!-- Left: Image with Hover Effect -->
    <div class="w-1/2 h-screen relative overflow-hidden">
      <img
        src="/images/login-image.jpg"
        alt="Placeholder Image"
        class="object-cover w-full h-full rounded-lg shadow-xl transition-transform duration-2000 transform hover:scale-105"
      />
      <!-- Hover Text -->
      <div
        class="absolute inset-0 bg-indigo-600 bg-opacity-40 flex justify-center items-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300"
      >
        <p class="text-2xl font-semibold">
          Comece agora! <br /><span class="text-lg"
            >Faça como nossos clientes e otimize seus processos com o
            DocTax.</span
          >
        </p>
      </div>
    </div>
    <!-- Right: Login Form -->
    <div
      class="lg:p-36 md:p-24 sm:p-12 p-8 w-full lg:w-1/2 bg-white rounded-lg shadow-xl"
    >
      <h1 class="text-4xl font-bold text-gray-800 text-center mb-8">
        Bem-vindo ao <span class="text-indigo-600">DocTax</span>
      </h1>

      <p class="text-lg text-gray-600 text-center mb-6">
        A plataforma ideal para contadores gerenciarem a
        <strong>cobrança</strong> e o <strong>envio de documentos</strong> de
        forma prática e segura.
      </p>

      <form action="#" method="POST">
        <!-- Username Input -->
        <div class="mb-6">
          <label
            for="username"
            class="block text-lg font-semibold text-gray-700"
            >Usuário</label
          >
          <input
            type="text"
            id="username"
            name="username"
            class="w-full border-2 border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            placeholder="Digite seu usuário"
            autocomplete="off"
          />
        </div>

        <!-- Password Input -->
        <div class="mb-6">
          <label
            for="password"
            class="block text-lg font-semibold text-gray-700"
            >Senha</label
          >
          <input
            type="password"
            id="password"
            name="password"
            class="w-full border-2 border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            placeholder="Digite sua senha"
            autocomplete="off"
          />
        </div>

        <!-- Remember Me Checkbox -->
        <div class="mb-4 flex items-center">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            class="text-indigo-500"
          />
          <label for="remember" class="text-gray-600 ml-2">Lembrar-me</label>
        </div>

        <!-- Forgot Password Link -->
        <div class="mb-6 text-center">
          <a href="#" class="text-indigo-500 hover:underline"
            >Esqueceu a senha?</a
          >
        </div>

        <!-- Login Button -->
        <button
          type="submit"
          class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg py-3 px-4 w-full transition duration-300 transform hover:scale-105"
        >
          Entrar
        </button>
      </form>
      <div class="my-4 flex items-center gap-4">
        <hr class="w-full border-gray-300" />
        <p class="text-sm text-gray-800 text-center">or</p>
        <hr class="w-full border-gray-300" />
      </div>

      <button
        type="button"
        class="w-full flex items-center justify-center gap-4 py-2.5 px-5 text-sm tracking-wide text-gray-800 border border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          class="inline"
          viewBox="0 0 512 512"
        >
          <path
            fill="#fbbd00"
            d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
            data-original="#fbbd00"
          />
          <path
            fill="#0f9d58"
            d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
            data-original="#0f9d58"
          />
          <path
            fill="#31aa52"
            d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
            data-original="#31aa52"
          />
          <path
            fill="#3c79e6"
            d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
            data-original="#3c79e6"
          />
          <path
            fill="#cf2d48"
            d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
            data-original="#cf2d48"
          />
          <path
            fill="#eb4132"
            d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
            data-original="#eb4132"
          />
        </svg>
        Continue com o google
      </button>
      <!-- Sign up Link -->
      <div class="mt-6 text-indigo-500 text-center">
        <p>
          Não tem uma conta?
          <a href="#" class="hover:underline">Cadastre-se aqui</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped>
/* Custom styles */
.input,
button {
  transition: all 0.3s ease;
}

.input:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);
}

button:hover {
  transform: translateY(-2px);
}

button:active {
  transform: translateY(1px);
}

button:focus {
  outline: none;
}

/* Hover effect on image and text */
img:hover {
  transform: scale(1.05);
  animation-duration: 2s;
}

div.absolute {
  transition: opacity 0.3s ease;
}

/* Text visibility */
div:hover > .opacity-0 {
  opacity: 1;
}

div:hover > .opacity-100 {
  opacity: 1;
}
</style>
