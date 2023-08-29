<template>
    <div class="registration-form">
   <h2>Registro</h2>
   <form @submit.prevent="submitForm">
     <div class="form-group">
       <label for="nombre">Nombre</label>
       <input type="text" id="nombre" name="nombre" required>
     </div>
     <div class="form-group">
       <label for="email">Correo Electrónico</label>
       <input type="email" id="email" name="email" required>
     </div>
     <div class="form-group">
       <label for="password">Contraseña</label>
       <input type="password" id="password" name="password" required>
     </div>
     <button type="submit" class="button">Registrarse</button>
   </form>


 </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'SignupPage',
  methods: {
    submitForm() {
      const formData = new FormData();
      formData.append('nombre', this.nombre);
      formData.append('email', this.email);
      formData.append('password', this.password);

      axios.post('http://localhost:3000/registro', formData)
        .then(response => {
          console.log('Respuesta del servidor:', response.data);
     })
        .catch(error => {
          console.error('Error al enviar el formulario:', error);
      });
    }
  },
  data() {
    return {
      nombre: '',
      email: '',
      password: ''
    };
  }
};
</script>

<style>
  body {
    font-family: Arial, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
    background-color: #f2f2f2;
  }
  .registration-form {
    background-color: white;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    width: 300px;
  }
  .form-group {
    margin-bottom: 15px;
  }
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  .button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
  }
</style>