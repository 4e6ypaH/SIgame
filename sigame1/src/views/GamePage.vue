<script setup>
const currentRoundNumber = 1
const gamePacks = [
  {
    id: 1,
    name: 'musicPack',
    firstRoundThemes: [
      {
        id: 1,
        title: 'Повтори женские ноты',
        questions: [
          { id: 1, price: 100, text: 'Текст первого вопроса' },
          { id: 2, price: 200, text: 'Текст второго вопроса' },
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
        title: 'Угадай фильм по саундтреку',
        questions: [
          { id: 1, price: 100 },
          { id: 2, price: 200 },
          { id: 3, price: 300 },
          { id: 4, price: 400 },
          { id: 5, price: 500 }
        ]
      }
    ],
    secondRoundThemes: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
    thirdRoundThemes: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }],
    finalRound: []
  }
]
</script>

<template>
  <div class="game-page">
    <h1>Раунд №{{ currentRoundNumber }}</h1>
    <table>
      <tbody>
        <tr v-for="theme in gamePacks[0].firstRoundThemes" :key="theme.id">
          <td class="td">{{ theme.title }}</td>
          <td v-for="question in theme.questions" :key="question.id">
            <RouterLink
              :to="{ path: '/questionPage', query: { questionText: `${question.text}` } }"
              >{{ question.price }}</RouterLink
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style></style>
