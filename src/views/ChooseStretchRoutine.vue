<script setup>
import { ref } from 'vue'
import StretchRoutine from '../components/StretchRoutine.vue'
import routines from '../components/routines.js'

const exerciseRoutines = [
    {
        name: 'daily Yinyasa',
        exercises: routines.dailyYinyasa,
    },
    {
        name: 'Karins hofteøvelser',
        exercises: routines.karinsHipExercises,
    },
]

const selectedRoutine = ref()
</script>

<template>
    <StretchRoutine v-if="selectedRoutine" :exercises="selectedRoutine.exercises" />
    <div class="container" v-else>
        <ul>
            <li
                class="choose-stretch-routine"
                v-for="routine in exerciseRoutines"
                @click.prevent="selectedRoutine = routine"
                :key="routine.name"
            >
                {{ routine.name }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
.container {
    margin: auto;
    max-width: 768px;
    margin-top: 50px;
}
.choose-stretch-routine {
    border: 1px solid #8f8f8f;
    gap: 5px;
    padding: 10px;
    list-style: none;
    margin-top: 30px;
    cursor: pointer;
    text-align: center;
}

.choose-stretch-routine:hover {
    transform: scale(0.99);
}
</style>
