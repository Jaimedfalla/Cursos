<template>
    <button @click="showModal = true">Agregar Movimiento</button>
    <teleport to="#app">
        <Modal v-show="showModal" @close="showModal = false">
            <form @submit.prevent="submit">
                <div class="field">
                    <label for="titulo">Título</label>
                    <input
                        type="text"
                        name="titulo"
                        id="titulo"
                        v-model="title"/>
                </div>
                <div class="field">
                    <label for="monto">Monto</label>
                    <input type="number" name="monto" id="monto" v-model="monto">
                </div>
                <div class="field">
                    <label for="description">Description</label>
                    <textarea name="description" id="description"
                        rows="4" v-model="description"></textarea>
                </div>
                <div class="field">
                    <label class="radio-label">
                        <input type="radio" name="" id=""
                            v-model="movementsType"
                            value="Ingreso"/>
                        <span>Ingreso</span>
                    </label>
                    <label class="radio-label">
                        <input type="radio" name="" id=""
                            v-model="movementsType"
                            value="Gasto"/>
                        <span>Gasto</span>
                    </label>
                </div>
                <div class="action">
                    <button>Agregar movimiento</button>
                </div>
            </form>
        </Modal>
    </teleport>
</template>
<script setup>
import { ref } from 'vue';
import Modal from './Modal.vue';

const showModal = ref(false);
const title = ref("");
const monto = ref(0);
const description= ref("");
const movementsType = ref("Ingreso");

const submit = ()=>{
    showModal.value = !showModal.value;
}
</script>
<style scoped>
button {
  color: white;
  font-size: 1.25rem;
  background-color: var(--brand-blue);
  border: none;
  width: 100%;
  padding: 24px 60px;
  border-radius: 60px;
  box-sizing: border-box;
}
form {
  font-size: 1.24rem;
  width: 100%;
}
form .action {
  padding: 0 24px;
}
.field {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 16px 24px;
}
label {
  margin-bottom: 8px;
}
input,
textarea {
  font-size: 1.24rem;
  border: 2px solid var(--brand-blue);
  border-radius: 8px;
  padding: 8px;
}
input[type="number"] {
  text-align: right;
}
.radio-label {
  display: flex;
  align-items: center;
  margin-top: 8px;
}
.radio-label span {
  margin-top: 4px;
  margin-left: 8px;
}
input[type="radio"] {
  appearance: none;
  width: 1.24rem;
  height: 1.24rem;
  color: var(--brand-blue);
  border: 2px solid var(--brand-blue);
  border-radius: 50%;
}
input[type="radio"]:checked {
  background-color: var(--brand-blue);
}
</style>