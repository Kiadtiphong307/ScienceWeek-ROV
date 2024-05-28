<script setup>
import { ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'รายละเอียดการแข่งขัน', href: '/#register', current: true },
  { name: 'ประกาศรายชื่อทีม', href: '#', current: false },
  { name: 'ติดต่อ', href: '#contact', current: false }
]

const showToast = ref(false)

const handleClick = (href) => {
  if (href === '#' || href === '') {
    showToast.value = true
  } else {
    // นำผู้ใช้ไปยังหน้าที่ต้องการหาก href ไม่เป็น "#"
    window.location.href = href
  }
}

const closeToast = () => {
  showToast.value = false
}
</script>

<template>
  <Disclosure as="nav" class="bg-white shadow-lg" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-20">
      <div class="relative flex h-20 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="relative inline-flex items-center justify-center p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img class="h-10 w-auto" src="../assets/LOGO.png" />
            <div class="pl-5">E-Sports Science Week</div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                @click.prevent="handleClick(item.href)"
                :class="[
                  'text-red-500 hover:bg-red-900 hover:text-white hover:scale-75 transition duration-500 ease-in-out',
                  'rounded-md px-3 py-2 text-lg font-medium '
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</a
              >
            </div>
          </div>

          <!-- Register dropdown -->
          <Menu as="div" class="relative ml-3">
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <!-- dropdown -->
    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          @click.prevent="handleClick(item.href)"
          :class="[
            'text-black hover:bg-gray-700 hover:text-white',
            'block rounded-md px-3 py-2 text-base font-medium'
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>

  <!-- Toast Notification -->
  <transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="transform opacity-0 translate-y-4"
    enter-to-class="transform opacity-100 translate-y-0"
    leave-active-class="transition ease-in duration-300"
    leave-from-class="transform opacity-100 translate-y-0"
    leave-to-class="transform opacity-0 translate-y-4"
  >
    <div
      v-if="showToast"
      class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75"
    >
      <div class="bg-white rounded-lg p-6 text-center shadow-xl">
        <div class="flex justify-center mb-4">
          <div class="bg-red-100 rounded-full p-3">
            <svg
              class="h-6 w-6 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <h2 class="text-xl text-gray-800">Error</h2>
        <p class="mt-2 text-gray-600 text-xl">รอประกาศรายชื่อทีมแข่งขัน เร็วๆนี้</p>
        <button
          @click="closeToast"
          class="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
        >
          OK
        </button>
      </div>
    </div>
  </transition>
</template>
