<template>
    <Layout>
        <template #header>
            <Header></Header>
        </template>
        <template #resume>
            <Resume :label="'Mi Ahorro'"
                :total-amount="totalAmount"
                :amount="amount">
                <template #graphic>
                    <Graphic :amounts="amounts" @select="select"/>
                </template>
                <template #action>
                    <Action @create="create"></Action>
                </template>
            </Resume>
        </template>
        <template #movements>
            <Movements
                :movements="movements"
                @remove="remove"></Movements>
        </template>
    </Layout>
</template>
<script setup>
import Layout from './Layout.vue';
import Header from './Header.vue';
import Resume from './Resume/Index.vue';
import Movements from './Movements/Index.vue';
import { ref,computed,onMounted } from 'vue';
import Action from './Action.vue';
import Graphic from './Resume/Graphic.vue'

const movements = ref([]);
const amount=ref(null);

const create = (newMovement)=>{
    movements.value.push(newMovement);
    save();
}

const remove = (id)=>{
    const index = movements.value.findIndex(m=>m.id===id);
    movements.value.splice(index,1);
    save();
}

const save = ()=>{
    localStorage.setItem("movements",JSON.stringify(movements.value));
}

const select = (el)=>{
    amount.value = el;
}

onMounted(()=>{
    const movs = JSON.parse(localStorage.getItem("movements"));
    if(Array.isArray(movs)){
        movements.value= movs?.map(m => {
            return {...m,date:new Date(m.date)};
        });
    }
})

const amounts = computed(()=>{
    const today = new Date();
    const lastDay = today.setDate(today.getDate() - 30);

    const lastDays = movements.value
        .filter(m=>m.date >= lastDay)
        .map(m => m.amount);

    return lastDays.map((m,i)=>{
        const lastMovements = lastDays.slice(i,i+1);
        return lastMovements.reduce((sum,movement)=>{
            return sum + movement;
        },0)
    });
});

const totalAmount = computed(()=>{
    return amounts.value.reduce((sum,m)=>{
        return sum + m;
    },0);
})
</script>