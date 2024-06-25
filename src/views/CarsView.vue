<template lang="">
    <div class="card">
       <card-comp v-for="car in getCars()" :key="car">
            <template #car-info>
                {{car}}
            </template>
       </card-comp>
    </div>
</template>
<script>
import CardComp from "@/components/CardComp.vue";
export default {
    methods:{
        getCars(){
            return this.$store.state.cars
        }
    },
    computed:{
        getData(){
            return this.$store.dispatch('getData')
        }
    },
    mounted(){
        this.getData
    },
    components:{
        CardComp
    }
}
</script>
<style lang="">
    
</style>