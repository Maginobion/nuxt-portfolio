<template>
    <NuxtLink v-if="content && link" :to="link" target="_blank">
        <button>
            <div :class="classProp"/>
            {{content}}
        </button>
    </NuxtLink>
</template>

<script setup lang="ts">
    defineProps<{
        content?: string,
        link?: string,
        classProp?: string
    }>()
</script>

<style scoped>
    button{
        display: flex;
        align-items: center;
        gap: 8px;
        background-color: var(--button);
        border: none;
        padding: 6px 12px;
        border-radius: 4px;
        color: var(--color);
        transition: 0.6s all;
    }
    a{
        text-decoration: none;
    }
    button:hover{
        background-color: var(--button-hover);
    }
</style>