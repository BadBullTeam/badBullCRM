<template>
    <div class="input-container">
        <span class="input-title" :class="title ? 'title' : ''">{{ title }}</span>
        <input type="text" :maxlength="max" :placeholder="placeholder">
        <span class="input-tips" :class="error ? 'error' : tips ? 'tips' : ''">{{ error != '' ? error : tip }}</span>
    </div>
</template>

<script>
export default {
    props:{
        placeholder:{
            type: String,
        },
        title:{
            type: String,
        },          
        max:{
            type: Number
        },
        tips:{
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
        background-color: #F3F3F3;
        border: 1px #888 solid;
        border-radius: 15rem;
        /* border-radius: .5rem; */
        font-size: 1.2rem;
        padding: .2rem .5rem;
    }

    .input-title.title,
    .input-tips.error,
    .input-tips.tips{
        padding: .2rem;
    }

    .input-tips{
        font-size: .85rem;
    }

    .input-tips.error{
        color: #ff1616;
    }
</style>