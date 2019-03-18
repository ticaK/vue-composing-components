<template>
  <div id="app">
    <Base/>
    <Concrete/>
  </div>
</template>

<script>
import Base from './components/Base.vue'
import Concrete from './components/Concrete.vue'

export default {
  name: 'app',
  components: {
    Base,
    Concrete
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
