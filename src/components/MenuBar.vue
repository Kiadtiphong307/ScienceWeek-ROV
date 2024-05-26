<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'รายละเอียดการแข่งขัน', href: '/', current: true },

  { name: 'อัพโหลดแบบฟอร์ม', href: '#', current: false },

  { name: 'ประกาศรายชื่อทีม', href: '/Team', current: false },

  { name: 'ติดต่อ', href: '/Contact', current: false }
]
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
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  'text-black hover:bg-blue-500 hover:text-white hover:scale-75 transition duration-500 ease-in-out',
                  'rounded-md px-3 py-2 text-lg font-medium '
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <button
            class="relative bg-gradient-to-r bg-green-600 rounded-lg p-2 text-white hover:from-green-500 hover:to-blue-600 hover:scale-125 text-lg transition duration-700 ease-in-out"
          >
            <div>
              <a href="/Register" class="text-white">สมัครแข่งขัน</a>
            </div>
          </button>

          <!--Resgister dropdown -->
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
</template>
