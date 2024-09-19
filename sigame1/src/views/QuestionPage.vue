<script>
export default {
  data() {
    return {
      isAnswerShown: false
    }
  },
  methods: {
    showAnswer() {
      this.isAnswerShown = true
    }
  }
}
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/gamePage"
        ><img alt="SIgame logo" class="logo" src="@/assets/logo.png" width="125" height="125"
      /></RouterLink>
    </nav>
    <div v-if="!isAnswerShown">
      <div>
        {{ $route.query.questionText }}
      </div>
      <button @click="showAnswer">Показать ответ</button>
    </div>
    <div v-else>
      {{ $route.query.answer }}
    </div>
  </div>
</template>
