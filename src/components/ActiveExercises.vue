<script setup>

import { ref } from 'vue';
import MyTimer from './MyTimer.vue';


const props = defineProps({
    exercises: {
        type: Array,
        required: true,
    },
});

const emit = defineEmits(['done']);

const exercises = ref(props.exercises);

const currentExercise = ref(0);
const currentExerciseTime = ref(exercises.value[currentExercise.value].durationInSec);

const timer = ref()

async function handleDone() {
    if (currentExercise.value < exercises.value.length - 1) {
        currentExercise.value++;
        timer.value.start(currentExerciseTime.value);
    } else {
        emit('done');
    }
}

function handleStop() {
    timer.value.stop();
    emit('done');
}

</script>

<template>
    <div class="workout-container">
        <div class="timer-container">
            <MyTimer ref="timer" @done='handleDone' :initialTime="currentExerciseTime" v-slot="{ time }">
                <h1 class="exercise-title">
                    {{ exercises[currentExercise].name }}
                </h1>
                <p class="timer-display">
                    Time: {{ time }}
                </p>
            </MyTimer>
        </div>
        <button class="stop-button" @click.prevent="handleStop">Stop</button>
    </div>
</template>

<style scoped>
.workout-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
    text-align: center;
}

.timer-container {
    margin-bottom: 20px;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
}

.exercise-title {
    font-size: 2em;
    color: #007BFF;
    margin-bottom: 10px;
}

.timer-display {
    font-size: 1.5em;
    color: #555;
}

.stop-button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #FF4136;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 1.2em;
    cursor: pointer;
    transition: background-color 0.3s;
    text-align: center;
}

.stop-button:hover {
    background-color: #C12B2B;
}
</style>