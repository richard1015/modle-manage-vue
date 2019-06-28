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
    props: ["list", 'ind', 'itemss'],
    components: {
      DragList
    },
    data() {
      return {
        dropConClass: {
          left: ['drop-box' + this.ind, 'left-drop-box']
        },
        items: this.itemss,
        list1: this.list
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
      deleteY: function (id) {
        var arr = this.list1;
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].id == id) {
            arr.splice(i, 1)
          }
        }
        this.list1 = arr

      },
      handleChange({
        src,
        target,
        oldIndex,
        newIndex,
        ele
      }) {
        debugger
        var nowArr = this.list1;
        var name = ele.getElementsByTagName("span")[0].innerText,
          id = ele.getElementsByTagName("span")[0].getAttribute("for");
        //  this.list1 = nowArr;
        // this.items=[];

        nowArr.splice(oldIndex, 1)
        var srcIndex = Number(src.substring(8)),
          targetIndex = Number(target.substring(8));
        this.items[srcIndex]['list'] = nowArr;
        var arrr = this.items[targetIndex]['list'];
        arrr.splice(newIndex, 0, {
          name: name,
          id: id
        })
        this.items[targetIndex]['list'] = arrr;
        this.$emit('change-item', this.items);
        debugger
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
