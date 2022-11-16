<script setup>
    import ButtonAnswer from '@/components/ButtonAnswer.vue';
    import Heading from '@/components/Heading.vue';
</script>
<template>
    <div class="min-h-full flex flex-col justify-center text-center">
        <Heading displayText="Quiz - który język programowania wybrać?"/>
        <span class="text-gray-200 font-light">Autorzy: Paulina Lencka, Seweryn Banasiak</span>
        <router-link to="/quiz" class="grid grid-cols-1 gap-4 md:gap-4 md:grid-cols-4 mt-2">
            <ButtonAnswer displayText="Zacznij quiz"/>
        </router-link>
    </div>
</template>
