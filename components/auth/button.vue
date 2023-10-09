<template>
    <button class="auth-button">
        <slot/>
    </button>
</template>
<script>
export default {
    
}
</script>
<style>
    .auth-button{
        font-weight: bold;
        padding: 1rem;
        border: none;
        background-color: var(--btn-color);
        cursor: pointer;
        transition: .3s;
        border-radius: var(--edge);
    }
</style>