<script setup>
import { computed } from "vue";
import ButtonAnswer from "@/components/ButtonAnswer.vue";
import DescriptionBlock from "@/components/DescriptionBlock.vue";
import WinnerBlock from "@/components/WinnerBlock.vue";
import Logo from "@/components/Logo.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const result = computed(() => {
  return route.params.key;
});
const resultArray = computed(() => {
  return result.value.split(",");
});
</script>
<template>
  <div class="p-5 flex items-center justify-center md:p-6 mb-3">
    <div class="flex items-center justify-center flex-col">
      <img src="/crown.svg" class="md:w-32" />
      <img
        :src="'/logos/' + resultArray[0] + '.svg'"
        class="drop-shadow-lg h-16 w-16 md:h-48 transition-all md:w-48"
      />
    </div>
  </div>
  <WinnerBlock
    v-for="(item, index) in resultArray"
    :displayText="item"
    :logoName="item"
    :place="index + 1"
  />
  <div class="min-h-full flex flex-col justify-center">
    <router-link to="/" class="grid grid-cols-1 gap-4 md:gap-4 md:grid-cols-4">
      <ButtonAnswer displayText="Strona główna" />
    </router-link>
  </div>
</template>
