<template>
    <main>
        <layouts-sidebar/>
        <layouts-header/>
        <div class="main-container">
            <slot  />
        </div>
    </main>
</template>

<style scope>
    main{
        background: linear-gradient(-45deg, #2696ca, #25d497);
        background-size: 400% 400%;
        animation: gradient 15s ease infinite;
        min-height: 100vh;
    }
    .main-container{
        margin-left: 15rem;
        padding: 1rem;
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
</style>