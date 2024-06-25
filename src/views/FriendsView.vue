<template lang="">
    <div>
      <div v-for="friend in $store.state.friends" :key="friend.id" class="friend-card">
    <!-- green if female -->
      <div :style="{ borderColor: friend.gender === 'male' ? 'gold' : 'green' }">
        {{ friend.firstName }} {{ friend.lastName }}
        <!-- Display contact details here -->
        {{ friend.contactDetails }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>