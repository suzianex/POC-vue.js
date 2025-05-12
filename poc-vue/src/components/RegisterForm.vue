<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <form class="bg-white p-8 rounded-lg shadow-md w-full max-w-sm" @submit.prevent="handleSubmit">
      <h2 class="text-2xl font-bold mb-6 text-center">Crie sua conta</h2>
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Nome</label>
        <input type="text" id="name" v-model="name" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Seu nome completo">
      </div>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" id="email" v-model="email" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="seuemail@exemplo.com">
      </div>
      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700">Senha</label>
        <input type="password" id="password" v-model="password" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Crie uma senha">
      </div>
      <div class="mb-6">
        <label for="confirm-password" class="block text-sm font-medium text-gray-700">Confirme a Senha</label>
        <input type="password" id="confirm-password" v-model="confirmPassword" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Confirme sua senha">
      </div>
      <div>
        <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Registrar
        </button>
      </div>
      <p class="mt-4 text-center text-sm text-gray-500">
        Já tem uma conta? 
        <a href="/login" class="font-medium text-indigo-600 hover:text-indigo-500">Faça login</a>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    handleSubmit() {
      // Lógica de registro aqui
      console.log('Formulário de registro enviado:', this.name, this.email, this.password);
    }
  }
};
</script>

<style scoped>
/* Estilos específicos do componente aqui, se necessário */
</style>

