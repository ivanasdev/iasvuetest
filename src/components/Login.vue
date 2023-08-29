<template>
    <div class="login-container">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="email">Correo Electrónico</label>
          <input type="email" v-model="email" placeholder="Ingresa tu correo electrónico" required>
        </div>
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input type="password" v-model="password" placeholder="Ingresa tu contraseña" required>
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios'; // Importa Axios
  
  export default {
    name: 'LoginPage',
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      async submitForm() {
        try {
          // Realiza la llamada AJAX utilizando Axios
          const response = await axios.post('http://localhost:3000/login', {
            email: this.email,
            password: this.password
          });
  
          // Maneja la respuesta del servidor como desees
          console.log('Respuesta del servidor:', response.data);
        } catch (error) {
          // Maneja los errores de la llamada AJAX
          console.error('Error al enviar los datos:', error);
        }
      }
    }
  };
  </script>
<style>
 body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    
    .login-container {
      background-color: #ffffff;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      width: 300px;
    }
    
    .login-container h2 {
      margin-top: 0;
    }
    
    .form-group {
      margin-bottom: 15px;
    }
    
    label {
      font-weight: bold;
      display: block;
      margin-bottom: 5px;
    }
    
    input[type="email"],
    input[type="password"] {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 3px;
      font-size: 14px;
    }
    
    button {
      background-color: #007bff;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 3px;
      cursor: pointer;
    }
    
    button:hover {
      background-color: #0056b3;
    }

</style>

