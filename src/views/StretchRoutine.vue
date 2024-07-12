<script setup>
import { ref } from 'vue'
import ActiveExercises from '../components/ActiveExercises.vue'
import angle_stretch from '../assets/angle_stretch.jpg'
import standing_bendover from '../assets/standing_bendover.jpg'
import nature_pose from '../assets/nature_pose.jpg'
import tordenkile from '../assets/tordenkile.jpg'
import shake_body from '../assets/shake_body.jpg'
import relaxing_breathing from '../assets/relaxing_breathing.jpg'

const exercises = ref([
    {
        name: 'Ryst kroppen',
        durationInSec: 120,
        image: shake_body,
    },
    {
        name: 'Træk vejret på ryggen',
        durationInSec: 120,
        image: relaxing_breathing,
    },
    {
        name: 'Stående foroverbøj',
        durationInSec: 60,
        image: standing_bendover,
    },
    {
        name: 'Naturstillingen',
        durationInSec: 120,
        image: nature_pose,
    },
    {
        name: 'Tordenkile',
        durationInSec: 60,
        image: tordenkile,
    },
    {
        name: 'Ankelstræk',
        durationInSec: 60,
        image: angle_stretch,
    },
])

const started = ref(false)

function handleStart() {
    started.value = true
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
    <ActiveExercises v-if="started" :exercises="exercises" @done="started = false" />
    <div class="container" v-else>
        <h1 class="title">Exercises</h1>
        <ul class="exercise-list">
            <li v-for="exercise in exercises" :key="exercise.name" class="exercise-item">
                <div class="exercise-details">
                    <h2 class="exercise-name">
                        {{ exercise.name }}
                    </h2>
                    <span class="exercise-duration">
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
                    </span>
                </div>
            </li>
        </ul>
        <button class="start-button" @click.prevent="handleStart">Start</button>
    </div>
</template>

<style scoped>
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

.exercise-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
