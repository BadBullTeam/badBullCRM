<template>
    <div class="input-container">
        <span class="input-title">{{ title }}</span>
        <input type="text" :maxlength="max">
        <span class="input-tips" :class="error != '' ? 'error' : ''">{{ error != '' ? error : tip }}</span>
    </div>
</template>
<script>
export default {
    props:{
        value:{
            type: String,
            require: true
        },
        title:{
            type: String,
            require: true
        },          
        max:{
            type: Number
        },
        tip:{
            type: String
        },
        error:{
            type: String
        }
    },

}
</script>
<style>
    .input-container{
        display: flex;
        flex-direction: column;
    }

    .input-container input{
        background-color: #212121;
        border: none;
        /* border-radius: .5rem; */
        font-size: 1.2rem;
        padding: .2rem .5rem;
    }

    .input-title,
    .input-tips{
        padding: .2rem;
    }

    .input-tips{
        font-size: .85rem;
    }

    .input-tips.error{
        color: #ff1616;
    }
</style>