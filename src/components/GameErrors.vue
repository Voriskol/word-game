<script setup lang="ts">
interface IProps {
  inCorrectLetters: string[]
}

defineProps<IProps>()
</script>

<template>
  <div v-if="inCorrectLetters.length > 0" class="wrong-letters-container">
    <div class="wrong-letters">
      <p>Ошибки</p>
      <span v-for="(wrongLetter, index) in inCorrectLetters" :key="index"
        >{{ index === inCorrectLetters.length - 1 ? wrongLetter : `${wrongLetter}, ` }}
      </span>
    </div>
  </div>
</template>
