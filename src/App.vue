<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
    <header>
        <div class="wrapper">
            <nav>
                <RouterLink to="/">Stretch routines</RouterLink>
                <RouterLink to="/stopwatch">Stop watch</RouterLink>
            </nav>
        </div>
    </header>

    <RouterView />
</template>

<style scoped>
nav > a {
    margin-right: 15px;
}
</style>
