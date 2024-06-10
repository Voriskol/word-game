import { ref } from 'vue'
import { getRandomName } from '@/api/getRandomName'

export const useRandomWord = () => {
  const word = ref('')

  const getRandomWord = async () => {
    try {
      const name = await getRandomName()
      word.value = name.toLowerCase()
    } catch (error) {
      console.error(error)
      word.value = ''
    }
  }
  getRandomWord()
  return { word, getRandomWord }
}
