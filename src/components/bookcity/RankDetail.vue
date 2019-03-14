<template>
  <div id="rankdetail">
      <Header></Header>
      <mt-cell v-for="book in ranklist.ranking.books" :title="book.title" v-bind:to="'/bookdetail/'+book._id"></mt-cell>
  </div>
</template>

<script>
import Header from '@/components/Header'


export default {
  name: 'Rankdetail',
  component: {
      Header
  },

 data () {
   return {
     loading: true,
     ranklist: []
   }
 },
  methods: {

 },
 mounted () {
        this.$http.get("http://novel-test.moyu101.top/rank/"+this.$route.params.id)
          .then(function(response){
            console.log(response);
            this.ranklist = response.body;
          })
  }
 }

</script>

<style>
</style>