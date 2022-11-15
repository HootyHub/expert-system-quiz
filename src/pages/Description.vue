<script setup>
import { computed } from "vue";
import ButtonAnswer from "@/components/ButtonAnswer.vue";
import DescriptionBlock from "@/components/DescriptionBlock.vue";
import Heading from "@/components/Heading.vue";
import Logo from "@/components/Logo.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const result = computed(() => {
  return route.params.key;
});
</script>
<template>
  <Logo :logoName="result" />
  <Heading :displayText="result" />
  <DescriptionBlock :displayText="result + '_description'" />
  <div class="min-h-full flex flex-col justify-center">
    <router-link to="/" class="grid grid-cols-1 gap-4 md:gap-4 md:grid-cols-4">
      <ButtonAnswer displayText="Wróć" />
    </router-link>
  </div>
</template>
