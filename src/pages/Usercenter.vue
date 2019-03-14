<template>
  <div id="usercenter">
    <Header></Header>
    <h3>用户中心</h3>
    <Footer v-bind:message="usercenter"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'Usercenter',
  components: {
    Header,
    Footer
  },
  data () {
      return {
          usercenter: 'usercenter'
      }
  }
}
</script>

<style>
</style>