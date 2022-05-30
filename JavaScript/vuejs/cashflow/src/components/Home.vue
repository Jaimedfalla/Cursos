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
            <Movements></Movements>
        </template>
    </Layout>
</template>
<script setup>
import Layout from './Layout.vue';
import Header from './Header.vue';
import Resume from './Resume/Index.vue';
import Movements from './Movements.vue';
import { ref } from 'vue';

const amount = ref(2000000);
</script>