<template>
    <auth-sign @closePopup="closePopup" :title="'Регистрация'">
        <auth-input 
            @input="newUser.username = $event.target.value" 
            @change="error.username = ''" 
            :title="'Логин'" 
            :name="'login'" 
            :error="error.username"
        />
        <auth-input 
            @input="newUser.email = $event.target.value" 
            @change="error.email = ''" 
            :title="'Email'" 
            :name="'email'" 
            :error="error.email"
        />
        <auth-input 
            @input="newUser.first_name = $event.target.value" 
            @change="error.first_name = ''" 
            :title="'Ваше имя'" 
            :name="'first_name'" 
            :error="error.first_name"
        />
        <auth-input 
            @input="newUser.last_name = $event.target.value" 
            @change="error.last_name = ''" 
            :title="'Ваша фамилия'" 
            :name="'last_name'" 
            :error="error.last_name"
        />
        <auth-input 
            @input="newUser.password = $event.target.value" 
            @change="error.password = ''" 
            :title="'Пароль'" 
            :isPassword="true" 
            :name="'password'" 
            :error="error.password"
        />
        <auth-input 
            @input="newUser.password_repeat = $event.target.value" 
            @change="error.password_repeat = ''" 
            :title="'Повторите пароль'" 
            :isPassword="true" 
            :name="'password_repeat'" 
            :error="error.password_repeat"
        />
        <auth-button @click.enter="register()">Зарегестрироваться</auth-button>
    </auth-sign>
</template>
<script>
import axios from 'axios'

export default {
    data(){
        return{
            newUser:{
                username: '',
                email: '',
                first_name: '',
                last_name: '',
                password: '',
                password_repeat: ''
            },
            error:{
                username: '',
                email: '',
                first_name: '',
                last_name: '',
                password: '',
                password_repeat: ''
            }
        }
    },
    methods:{
        closePopup(){
            this.$emit('activateSign', 'unsignup')
        },
        async register(){
            console.log('отправил запрос Славе');
            try{
                await axios.post('http://26.249.118.112:3000/api/auth/register', {
                    username: this.newUser.username,
                    email: this.newUser.email,
                    firstname: this.newUser.first_name,
                    lastname: this.newUser.last_name,
                    password: this.newUser.password,
                    confirmPassword: this.newUser.password_repeat
                }).then(resp=>{
                    console.log(resp);
                }).catch(e=>{
                    if(e.response.data.error){
                        this.error = e.response.data.error
                        console.log(this.error);
                    }
                    console.log(e);
                })
            }
            catch(e){
                console.log(e);
            }
        }
    }
}
</script>
<style>
    
</style>