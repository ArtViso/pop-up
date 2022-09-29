<template>
  <div class="container mt-5">
    <button class="btn-primary" @click="openPopup">Open Popup
    </button>
    <ModalComponent
        title="Invite others"
        :is-open-modal="showPopup"
        @close="showPopup = false"
    >
      <Popup @sendPopup="openModal"
             v-model:is-close-popup="showPopup"/>
    </ModalComponent>
    <ModalComponent
        title="Modal"
        :is-open-modal="showModal"
        @close="showModal = false"
    >
      <div class="px-6 pt-6 text-center">
        <p class="font-body font-semibold text-2xl text-seal-brown pb-6">Success!</p>
        <button class="btn-primary" @click="showModal = false">
          Ok
        </button>
      </div>
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
      localStorage.removeItem('users')
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
