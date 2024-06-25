<template lang="html">
  <div class="card">
    <div v-if="loading" class="spinner">Loading...</div>
    <div v-for="friend in $store.state.friends" :key="friend.id" class="friend-card" :style="{ 'border': friend.gender === 'ale' || friend.gender === 'Male' || friend.gender === 'MALE'? '2px solid gold' : '2px solid green' }">
    {{ friend.id }}<br>
      {{ friend.firstName }} {{ friend.lastName }}<br>
      {{ friend.contactDetails }} <br> {{ friend.gender }} <br> {{ friend.profile }}
    </div>
    <card-comp v-for="friend in getCars()" :key="friend.id">
      <template #friend-card>
        {{ friend }}
      </template>
    </card-comp>
    </div>
</template>

<script>
import CardComp from "../components/CardComp.vue";

export default {
  methods: {
    getCars() {
      return this.$store.state.friends; 
    },
    getData() {
      return this.$store.dispatch("getData");
    },
  },
  mounted() {
    this.getData(); 
  },
  components: {
    CardComp,
  },
};
</script>

<style scoped>
.friend-card {
  padding: 1rem;
  border-radius: 8px;
  width: calc(25% - 20px);
  height: 200px;
  margin: 10px;
  line-height: 2.5;
  vertical-align: top;
}


.card {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
