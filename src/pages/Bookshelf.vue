<template>
  <div id="bookshelf">
    <Header></Header>
    <!-- vue父子组件传值，引号内必须为变量 -->
    <h3>书架</h3>
    <Footer v-bind:message="bookshelf"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'Bookshelf',
  components: {
    Header,
    Footer
  },
  
  data () {
      return {
          bookshelf: 'bookshelf'
      }
  }
}
</script>

<style>
</style>