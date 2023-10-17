<template>
    <div class="error-page">
        <h1>Ошибка {{ error.statusCode }}</h1>
        <span>{{ error.message }}</span>
    </div>
</template>

<script setup>

    const error = useError()

</script>

<style>
    
</style>