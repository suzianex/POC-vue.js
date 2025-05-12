<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <form class="bg-white p-8 rounded-lg shadow-md w-full max-w-sm" @submit.prevent="handleLogin">
      <h2 class="text-2xl font-bold mb-6 text-center">
        Entre com a sua conta
      </h2>
      <div class="mb-4">
        <input
          type="email"
          placeholder="Seu email"
          required
          v-model="email"
          class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div class="mb-4 relative">
        <input
          :type="showPassword ? 'text' : 'password'"
          placeholder="Sua senha"
          required
          v-model="password"
          class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="button"
          @click="toggleShowPassword"
          class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path v-if="!showPassword" stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path v-if="!showPassword" stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path v-if="showPassword" stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L6.228 6.228" />
          </svg>
        </button>
      </div>
      <div class="mb-6 text-right">
        <a href="#" class="text-blue-500 hover:underline">
          Esqueceu sua senha?
        </a>
      </div>
      <button
        type="submit"
        class="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Login
      </button>
      <div class="mt-4 text-sm text-center">
        Clicando aqui, você concorda com os
        <a href="#" class="text-blue-500 hover:underline">
          Termos de Serviço
        </a>
        e a
        <a href="#" class="text-blue-500 hover:underline">
          Política de Privacidade
        </a>
      </div>
      <div class="mt-4 text-center">
        Não tem uma conta?
        <router-link to="/register" class="text-blue-500 hover:underline">
          Crie uma
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
    };
  },
  methods: {
    handleLogin() {
      // Lógica de login aqui
      console.log('Login attempt:', { email: this.email, password: this.password });
    },
    toggleShowPassword() {
      this.showPassword = !this.showPassword;
    }
  },
};
</script>

<style scoped>
/* Estilos específicos do componente aqui, se necessário */
</style>

