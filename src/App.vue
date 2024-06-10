<script setup lang="ts">
import { ref, watch } from 'vue'
import GameHeader from './components/GameHeader.vue'
import GameImage from './components/GameImage.vue'
import GameErrors from './components/GameErrors.vue'
import GameWord from './components/GameWord.vue'
import GameFinal from './components/GameFinal.vue'
import GameNotification from './components/GameNotification.vue'
import { useRandomWord } from '@/composables/useRandomWord'
import { useLetters } from '@/composables/useLetters'
import { useNotification } from '@/composables/useNotification'

const { word, getRandomWord } = useRandomWord()
const { letters, correctLetters, inCorrectLetters, isWin, isLose, addLetter, resetLetters } =
  useLetters(word)
const { notification, showNotification } = useNotification()

const popUp = ref<InstanceType<typeof GameFinal> | null>(null)

watch(inCorrectLetters, () => {
  if (isLose.value) {
    popUp.value?.showPopUp('lose')
  }
})

watch(correctLetters, () => {
  if (isWin.value) {
    popUp.value?.showPopUp('win')
  }
})

const restart = async () => {
  await getRandomWord()
  resetLetters()

  popUp.value?.hidePopUp()
}

// Обработчик нажатия на клавиатуру
document.addEventListener('keydown', (event) => {
  if (isLose.value || isWin.value) return


  if (letters.value.includes(event.key)) {
    showNotification()
    return
  }
  addLetter(event)
})
</script>

<template>
  {{ word }}
  {{ letters }}
  {{ correctLetters }}
  {{ inCorrectLetters }}
  <div id="app">
    <GameHeader />
    <div class="game-container">
      <GameImage :incorrect-letters-count="inCorrectLetters.length" />
      <GameErrors :in-correct-letters="inCorrectLetters" />
      <GameWord :word="word" :correct-letters="correctLetters" />
    </div>
    <GameFinal ref="popUp" :word="word" @click="restart" />
    <GameNotification ref="notification" />
  </div>
</template>
