<script>
// import { RouterLink, RouterView } from 'vue-router'
export default {
  data() {
    return {
      players: [],
      playersCounter: 0,
      playerName: '',
      isPlayersListConfirmed: false
    }
  },
  mounted() {
    // this.test()
  },
  methods: {
    addPlayer() {
      if (!this.playerName) return
      this.players.push({ id: ++this.playersCounter, name: this.playerName, points: 0 })
      console.log(this.players)
    },
    confirmPlayersList() {
      this.isPlayersListConfirmed = true
    }
  }
}
</script>

<template>
  <div class="content">
    <div v-if="isPlayersListConfirmed">
      <div v-for="player in players" :key="player.id">
        <div>{{ player.name }}</div>
        <input type="text" class="points-input" placeholder="сумма очков" v-model="player.points" />
      </div>
    </div>
    <div v-else>
      <div>добавьте игрока</div>
      <input class="player-input" type="text" v-model="playerName" @change="addPlayer" />
      <div v-for="player in players" :key="player.id">{{ player.id }}. {{ player.name }}</div>
      <button class="confirm-button" @click="confirmPlayersList" :disabled="players.length === 0">
        Подтвердить список
      </button>
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-basis: 300px;
  /* flex-grow: 0; */
  margin-top: 150px;
}

.player-input {
  width: 150px;
}

.points-input {
  width: 75px;
}

.confirm-button {
  width: 150px;
}
</style>
