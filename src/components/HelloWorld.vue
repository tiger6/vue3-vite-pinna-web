<template>
  <h1>{{ msg }}</h1>

  <p>
    {{ t('ide setup') }}:
    <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>{{ t('see') }} <code>README.md</code> {{ t('more information') }}.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <el-button type="primary" @click="count++">count is: {{ count }}</el-button>
  <p>
    {{ t('edit') }}
    <code>components/HelloWorld.vue</code> {{ t('hot test') }}. {{ name }}
    {{ uStore.userName }}
  </p>
</template>

<script setup lang="ts">
import useStore from '../store/user'
const { t } = useI18n()
defineProps<{ msg: string }>()

const uStore = useStore()
// const hello = computed(() => {
//   return t('hello')
// })
uStore.setUser('Vue3 !')
const name = computed(() => {
  return t('hello')
})
const count = ref(0)
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
