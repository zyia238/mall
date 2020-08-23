<template>
  <div v-if ="Object.keys(comments) !== 0">
    <div class="avatar">
      <img :src="avatar" />
      <span>{{uname}}</span>
    </div>
    <div>
      <p>{{content}}</p>
      <span>{{created | date}}</span>
      <span>{{style}}</span>
      <span></span>
    </div>
  </div>
</template>

<script>
import {formatDate} from "../../../../utils/formatDate"

export default {
  name: "comments",
  data(){
      return{
          avatar:'',
          uname:'',
          content:'',
          created:0,
          style:''
      }
  },
  methods:{
      formatDate
  },
  props: {
    comments: {
      type: Object,
      default() {
        return {};
      }
    }
  },
    updated(){
        this.avatar = this.comments.avatar 
        this.uname = this.comments.uname 
        this.content = this.comments.content 
        this.created = this.comments.created 
        this.style = this.comments.style
        // console.log(this.formatDate)
        // let date = new Date(this.created*1000)
        // console.log(this.formatDate(date,'yyyy-MM-dd'))
    },
  filters:{
      date(value){
        let date = new Date(value*1000)
        return formatDate(date,'yyyy-MM-dd')
      }
  }
};
</script>

<style lang="" scoped>
</style>
