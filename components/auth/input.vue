<template>
    <div class="auth-input-container">
        <span class="auth-input-title">{{ title }}</span>
        <input :type="isPassword ? 'password' : 'text'" :name="name">
        <span class="auth-input-tips" :class="error ? 'error' : ''">{{ error ? error : tips }}</span>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type: String,
            require: true
        },
        isPassword: {
            type: Boolean,
            require: true
        },
        error:{
            type: String,
        },
        tips:{
            type: String,
        },
        name:{
            type: String,
            require: true
        }
    }
}
</script>
<style>
    .auth-input-container{
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }

    .auth-input-container input{
        border: 1px solid var(--main-color);
        background-color: transparent;
        border-radius: var(--edge);
        width: 100%;
        padding: .5rem 1rem;
        font-size: 1.2rem;
        color: var(--text-color);
    }

    .auth-input-title{
        color: var(--text-color);
    }

    .auth-input-tips.error{
        color: red;
    }
</style>