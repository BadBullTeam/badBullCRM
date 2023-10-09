<template>
    <div class="auth" @click="closePopup">
        <div class="auth-content" @click.stop>
            <span class="auth-title">{{ title }}</span>
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type: String,
            require: true
        }
    },
    methods:{
        closePopup(){
            this.$emit('closePopup')
        }
    },
}
</script>

<style>
    .auth{
        position: fixed;
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        background-color: rgba(0, 0, 0, .2);
        backdrop-filter: blur(1rem);
    }

    .auth-content{
        background-color: var(--index-bg-color);
        border-radius: var(--edge);
        min-width: 30rem;
        min-height: 20rem;
        box-shadow: 0 1rem 1rem 0 rgba(0, 0, 0, .3);
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 2rem 4rem;
    }

    .auth-title{
        color: var(--text-color); 
        font-size: 1.4rem;
        font-weight: bold;
    }

    .auth-enter-active .auth-content,
    .auth-leave-active .auth-content {
        transition: 0.2s;
    }

    .auth-enter-from .auth-content,
    .auth-leave-to .auth-content{
        opacity: 0;
        transform: translateY(25%);
    }
</style>