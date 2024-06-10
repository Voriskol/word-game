<script setup lang="ts">
interface IProps {
  word: string
  correctLetters: string[]
}
defineProps<IProps>()
</script>

<template>
  <div class="word">
    <span v-for="(letter, index) in word" :key="index" class="letter">
      {{ correctLetters.includes(letter) ? letter : '' }}</span
    >
  </div>
</template>
