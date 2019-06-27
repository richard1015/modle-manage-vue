<template>
  <div class="parent">
    <drag-list :list1.sync="list1" :dropConClass="dropConClass" @on-change="handleChange" v-on:deleteY='deleteY'>
      <div slot="left" slot-scope="left">{{ left.itemLeft.name }}</div>
    </drag-list>
  </div>
</template>
<script>
  import DragList from '../drag-list'
  export default {
    name: 'NodeYing',
    props: ["list"],
    components: {
      DragList
    },
    data() {
      return {
        dropConClass: {
          left: ['drop-box', 'left-drop-box']
        },
        handleList: [],
        list1:this.list
        // list1: [{
        //     "name": "PAS",
        //     "id": 210
        //   },
        //   {
        //     "name": "SASS",
        //     "id": 230
        //   }
        // ]
      }
    },
    methods: {
      deleteY:function(id){
       var arr=this.list1;
        for(var i=0;i<arr.length;i++){
          if(arr[i].id==id){
            arr.splice(i,1)
          }
        }
        this.list1=arr
        debugger
      },
      handleChange({
        src,
        target,
        oldIndex,
        newIndex
      }) {
        this.handleList.push(`${src} => ${target}, ${oldIndex} => ${newIndex}`)
      }
    },
  }

</script>
<style scope>
  @import "../../css/style.css";
  @import "../../css/stylesCode.css";

  .ivu-collapse-content>.ivu-collapse-content-box {
    height: 160px;
  }

  .drop-box {
    height: 132px;
  }

</style>
