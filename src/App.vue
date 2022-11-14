<script setup>

</script>

<template>
  <div
    class="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100"
  >
    <div
      class="bg-white backdrop-filter backdrop-blur-lg bg-opacity-20 rounded-xl shadow-lg transition-all duration-300 w-5/6 md:w-2/3 p-4 md:p-16"
    >
      <router-view/>
    </div>
  </div>
</template>
