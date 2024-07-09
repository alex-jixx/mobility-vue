<script setup>
import { ref, nextTick } from 'vue';
import MyTimer from '../components/MyTimer.vue';

const time = ref(30);

function decrement() {
    if (time.value > 5) {
        time.value -= 5;
    }
}

function increment() {
    time.value += 5;
}

function reset() {
    time.value = 30;
}

const timer = ref();
const stopwatchRunning = ref(false);

function start() {
    stopwatchRunning.value = true;
    nextTick(() => timer.value.start(time.value));
}

function handleDone() {
    stopwatchRunning.value = false;
}


</script>

<template>
    <div class="container">
        <MyTimer v-if="stopwatchRunning" @done="handleDone" ref="timer" v-slot="{ time }">
            <h1>
                Stopwatch
            </h1>
            <h2>
                {{ time }}
            </h2>
        </MyTimer>
        <template v-else>
            <div class="center">
                <div class="time-controls">
                    <button type="button" @click.prevent="decrement">-</button>
                    <div id="time">{{ time }}s</div>
                    <button type="button" @click.prevent="increment">+</button>
                </div>
            </div>
            <button type="button" @click.prevent="start">Start</button>
            <button type="button" @click.prevent="reset">Reset</button>
        </template>
    </div>
</template>


<style scoped>
.center {
    display: flex;
    justify-content: center;
}

.time-controls {
    font-size: 36px;
    display: flex;
    align-items: baseline;
}

#time {
    margin: 10px;
    /* align-self: center; */
}

button {
    font-size: inherit;
    background-color: white;
    border: none;
    cursor: pointer;
    padding: 15px;
}

.container {
    max-width: 768px;
    margin: auto;
    margin-top: 4rem;
    text-align: center;
}
</style>