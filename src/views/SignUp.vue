<template>
    <div class="">
            <article class="pa4 black-80 w-60" v-if='!isSignedUp'>
                <!-- <form accept-charset="utf-8"> -->
                    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                    <legend class="ph0 mh0 fw6 clip">Sign Up</legend>
                    <div class="mt3">
                        <label class="db fw4 lh-copy f6" for="email-address">User Name</label>
                        <input v-model='UserName' class="pa2 input-reset ba bg-transparent  measure" type="text" name="email-address"  id="email-address">
                    </div>
                    <div class="mt3">
                        <label class="db fw4 lh-copy f6" for="email-address">Email address</label>
                        <input v-model='UserEmail' class="pa2 input-reset ba bg-transparent  measure" type="email" name="email-address">
                    </div>
                    <div class="mt3">
                        <label class="db fw4 lh-copy f6" for="password">Password</label>
                        <input v-model='UserPass' class="b pa2 input-reset ba bg-transparent" type="password" name="password"  id="password">
                    </div>
                    </fieldset>
                    <div class="mt3">
                        <input @click='SignUp' class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Sign Up">
                        <router-link to='/'><input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"  value="Back to Login"></router-link>
                    </div>
                
            </article>
            <div v-if='isSignedUp'>You're signed up</div>
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
            //sign up  validation --- need to do
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

