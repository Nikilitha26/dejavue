<template lang="">
    <div class="card">
       <card-comp v-for="car in getCars()" :key="car" class="card-cars">
            <template #car-info>
                {{car.make}} <br> {{car.model}} <br> {{car.year}} <br> {{car.color}} <br> {{car.price}}
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
<style scoped>
.card-cars{
    padding: 1rem;
    border-radius: 8px;
    width: calc(25% - 20px);
    height: 210px;
    margin: 10px;
    line-height: 2.5;
    vertical-align: top;
    border: 2px solid purple;
}
.card {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>