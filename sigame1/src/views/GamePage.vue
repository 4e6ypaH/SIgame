<script>
export default {
  data() {
    return {
      currentRoundNumber: 1,
      gamePacks: [
        {
          id: 1,
          name: 'musicPack',
          firstRoundThemes: [
            {
              id: 1,
              title: 'Повтори женские ноты',
              questions: [
                { id: 1, price: 100, text: 'Текст первого вопроса', answer: 'кек1' },
                { id: 2, price: 200, text: 'Текст второго вопроса', answer: 'кек2' },
                { id: 3, price: 300, text: 'Че каво?' },
                { id: 4, price: 400, text: 'Че каво?' },
                { id: 5, price: 500, text: 'Че каво?' }
              ]
            },
            {
              id: 2,
              title: 'Повтори мужские ноты',
              questions: [
                { id: 1, price: 100 },
                { id: 2, price: 200 },
                { id: 3, price: 300 },
                { id: 4, price: 400 },
                { id: 5, price: 500 }
              ]
            },
            {
              id: 3,
              title: 'Угадай песню',
              questions: [
                { id: 1, price: 100 },
                { id: 2, price: 200 },
                { id: 3, price: 300 },
                { id: 4, price: 400 },
                { id: 5, price: 500 }
              ]
            },
            {
              id: 4,
              title: 'Угадай саундтрек',
              questions: [
                { id: 1, price: 100 },
                { id: 2, price: 200 },
                { id: 3, price: 300 },
                { id: 4, price: 400 },
                { id: 5, price: 500 }
              ]
            },
            {
              id: 5,
              title: 'Фильм по кадру',
              questions: [
                { id: 1, price: 100 },
                { id: 2, price: 200 },
                { id: 3, price: 300 },
                { id: 4, price: 400 },
                { id: 5, price: 500 }
              ]
            },
            {
              id: 6,
              title: 'OST',
              questions: [
                { id: 1, price: 100 },
                { id: 2, price: 200 },
                { id: 3, price: 300 },
                { id: 4, price: 400 },
                { id: 5, price: 500 }
              ]
            }
          ],
          secondRoundThemes: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }],
          thirdRoundThemes: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }],
          finalRound: []
        }
      ]
    }
  }
}
</script>

<template>
  <div>
    <div class="game-table-block">
      <h1>Раунд №{{ currentRoundNumber }}</h1>
      <table>
        <tbody class="game-table">
          <tr v-for="theme in gamePacks[0].firstRoundThemes" :key="theme.id">
            <td class="td-text">{{ theme.title }}</td>
            <td v-for="question in theme.questions" :key="question.id">
              <RouterLink
                :to="{
                  path: '/questionPage',
                  query: { questionText: `${question.text}`, answer: `${question.answer}` }
                }"
                >{{ question.price }}</RouterLink
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style>
.game-table {
  background-color: blue;
}

.game-table .td-text {
  color: yellow;
}
</style>
