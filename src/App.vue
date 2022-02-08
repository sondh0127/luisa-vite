<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  data: function() {
    return {
      design: {
        figmaFile: "zzX478XHKdWV8weZpPX4Xf",
        figmaAccessKey: "321333-9ab24b9e-de0c-4e5d-9a0d-2b638cdaa269",
      },
      viewModel: {
        name:'',
        greeting: '',
        answer: '',
        result: '',
      },
      config: {
      }
    }
  },
  components: {
  },
  methods: {
    async sayHello (event) {
      console.log('[LOG] ~ file: App.vue ~ line 25 ~ event', event)
      this.viewModel.greeting = "Hello " + this.viewModel.name
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })

      return 'Screen2'
    },
    async showResult() {
      this.viewModel.result = `Your answer is ${this.viewModel.answer}`
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
      return 'Screen1'
    }
  }
});
</script>

<template>
  <Luisa :design="design" :config="config" v-model="viewModel" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
