<template>
  <div class="login">
    <p v-if="loginError" class="error">{{ loginError}}</p>
    <form @submit.prevent="loginSubmit">
      <input type="email" placeholder="Enter Emailid" v-model="email">
      <input type="password" placeholder="Password" v-model="password">
      <button type="submit">Login</button>
      
    </form>
    <p>Note: Use Password: admin123 to login.
    <p v-if="loginSuccessful" class="succesful">{{ loginSuccessful}}</p>
    
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
 data(){
   return {
     email: '',
     password: ''
   }
 },
 computed: {
   ...mapState([
     'loginError',
     'loginSuccessful'
   ])
 },
 methods: {
   ...mapActions([
     'doLogin'
   ]),
   loginSubmit(){
     this.doLogin({
       email: this.email,
       password: this.password
     })
   }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login {
    border: 1px solid black;
    border-radius: 5px;
    padding: 1.5rem;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    
    
  }
  input { display: block; padding: 0.5rem; margin: 0.5rem auto;}
  button { padding: 0.5rem;}
  .error { color: red;}
  .succesful { color: green;}
</style>
