<template>
    <Layout>
        <template #header>
            <Header></Header>
        </template>
        <template #resume>
            <Resume :label="'Mi Ahorro'" :total-amount="amount">
                <template #graphic>
                    <Graphic :amounts="amounts"/>
                </template>
                <template #action>
                    <Action></Action>
                </template>
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
import Action from './Action.vue';
import Graphic from './Resume/Graphic.vue'

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
const amounts = [100,200,500,200,-400,-600,-300,0,300,500];
</script>