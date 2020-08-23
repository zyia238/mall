<template>
  <div v-if="Object.keys(params).length !== 0">
    <table class="size">
      <tr v-for="(item,index) in ruleTable" :key="index">
        <td v-for="(tditem,tdindex) in item" :key="tdindex">{{tditem}}</td>
      </tr>
    </table>
    <table class="factory">
      <tr v-for="(item,index) in infoTable" :key="index">
        <td class="infoTableKey">{{item.key}}</td>
        <td class="infoTableValue">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "itemParams",
  data(){
      return {
          ruleTable:[],
          infoTable:[]
      }
  },
  props: {
      params:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  updated(){
      this.ruleTable = this.params.rule.tables[0];
        this.infoTable = this.params.info.set
  }
};
</script>

<style lang="" scoped>
.size, .factory{
  width: 100%;
}

.size tr {
  display: flex;
  height: 20px;
  border-bottom: 1px solid #666;
}

.size tr td {
  flex: 1;
  text-align: center;
  line-height: 20px;
}



.infoTableKey{
    width: 25%;
}

.infoTableValue{
    color:skyblue;

}
</style>
