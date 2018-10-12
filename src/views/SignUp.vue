<template>
    <div class="signup flex flex-column justify-center items-center">
            <div class='ba b--light-silver cont flex flex-column justify-center items-center w-25'>
                <div class='tc f3 pa1 w-100'>EventBee</div>
                <article class="pa2 black-80 w-60" v-if='!isSignedUp'>
                    <form accept-charset="utf-8" v-on:submit.prevent='SignUp'>
                        <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                        <legend class="ph0 mh0 fw6 clip">Sign Up</legend>
                        <div class="mt3">
                            <label class="db fw4 lh-copy f6" for="email-address">User Name</label>
                            <input v-model='UserName' class="pa2 input-reset ba bg-transparent  measure w-100" type="text" name="user-name"   required>
                        </div>
                        <div class="mt3">
                            <label class="db fw4 lh-copy f6" for="email-address">Email address</label>
                            <input v-model='UserEmail' class="pa2 input-reset ba bg-transparent  measure w-100" type="email" name="email-address" required>
                        </div>
                        <div class="mt3">
                            <label class="db fw4 lh-copy f6" for="password">Password <small>(atleast 5 characters)</small></label>
                            <input v-model='UserPass' class="b pa2 input-reset ba bg-transparent measure" type="password" name="password"  id="password" required>
                        </div>
                        </fieldset>
                        <div class="mt3 tc">
                            <input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign Up">
                        </div>
                    </form>
                </article>
                <div v-if='isSignedUp'>You're signed up  <router-link to='/'>Back To Login</router-link></div>
            </div>
            <span class='pa4 gray'>Go to <router-link to='/'>Login</router-link></span>
    </div>
</template>
<script>
export default {
    name:'signup',
    data(){
        return {
            UserName: '',
            UserEmail: '',
            UserPass: '',
            isSignedUp: false
        }
    },
    methods: {
        SignUp: function(){

           let email = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/igm;
           
           if(this.UserName === '' || this.UserEmail === '' || this.UserPass === ''){ alert('None of the Field should not be empty'); return}
          
           if(!email.test(this.UserEmail)){ alert('Provide a Valid Mail'); return}

           if(this.UserPass.length < 5 ){ alert('Password must be atleast 5 characters'); return }

           //check email alredy exist
            let UserExist = this.$store.state.UserBase.findIndex(x => x.UserEmail === this.UserEmail);
            if(UserExist > -1){
                alert('Email already Exists');
                return
            }
    

            //sign up  api
            this.$store.commit('SignUpNewUser',{
                UserName: this.UserName,
                UserEmail: this.UserEmail,
                UserPass: this.UserPass
            });
            this.isSignedUp = true;
            this.UserName= '';
            this.UserEmail= '';
            this.UserPass= '';
        }
    }
}
</script>
<style>
.signup{
    height: 100%;
  
}
.cont{
    min-width: 300px;
    min-height: 300px;
}
</style>


