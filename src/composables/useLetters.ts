import { ref, computed, type Ref } from 'vue'

export const useLetters = (word: Ref<string>) => {
  const letters = ref<string[]>([])
  const correctLetters = computed(() =>
    letters.value.filter((letter) => word.value.includes(letter))
  )
  const inCorrectLetters = computed(() =>
    letters.value.filter((letter) => !word.value.includes(letter))
  )
  const isLose = computed(() => inCorrectLetters.value.length === 6)
  const isWin = computed(() =>
    [...word.value].every((letter) => correctLetters.value.includes(letter))
  )
  const addLetter = (event: KeyboardEvent) => {
    if (/[а-яА-ЯёЁ]/.test(event.key)) {
      letters.value.push(event.key.toLowerCase())
    }
  }
  const resetLetters = () => {
    letters.value = []
  }

  return { letters, correctLetters, inCorrectLetters, isLose, isWin, addLetter, resetLetters }
}
