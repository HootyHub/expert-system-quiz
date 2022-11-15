<script setup>
const props = defineProps({
  place: Number,
  logoName: String,
  displayText: String,
});
</script>
<template>
  <router-link :to="/description/ + props.displayText">
    <div
      class="rounded-2xl font-semibold bg-white shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-50 text-lg md:text-2xl p-5 flex items-center justify-center md:p-6 mb-3"
    >
      {{ props.place }}. {{ props.displayText }}
      <img
        :src="'/logos/' + props.logoName + '.svg'"
        class="drop-shadow-lg h-12 w-12"
      />
    </div>
  </router-link>
</template>
