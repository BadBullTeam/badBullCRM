<template>
    <auth-sign @closePopup="closePopup" :title="'Авторизация'">
        <auth-input 
            @input="user.username = $event.target.value" 
            @change="error.username = ''" 
            :title="'Логин или Email'" 
            :name="'username'"
            :error="error.username"
        />
        <auth-input 
            @input="user.password = $event.target.value" 
            @change="error.password = ''" 
            :title="'Пароль'" 
            :isPassword="true" 
            :name="'password'"
            :error="error.password"
        />
        <auth-button @click.enter="auth()">Войти</auth-button>
    </auth-sign>
</template>

<script>
import axios from 'axios'
import { useCrmStore } from '@/stores/crm'

export default {
    data(){
        return{
            user:{
                username: '',
                password: ''
            },
            error:{
                username: '',
                password: '',
            }
        }
    },
    methods:{
        closePopup(){
            this.$emit('activateSign', 'unsignin')
        },
        async auth(){
            try {
                await axios.post('http://26.249.118.112:3000/api/auth/login',{
                    username: this.user.username,
                    password: this.user.password
                },
                {
                    withCredentials: true
                },
                ).then((resp)=>{
                    console.log(resp);
                    useCrmStore().user = resp.data
                    // this.$router.push(`/${resp.data.id}`);
                }).catch(e=>{
                    if(e.response.data.error){
                        this.error = e.response.data.error
                        console.log(this.error);
                    }
                    console.log(e);
                })
            } catch (e) {
                console.log(e);
            }
        }
    },
}
</script>

<style>
    
</style>