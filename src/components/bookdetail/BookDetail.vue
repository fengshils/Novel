<template>
  <div id="bookdetail">
      <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
        <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
      <!-- <img v-bind:src="bookinfo." alt=""> -->
      <p><label for=""></label>{{bookinfo.title}}</p>
      <p><label for=""></label>{{bookinfo.author}}</p>
      <p><label for=""></label>{{bookinfo.minorCateV2}}</p>
      <p><label for=""></label>{{bookinfo.longIntro}}</p>
      
      <div class="right">
          <button>查看书目</button>
          <button>最新章节:{{bookinfo.lastChapter}}</button>
          <button>加入书架</button>
      </div>

  </div>
</template>

<script>
import Header from '../../components/Header'


export default {
  name: 'BookDetail',
  component: {
      Header
  },

 data () {
   return {
     loading: true,
     bookinfo: []
   }
 },
  methods: {

 },
 mounted () {
        this.$http.get("http://novel-test.moyu101.top/book-info/"+this.$route.params.id)
          .then(function(response){
            console.log(response);
            this.bookinfo = response.body;
          })
  }
 }

</script>

<style>
</style>