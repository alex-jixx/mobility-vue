<script setup>
import { onMounted, ref } from 'vue';
import { useSound } from '@vueuse/sound'
import countdown from '@/assets/countdown.wav';

const { play, stop: stopSound } = useSound(countdown);

const props = defineProps({
    initialTime: {
        type: Number,
        default: null,
    },
});

const emit = defineEmits(['done']);

const time = ref();

let intervalId;
function start(initialTime) {
    time.value = initialTime ?? props.initialTime;
    intervalId = setInterval(() => {
        time.value--;
        if (time.value === 3) {
            play();
        }
        if (time.value === 0) {
            clearInterval(intervalId);
            stopSound();
            emit('done');
        }
    }, 1000);
}

function stop() {
    stopSound();
    if (intervalId) {
        clearInterval(intervalId);
    }
}

defineExpose({
    start,
    stop,
});

onMounted(() => {
    if (props.initialTime) {
        start()
    }
});


</script>


<template>
    <slot :time />
</template>
