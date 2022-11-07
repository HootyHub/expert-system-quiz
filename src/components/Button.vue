<script setup>
    const emit = defineEmits(["click"]);
    const props = defineProps({
        displayText: String,
    });
</script>
<template>
    <button
        @click="$emit('click')"
        class="w-full rounded-2xl bg-white shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-50 p-4 transition md:text-2xl md:p-6"
    >
        {{ props.displayText }}
    </button>
</template>