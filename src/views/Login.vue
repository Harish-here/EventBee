<template>
    <div class='flex justify-center items-center'>
        <div id='login-box' class='ba b--light-gray'>
            <article class="pa4 black-80 w-60">
                <!-- <form accept-charset="utf-8"> -->
                    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                    <legend class="ph0 mh0 fw6 clip">Log in</legend>
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
                        <input @click='LogIn' class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Log In">
                        <router-link to='/signup'><input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6"  value="Sign Up"></router-link>
                    </div>
                
            </article>
            <div class='red' v-if='AuthFail'>Email or Passowrd is wrong</div>

        </div>
    </div>
</template>

<script>
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
                    this.$store.commit('LoggedIn',this.$store.state.UserBase[index].UserId)
                    this.$router.push({path: '/app'});
                }else{
                    this.AuthFail = true;
                }
            }else{
                alert('Fill both!');
            }
        }
    },
    created(){
        this.$store.commit('GetSampleUser')
    }

}
</script>
<style>
#login-box{
    width:250px;
    height: 250px;
}
</style>

