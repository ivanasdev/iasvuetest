<template>
  <div id="app">
    <Home v-if="mostrarHome" :dataname="dataname" :titulo="titulo" @mostrar-signup="mostrarRegistro" @ira-login="mostrarIngreso" />
    <Signup v-else-if="mostrarSignup" />
    <Login v-else />
  </div>
</template>

<script>
import Home from './components/Home.vue';
import Signup from './components/Signup.vue';
import Login from './components/Login.vue';

export default {
  name: 'App',
  components: {
    Home,
    Signup,
    Login
  },
  data() {
    return {
      mostrarHome: true,
      mostrarSignup: false,
      mostrarLogin: false,
      dataname: 'Ivan Acosta',
      titulo: 'Desarrollador Fullstack'
    };
  },
  methods: {
    mostrarRegistro() {
      this.mostrarHome = false;
      this.mostrarSignup = true;
      this.mostrarLogin = false;
    },
    mostrarIngreso() {
      this.mostrarHome = false;
      this.mostrarSignup = false;
      this.mostrarLogin = true;
    }
  }
};
</script>
