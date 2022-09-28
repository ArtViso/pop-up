<template>
  <div class="container mt-5">
    <button class="btn-primary" @click="openPopup">Open Popup
    </button>
    <ModalComponent
        v-if="showPopup"
        v-model:is-open-modal="showModal"
    >
      <template v-slot:content>
        <Popup @sendPopup="openModal"
               v-model:is-close-popup="showPopup"/>
      </template>
    </ModalComponent>
    <ModalComponent
        v-if="showModal"
        v-model:is-open-modal="showModal">
      <template v-slot:content>
        <div>
          <h1 class="font-body font-semibold text-2xl text-seal-brown pb-6">Success!</h1>
        </div>
        <button class="btn-primary" @click="showModal = false">
          Ok
        </button>
      </template>
    </ModalComponent>
  </div>
</template>

<script>
import {ref} from "vue";
import Popup from './components/Popup'
import ModalComponent from "@/components/ModalComponent";

export default {
  components: {ModalComponent, Popup},
  setup() {
    const showPopup = ref(false);
    const showModal = ref(false);

    function openModal() {
      showPopup.value = false;
      showModal.value = true;
    }

    function openPopup() {
      showPopup.value = true;
    }

    return {
      showPopup,
      showModal,
      openPopup,
      openModal,
    }
  }
}
</script>
