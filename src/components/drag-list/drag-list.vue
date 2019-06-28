<template>
  <div>
    <Modal v-model="modal2" width="360">


      <div>
        <Icon type="ios-information-circle"></Icon>
        <span>确认删除此应用？</span>
      </div>
      <p>应用删除无法恢复。</p>

      <!-- <div slot="footer">
        <Button type="error" size="large" long :loading="modal_loading" @click="del">Delete</Button>
      </div> -->
    </Modal>
    <div class="drag-list-wrapper">
      <draggable  :class="dropConClass.left" :options="options" :value="list1"
        @input="handleListChange($event, dropConClass.left[0])" @end="handleEnd($event, dropConClass.left[0])">
        <div class="drag-list-item" v-for="(itemLeft, index) in list1" :key="`drag_li1_${index}`">
          <div class="sBtn02 allY" slot="content">
            <div class="addNode">
              <img src="../../assets/folder2.png" alt=""><br>
              <span :for='itemLeft.id'>{{itemLeft.name}}</span>
              <div class="list-container">
                <ul class="btn-list">
                  <li>
                    <Icon type="ios-create-outline" class="iicon" />
                  </li>
                  <li>
                    <Icon type="ios-code-working" class="iicon" />
                  </li>
                  <li>
                    <Icon type="ios-trash-outline" class="iicon" @click="delet(itemLeft.id)" />
                  </li>
                  <li>
                    <Icon type="ios-alert-outline" class="iicon" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </draggable>
    </div>
  </div>


</template>
<script>
  import draggable from 'vuedraggable'
  export default {
    name: 'DragList',
    components: {
      draggable
    },
    props: {
      list1: {
        type: Array,
        required: true
      },
      list2: {
        type: Array,
        default: () => []
      },
      dropConClass: {
        type: Object,
        default: () => ({})
      },
     
    },
    data() {
      return {
        options: {
          group: 'drag_list'
        },
        modal2: false
      }
    },
    methods: {
      handleListChange(value, type) {
        if (type === 'left') this.$emit('update:list1', value)
        else this.$emit('update:list2', value)
      },
      delet: function (id) {
        // debugger
        // e.stopPropagation();
        //  this.$Message.info('删除');
        var _t=this;
        this.$Modal.confirm({
          title: '确认删除此应用？',
          content: '应用删除无法恢复。',
          onOk:function(){
            _t.$emit('deleteY', id)
          }
          
        });
        // 

      },
      handleEnd(event, type) {
        debugger
        const srcClassName = (event.srcElement || event.target).classList[0]
        const targetClassName = event.to.classList[0]
        let src = ''
        let target = ''
        if (srcClassName === targetClassName) {
          if (type === 'left') {
            src = 'left'
            target = 'left'
          } else {
            src = 'right'
            target = 'right'
          }
        } else {
          if (type === 'left') {
            src = 'left'
            target = 'right'
          } else {
            src = 'right'
            target = 'left'
          }
        }
        this.$emit('on-change', {
          src: srcClassName,
          target: targetClassName,
          oldIndex: event.oldIndex,
          newIndex: event.newIndex,
          ele:event.item
        })
      }
    }
  }

</script>
<style>
  /* .drag-list-wrapper {
    height: 100%;
  }

  .drag-list-con {
    width: 50%;
    float: left;
  } */
  .allY,
  .sBtn02 {
    width: 148px;
    height: 132px;
    padding: 22px;
    text-align: center;
    background: #F7F9FA;
    display: inline-block;
    cursor: pointer;
    box-shadow: none;
    margin: 0 10px;
    float: left;

  }

  .drag-list-item {
    display: inline-block;
  }

  .allY:hover {
    -webkit-box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.3);
    box-shadow: 0px 1px 9px 0 rgba(0, 0, 0, 0.3);
  }

</style>
