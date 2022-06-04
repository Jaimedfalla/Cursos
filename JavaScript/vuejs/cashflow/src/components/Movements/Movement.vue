<template>
    <div class="movement">
        <div class="content">
            <h4>{{title}}</h4>
            <p>{{description}}</p>
        </div>
        <div class="action">
            <img src="@/assets/trash-icon.svg" alt="Borrar" @click="remove">
            <p :class="{'red':isNegative,'green':!isNegative}">{{$filters.amountCurrency(amount)}}</p>
        </div>
    </div>
</template>
<script setup>
import { defineProps, toRefs,defineEmits, computed } from 'vue';

const props = defineProps({
    title:{
        type:String
    },
    description:{type:String},
    id:{type:Number},
    amount:{type:Number},
});

const emits = defineEmits(["remove"]);

const {id,title,description,amount} = toRefs(props);

const remove = ()=>{
    emits("remove",id.value);
};

const isNegative = computed(()=> amount.value < 0);
</script>
<style scoped>
.movement {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
  background-color: #e6f9ff;
  border-radius: 8px;
  box-sizing: border-box;
}
.movement .content {
  width: 100%;
}
.movement .action {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
}
h4,
p {
  margin: 0;
  padding: 0;
}
h4 {
  margin-bottom: 8px;
}
.movement .action img {
  margin-bottom: 16px;
}
.red {
  color: red;
}
.green {
  color: green;
}
</style>