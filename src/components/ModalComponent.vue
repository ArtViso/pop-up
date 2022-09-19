<template>
  <transition class="modal-animation">
    <div class="fixed inset-0 z-10 bg-black-rgba flex justify-center items-center">
      <div class="bg-floral-white h-[180px] mt-8 rounded-md divide-y divide-[#DFD8CF] px-6 py-6 text-center">
        <div>
          <h1 class="font-body font-semibold text-2xl text-seal-brown pb-6">Success!</h1>
        </div>
        <button class="btn-primary" @click="close">
          Ok
        </button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ModalComponent",
  props: {
    isOpenModal: {
      type: Boolean,
      required: true
    }
  },
  setup(props, {emit}) {
    function close() {
      emit("update:is-open-modal", false);
    }

    return {
      close
    }
  }
}
</script>
<style>
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: all 0.5s ease;
}

.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}
</style>
