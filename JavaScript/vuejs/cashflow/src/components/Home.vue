<template>
    <Layout>
        <template #header>
            <Header></Header>
        </template>
        <template #resume>
            <Resume :label="'Mi Ahorro'" :total-amount="amount">
                <template #graphic>
                    graphic
                </template>
                <template #action></template>
            </Resume>
        </template>
        <template #movements>
            <Movements :movements="movements"></Movements>
        </template>
    </Layout>
</template>
<script setup>
import Layout from './Layout.vue';
import Header from './Header.vue';
import Resume from './Resume/Index.vue';
import Movements from './Movements/Index.vue';
import { ref } from 'vue';

const amount = ref(2000000);
const movements = [
    {
        id:1,
        title:"Movimiento 1",
        description:"adddddddddd",
        amount:1000
    },
    {
        id:2,
        title:"Movimiento 2",
        description:"akdjfñadjfl",
        amount:-50552
    }
];
</script>