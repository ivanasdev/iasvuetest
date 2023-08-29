<template>
      <div class="welcome-text">
    <h1>Hola, soy {{dataname}}</h1>
    <h3>{{titulo}}</h3>
  </div>
  <div class="button-container">
    <button @click="mostrarSignup" class="button">Registro</button>
    <button @click="iralogin" class="button">Iniciar Sesión</button>
    <button v-on:click="saludo" href="#" class="button">Test Button</button>
  </div>
</template>


<script>
export default{
    name:'HomeMain',
    props:{
        dataname:String,
        titulo:String   
    },methods:{
        saludo(){
            alert("Desarrollo web y mobil")
        },
        mostrarSignup() {
      this.$emit('mostrar-signup');
    },
    iralogin(){
      this.$emit('ira-login')
    },
    }

}
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
  }
  .welcome-text {
    text-align: center;
    margin-bottom: 20px;
  }
  .button-container {
    display: flex;
    gap: 20px;
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