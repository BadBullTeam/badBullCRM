<template>
    <div>
        <Head>
            <Title>Главная | {{ user.lastname }} {{ user.firstname }}</Title>
         </Head>
        {{ $route.params.user_id }}
        <h1>Привет, {{ user.firstname }}</h1>
    </div>
</template>

<script>
import { useCrmStore } from '@/stores/crm';

export default {
    data(){
        return{

        }
    },
    beforeMount(){
        if(!useCrmStore().user.id){
            this.$router.push(`/`);
        }
        else{
            if(this.$route.params.user_id != useCrmStore().user.id){
                this.$router.push(`/${useCrmStore().user.id}`);
            }
            else{
                this.user = useCrmStore().user
            }
        }
    }
}
</script>

<style>
    
</style>