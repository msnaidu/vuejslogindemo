<template>
  <div class="login">
    <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul class="errors-block">
      <li class="error" v-for="error in errors">{{ error }}</li>
      
    </ul>
  </p>
    <p v-if="errors.length==0 && loginError" class="error">
      <ul class="errors-block">
       <li class="error">{{ loginError }}</li> 
    </ul>
    </p>
  
    <form @submit="loginSubmit" novalidate="true">
      <div><label>Email id: &nbsp; </label>
      <input type="email" placeholder="Enter Email id" v-model="email">
      </div>
      <div>
      <label>Password: </label>
      <input type="password" placeholder="Password" v-model="password">
      </div>
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
     password: '',
     errors: []
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
   loginSubmit(e){
      this.errors = [];

      if (!this.email) {
        this.errors.push('Email id required.');
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Please enter valid email id.');
      }

      if (!this.password) {
        this.errors.push("Password required.");
      }
      
      if (this.email && this.password) {
       this.doLogin({
       email: this.email,
       password: this.password
     })
      }

      e.preventDefault();
    },
    validEmail: function (email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
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
  input { padding: 0.5rem; margin: 0.5rem auto;}
  button { padding: 0.5rem;}
  .error { color: red;}
  .succesful { color: green;}
  ul.errors-block {
    text-align: left;
    margin-left: 100px;
  }
</style>
