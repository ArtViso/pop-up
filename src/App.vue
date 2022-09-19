<template>
  <div class="container mt-5">
    <button class="btn-primary" @click="openPopup">Open Popup
    </button>
    <Popup
        v-if="showPopup"
        @sendPopup="openModal"
        v-model:is-close-popup="showPopup"
    />
    <ModalComponent
        v-if="showModal"
        v-model:is-open-modal="showModal"
    />
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

    // function openModal() {
    //   console.log("enlarging text");
    //   showPopup.value = false;
    //   showModal.value = true;
    // }

    return {
      showPopup,
      showModal,
      openPopup,
      openModal,
    }
  }
}
</script>
