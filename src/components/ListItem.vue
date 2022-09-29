<template>
  <div class="flex items-center mb-3">
    <div id='scroll' class="flex w-[518px] justify-between items-center bg-linen-white py-1.5 px-3 mr-2.5">
      <div>
        <p class="font-body font-normal text-base text-seal-brown">{{ name }}</p>
        <p class="font-body font-normal text-xs text-linen-red">{{ email }}</p>
      </div>
      <v-select
          label="title"
          v-model="updateRole"
          :clearable="false"
          :searchable="false"
          :options="options"
          :reduse="(option) => option.id"
          :calculatePosition="calculatePosition"
      >
        <template #open-indicator="{ attributes }">
          <span v-bind="attributes">
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
    d="M1.46303 0.5H8.53632C8.66145 0.500547 8.78361 0.539735 8.88735 0.61261C8.9911 0.685485 9.07178 0.788774 9.11918 0.909415C9.16658 1.03006 9.17859 1.16263 9.15367 1.29038C9.12875 1.41813 9.06803 1.53531 8.97919 1.62711L5.44887 5.30503C5.39006 5.36681 5.32008 5.41585 5.24299 5.44931C5.16589 5.48277 5.08319 5.5 4.99967 5.5C4.91615 5.5 4.83346 5.48277 4.75636 5.44931C4.67927 5.41585 4.60929 5.36681 4.55048 5.30503L1.02016 1.62711C0.931316 1.53531 0.870598 1.41813 0.84568 1.29038C0.820762 1.16263 0.832764 1.03006 0.880167 0.909415C0.92757 0.788774 1.00825 0.685485 1.112 0.61261C1.21574 0.539735 1.3379 0.500547 1.46303 0.5Z"
    fill="#3C1F1D"/>
</svg>
          </span>
        </template>
        <template #selected-option-container="{ option }">
          <span class="text-sm">{{ option.title }}</span>
        </template>
        <template #option="{ title, description }">
          <div class="flex items-baseline">
            <div class="w-[26px] h-[12px] mr-[16.8px]">
                <span v-if="role === title">
                 <svg width="16" height="12" viewBox="0 0 16 12" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd"
                       d="M5.9429 11.4016L0.800049 6.29984L2.43548 4.71584L5.9429 8.16156L13.5646 0.601562L15.2 2.2267L5.9429 11.4016Z"
                       fill="#9C4619"/>
               </svg>
               </span>
            </div>
            <div>
              <p class="w-[254px] text-seal-brown font-body font-semibold not-italic text-base">{{ title }}</p>
              <p class="w-[254px] text-linen-red font-body font-normal not-italic text-xs">{{ description }}</p>
            </div>
          </div>
        </template>
      </v-select>
    </div>
    <button @click="deleteUser">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M20 10.0002C20 4.47698 15.5222 0.000244141 10 0.000244141C4.47784 0.000244141 0 4.47698 0 10.0002C0 15.5225 4.47779 20.0002 10 20.0002C15.5222 20.0002 20 15.5225 20 10.0002ZM10 1.50024C14.6938 1.50024 18.5 5.30551 18.5 10.0002C18.5 14.694 14.6938 18.5002 10 18.5002C5.30621 18.5002 1.5 14.694 1.5 10.0002C1.5 5.30551 5.30616 1.50024 10 1.50024ZM6 9.25024C5.58579 9.25024 5.25 9.58603 5.25 10.0002C5.25 10.4145 5.58579 10.7502 6 10.7502H14C14.4142 10.7502 14.75 10.4145 14.75 10.0002C14.75 9.58603 14.4142 9.25024 14 9.25024H6Z"
              fill="#D1CAC1"/>
      </svg>
    </button>
  </div>
</template>
<script>
import {computed, ref} from "vue";
import vSelect from 'vue-select'

export default {
  name: 'ListItem',
  props: {
    name: {
      type: String,
      default: 'John Wick'
    },
    email: {
      type: String,
      default: "example@email.com"
    },
    role: {
      type: String
    }
  },
  components: {
    vSelect
  },
  setup(props, {emit}) {
    const options = ref([
      {
        title: 'Guest',
        description: 'Default access level, can leave tributes, share media and stories',
        id: 'guest'
      },
      {
        title: 'Admin',
        description: 'Can control all aspects of the website, including moderating content posted by others and changing website settings',
        id: 'gdmin'
      }
    ])
    const updateRole = computed({
      get: () => props.role,
      set: (value) => emit('update:role', value.title)
    })

    function deleteUser() {
      emit('deleteUser')
    }

    function calculatePosition(dropdownList) {
      dropdownList.style.width = '318px';
    }

    return {
      options,
      updateRole,
      deleteUser,
      calculatePosition
    }
  }
}
</script>


