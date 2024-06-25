<template>
    <div>
      <div class="card">
    <slot name="car-info"></slot>
    <slot name="console-info"></slot>
  </div>
    </div>
</template>
<script>
export default {
  props: {
      gender: {
        type: String,
        required: true
      }
    },
    // computed: {
    //   genderClass() {
    //     return this.gender === 'male' ? 'gold-border' : 'green-border';
    //   }
    // }
}
</script>
<style scoped>
.friend-card {
    background-color: #fff;
    border: 1px solid ;
    padding: 15px;
}

.card-car {
  border-color: #ff6347;
}

.card-console {
  border-color: #008000;
}

.spinner {
    text-align: center;
  }
    
</style>