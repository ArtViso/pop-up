<template>
  <transition class="modal-animation">
    <div class="fixed inset-0 z-10 bg-black-rgba flex justify-center items-center" @click="close">
      <div class="bg-floral-white h-[180px] mt-8 rounded-md divide-y divide-[#DFD8CF] px-6 py-6" @click.stop="">
        <slot name="content"></slot>
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
