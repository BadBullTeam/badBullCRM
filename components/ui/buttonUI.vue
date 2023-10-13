<template>
    <button class="ui-button">
        <slot/>
    </button>
</template>
<script>
export default {    
    props:{
        title:{
            type: String,
            require: true
        }
    }
}
</script>
<style>
    .ui-button{
        background-color: #317961;
        border: none;
        font-size: 1.2rem;
        padding: .2rem .5rem;
        /* border-radius: 1rem; */
        cursor: pointer;
    }
</style>