<template>

  <div class="page-navbar">
      <Header></Header>
    <!-- navbar -->
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">选项一</mt-tab-item>
      <mt-tab-item id="2">选项二</mt-tab-item>
      <mt-tab-item id="3">排行榜</mt-tab-item>
    </mt-navbar>
 
 
	<!-- tabcontainer -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in 10" :title="'内容 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 4" :title="'测试 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
          <!-- 排行榜组件 -->
        <Ranklist/>
      </mt-tab-container-item>
    </mt-tab-container>
    <Footer v-bind:message="bookcity"></Footer>
  </div>
</template>
 
<script>
export default {
  name: 'page-navbar',
 
  data() {
    return {
      selected: '1'
    };
  }
};
</script>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Ranklist from '@/components/bookcity/Ranklist'

export default {
  name: 'Bookcity',
  components: {
    Header,
    Footer,
    Ranklist
  },
  data () {
      return {
          selected: '',
          bookcity: 'bookcity',
            istrue: 0,
            items: [
                {name:'首页'},
                {name:'列表'},
                {name:'排行榜'}
            ]
      }
  },
    updated () {
        console.log(selected)
    }
}
</script>

<style>
</style>