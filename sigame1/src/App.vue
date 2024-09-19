<script>
import PlayersList from './components/PlayersList.vue'
export default {
  data() {
    return {}
  },
  components: {
    PlayersList
  }
}
</script>

<template>
  <div>
    <header>
      <div class="wrapper"></div>
    </header>
    <div class="content">
      <PlayersList />
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
}
</style>
