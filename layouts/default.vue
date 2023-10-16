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
    .main-container{
        margin-left: 15rem;
        padding: 1rem;
    }
</style>