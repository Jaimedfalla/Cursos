<template>
    <main>
        <p>{{labelVisual}}</p>
        <h1>{{$filters.amountCurrency(amountVisual)}}</h1>
        <div class="graphic">
          <slot name="graphic"></slot>
        </div>
    </main>
</template>
<script setup>
import {computed, defineProps} from 'vue';
const props = defineProps({
    label:{
        type:String,
        default:null
    },
    amount:{
        type:Number,
        default:null
    },
    totalAmount:Number
});
const amountVisual = computed(()=>props.amount !==null?props.amount:props.totalAmount);
const labelVisual = computed(()=> props.label !==null?props.label:'Ahorro Total')
</script>
<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
h1,
p {
  margin: 0;
  text-align: center;
}
h1 {
  margin-top: 14px;
  color: var(--brand-green);
}
.graphic {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 48px 24px;
  box-sizing: border-box;
}
</style>