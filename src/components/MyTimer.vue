<script setup>
import { onMounted, ref } from 'vue';

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
        if (time.value === 0) {
            clearInterval(intervalId);
            emit('done');
        }
    }, 1000);
}

function stop() {
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
