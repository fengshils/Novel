<template>
  <div id="ranklist">
        <span>男频
        <mt-cell v-for="rank in ranklist.male"  :title="rank.title" v-bind:to="'/rankdetail/'+rank._id">
          
        </mt-cell>   </span>
        <span>女频  
        <mt-cell v-for="rank in ranklist.female" :title="rank.title">
        </mt-cell></span>    
        <mt-cell v-for="rank in ranklist.equb" :title="rank.title">
        </mt-cell>
  </div>
</template>

<script>



export default {
  name: 'Ranklist',


 data () {
   return {
     loading: true,
     ranklist: []
   }
 },
  methods: {

 },
 mounted () {
        this.$http.get("http://novel-test.moyu101.top/rank-category")
          .then(function(response){
            console.log(response);
            this.ranklist = response.body;
          })
  }
 }

</script>

<style>
</style>
