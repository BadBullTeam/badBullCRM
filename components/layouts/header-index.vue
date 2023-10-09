<template>
    <header class="header-index">
        <nuxt-link to="/" class="logo">BadBull</nuxt-link>
        <nav>
            <nuxt-link to="templates/">Шаблоны</nuxt-link>
            <nuxt-link to="news/">Новости</nuxt-link>
            <button class="sign signUp" @click="activateSign('signup')">Зарегестрироваться</button>
            <button class="sign signIn" @click="activateSign('signin')">Войти</button>
        </nav>
    </header>
</template>
<script>
export default {
    props:{
        isSignIn:{
            type: Boolean,
            require: true
        },
        isSignUp:{
            type: Boolean,
            require: true
        }
    },
    methods:{
        activateSign(sign) {
            this.$emit('activateSign', sign)
        },
    }
}
</script>
<style>
    .header-index{
        width: 84vw;
        height: 8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 8rem;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 5;
    }

    .header-index a,
    .header-index button{
        color: var(--text-color);
        font-weight: bold;
        font-size: 1.3rem;
    }

    .header-index .logo{
        box-shadow: none;
        font-size: 1.8rem;
    }

    .header-index nav{
        display: flex;
        gap: 2rem;
    }

    .header-index button{
        border: none;
        background-color: transparent;
    }

    .sign{
        cursor: pointer;
    }
</style>