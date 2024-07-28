<script setup>
import { ref, computed } from 'vue'
import ActiveExercises from '../components/ActiveExercises.vue'
import { useWakeLock } from '@vueuse/core'

const { isSupported, isActive, request, release } = useWakeLock()

const props = defineProps({
    exercises: {
        type: Array,
        required: true,
    },
})

const excludedExercises = ref(props.exercises.map(() => null))
const selectedExercises = computed(() => {
    const selectedExercisesIndices = excludedExercises.value
        .map((selected, idx) => (selected ? null : idx))
        .filter((value) => value !== null)

    return selectedExercisesIndices.map((idx) => props.exercises[idx])
})

const started = ref(false)

function handleStart() {
    started.value = true
    request()
}

function handleDone() {
    started.value = false
    release()
}

function increment(exercise) {
    exercise.durationInSec += 15
}

function decrement(exercise) {
    if (exercise.durationInSec > 15) {
        exercise.durationInSec -= 15
    }
}
</script>

<template>
    <ActiveExercises v-if="started" :exercises="selectedExercises" @done="handleDone" />
    <div class="container" v-else>
        <h1 class="title">Exercises</h1>
        <ul class="exercise-list">
            <li v-for="(exercise, idx) in exercises" :key="exercise.name" class="exercise-item">
                <div class="exercise-details">
                    <h2 class="exercise-name">
                        {{ exercise.name }}
                    </h2>
                    <span class="exercise-duration">
                        <template v-if="!excludedExercises[idx]">
                            <button
                                class="action-button"
                                type="button"
                                @click.prevent="() => decrement(exercise)"
                            >
                                -
                            </button>
                            <button
                                class="action-button"
                                type="button"
                                @click.prevent="() => increment(exercise)"
                            >
                                +
                            </button>
                            {{ exercise.durationInSec }} seconds
                        </template>
                        <div class="exercise-is-excluded" v-else>Exercises is excluded</div>
                        <div class="exclude-field">
                            <input
                                :value="idx"
                                :name="'exclude' + exercise.name"
                                type="checkbox"
                                v-model="excludedExercises[idx]"
                            />
                            <label :for="'exclude' + exercise.name">Exclude</label>
                        </div>
                    </span>
                </div>
            </li>
        </ul>
        <button class="start-button" @click.prevent="handleStart">Start</button>
    </div>
</template>

<style scoped>
.exercise-is-excluded {
    padding: 7px;
    margin: 3px;
}

.exclude-field {
    display: flex;
    justify-content: space-around;
}

.action-button {
    font-size: 24px;
    padding: 7px;
    border: none;
    margin: 3px;
    background-color: white;
    cursor: pointer;
}

.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
}

.title {
    text-align: center;
    font-size: 2em;
    margin-bottom: 20px;
    color: #333;
}

.exercise-list {
    list-style: none;
    padding: 0;
}

.exercise-item {
    margin-bottom: 15px;
    padding: 10px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    transition: transform 0.2s;
}

.exercise-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.exercise-name {
    font-size: 1.2em;
    color: #007bff;
    margin: 0;
}

.exercise-duration {
    font-size: 1em;
    color: #555;
}

.start-button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 1.2em;
    cursor: pointer;
    transition: background-color 0.3s;
    text-align: center;
}

.start-button:hover {
    background-color: #0056b3;
}
</style>
