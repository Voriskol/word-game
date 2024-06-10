import { ref } from 'vue'
import GameNotification from '@/components/GameNotification.vue'

export const useNotification = () => {
  const notification = ref<InstanceType<typeof GameNotification> | null>(null)
  const showNotification = () => {
    notification.value?.showPopUp()
    setTimeout(() => {
      notification.value?.hidePopUp()
    }, 2000)
    return
  }

  return { notification, showNotification }
}
