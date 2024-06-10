<script setup lang="ts">
import { ref } from 'vue'
const isVisible = ref<boolean>(false)

function showPopUp() {
  isVisible.value = true
}

function hidePopUp() {
  isVisible.value = false
}

// Передача наружу методов дочернего компонента
defineExpose({ showPopUp, hidePopUp })
</script>

<template>
  <!-- Notification -->
  <div class="notification-container" :class="{ show: isVisible }">
    <p>Вы уже вводили этот символ</p>
  </div>
</template>
