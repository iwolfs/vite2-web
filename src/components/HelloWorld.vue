<template>
  <h1>{{ msg }} <span>green</span> <i>light</i></h1>
  <el-button type="primary" @click="state.count += 2">Element Button +2</el-button>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

<style lang="scss" scoped>
h1 {
  color: red;

  & > span {
    color: $color-primary;
  }

  & > i {
    color: $text-light;
  }
}
a {
  color: #42b983;
}
</style>