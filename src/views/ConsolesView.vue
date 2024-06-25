<template lang="">
    <div class="card">
       <card-comp v-for="gaming_console in getConsoles()" :key="gaming_console" class="card-comp">
            <template #console-info>
                {{gaming_console.name}} <br> {{gaming_console.manufacturer}} <br> {{gaming_console.release_year}} <br> {{gaming_console.storage}} <br> {{gaming_console.price}} <br> {{gaming_console.best_selling_game}}
            </template>
       </card-comp>
    </div>
</template>
<script>
import CardComp from "@/components/CardComp.vue";
export default {
    methods:{
        getConsoles(){
            return this.$store.state.gaming_consoles
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
        CardComp,
    }
}
</script>
<style scoped>
.card-comp{
    padding: 1rem;
  border-radius: 8px;
  width: calc(25% - 20px);
  height: 250px;
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