<script setup>
import { ref, computed } from 'vue'
import Start from './pages/Start.vue'
import Quiz from './pages/Quiz.vue'
import Result from './pages/Result.vue'
import NotFound from './pages/NotFound.vue'

const routes = {
  '/': Start,
  '/quiz': Quiz,
  '/result': Result
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<template>
  <div
    class="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100"
  >
    <div
      class="bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-xl shadow-lg transition-all duration-300 w-5/6 md:w-2/3 p-4 md:p-16"
    >
      <component :is="currentView" />
    </div>
  </div>
</template>
