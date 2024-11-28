<template>
  <div>
    <h1 class="text-4xl font-bold text-gray-800 text-center mb-8">
      Bem-vindo ao <span class="text-indigo-600">DocTax</span>
    </h1>
    <p class="text-lg text-gray-600 text-center mb-6">
      A plataforma ideal para contadores gerenciarem a
      <strong>cobrança</strong> e o <strong>envio de documentos</strong> de
      forma prática e segura.
    </p>
    <form @submit.prevent="submitLogin">
      <div class="mb-6">
        <label for="username" class="block text-lg font-semibold text-gray-700"
          >Usuário</label
        >
        <input
          v-model="username"
          type="text"
          id="username"
          name="username"
          class="w-full border-2 border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
          placeholder="Digite seu usuário"
          autocomplete="off"
        />
      </div>
      <div class="mb-6">
        <label for="password" class="block text-lg font-semibold text-gray-700"
          >Senha</label
        >
        <input
          v-model="password"
          type="password"
          id="password"
          name="password"
          class="w-full border-2 border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
          placeholder="Digite sua senha"
          autocomplete="off"
        />
      </div>
      <div class="mb-4 flex items-center">
        <input
          v-model="remember"
          type="checkbox"
          id="remember"
          name="remember"
          class="text-indigo-500"
        />
        <label for="remember" class="text-gray-600 ml-2">Lembrar-me</label>
      </div>
      <div class="mb-6 text-center">
        <a href="#" class="text-indigo-500 hover:underline"
          >Esqueceu a senha?</a
        >
      </div>
      <button
        type="submit"
        class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg py-3 px-4 w-full transition duration-300 transform hover:scale-105"
      >
        Entrar
      </button>
    </form>
  </div>
</template>

<script>
import axios from "@/services/axios";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      remember: false,
    };
  },
  methods: {
    // Função para enviar os dados de login
    submitLogin() {
      const loginData = {
        username: this.username,
        password: this.password,
        remember: this.remember,
      };

      axios
        .post("/login", loginData)
        .then((response) => {
          console.log("Login bem-sucedido!", response.data);
        })
        .catch((error) => {
          console.error("Erro no login:", error.response);
        });
    },
  },
};
</script>
