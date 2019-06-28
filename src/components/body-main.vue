<template>
  <div>
    <Modal v-model="modal1" title="添加分组" @on-ok="ok(1)" loading='loading' @on-cancel="cancel">
      <Form action="" class="addYform" ref="formInline1" :model='formInline1' :rules="ruleValidate">
        <FormItem label="中文名称" prop="chn" :label-width="130">
          <Input placeholder="" v-model="formInline1.chn" clearable style="width: 200px" />
        </FormItem>
        <FormItem label="英文名称" prop="eng" :label-width="130">
          <Input placeholder="" v-model="formInline1.eng" clearable style="width: 200px" />
        </FormItem>
        <FormItem label="创建时间" prop="dateType" :label-width="130">
          <Input v-model="formInline1.initTime" disabled placeholder="Enter something..." clearable
            style="width: 200px" />
        </FormItem>
      </Form>

    </Modal>
    <Modal v-model="modal2" title="添加应用" @on-ok="ok(2)" loading='loading' @on-cancel="cancel">
      <Form action="" class="addYform" ref="formInline" :model='formInline' :rules="ruleValidate">
        <FormItem label="中文名称" prop="chn" :label-width="130">
          <Input placeholder="" v-model="formInline.chn" clearable style="width: 200px" />
        </FormItem>
        <FormItem label="英文名称" prop="eng" :label-width="130">
          <Input placeholder="" v-model="formInline.eng" clearable style="width: 200px" />
        </FormItem>
        <FormItem label="数据形式" prop="dateType" :label-width="130">
          <Select style="width:200px" clearable v-model="formInline.dateType">

            <Option v-for="item in cityList" :value="item.value" :key="item.value">
              {{ item.label }}</Option>
          </Select>
        </FormItem>
        <FormItem label="创建时间" prop="cateName" :label-width="130">
          <Input v-model="formInline.initTime" disabled placeholder="Enter something..." clearable
            style="width: 200px" />
        </FormItem>
      </Form>
    </Modal>
    <!-- <model ></model> -->
    <div class="title">
      <div class="name">
        <Icon type="logo-css3" size='18' color='#3BB5A0' />
        <span>应用管理</span>
      </div>
      <Button class="selfB" type="success" icon="ios-add-circle-outline" @click="modal1=true">添加分组</Button>
    </div>
    <Collapse v-model='initShow'>
      <Panel :key='item.name'  :name="item.name" class="panelTitle" v-for="(item,index) in items">
        {{item.name}}
        <div class="tool">
          <Icon type="ios-settings-outline" class="iicon" @click="update" />
          <Icon type="ios-trash-outline" class="iicon" @click="delet" />
        </div>
        <div class="allY" slot="content" @click='openAddF(item.id)'>
          <div class="addNode">
            <img src="../assets/folder.png" alt=""><br>
            <span>添加应用</span>
          </div>
        </div>
        <node-ying :list='item.list' :ind='index' :itemss='items' @change-item="changeItem" slot="content"></node-ying>
      </Panel>
    </Collapse>

  </div>
</template>
<script>
  import NodeYing from './nodeying/nodeying'
  //  import model from './model'
  export default {
    name: 'bodyMain',
    components: {
      NodeYing
    },
    data() {
      return {
        eachID: "",
        formInline: {
          chn: '',
          eng: '',
          dateType: '',
          initTime: this.formatDateTime(new Date()),
        },
        formInline1: {
          chn: '',
          eng: '',

          initTime: this.formatDateTime(new Date()),
        },
        ruleValidate: {
          chn: [{
            required: true,
            message: '必填',

          }],
          eng: [{
            required: true,
            message: '必填',

          }],
          dateType: [{
            required: true,
            message: '必填',

          }],
        },
        initShow: "0",
        initID: 50,
        loading: true,
        initAdmin: '张杰',
        modelselect: true,

        modal1: false,
        modal2: false,
        cityList: [{
            value: '1',
            label: '原始数据'
          },
          {
            value: '2',
            label: '原始数据1'
          },
          {
            value: '3',
            label: '原始数据2'
          }

        ],
        items: [{
            name: '第一个',
            id: 1,
            list: [{
                "name": "PAS1",
                "id": 210
              },
              {
                "name": "SASS1",
                "id": 230
              }
            ]
          },
          {
            name: '第二个',
            id: 2,
            list: [{
                "name": "PAS2",
                "id": 210
              },
              {
                "name": "SASS2",
                "id": 230
              }

            ]
          },
          {
            name: '第三个',
            id: 3,
            list: [{
                "name": "SGATA3",
                "id": 240
              },
              {
                "name": "ABD3",
                "id": 250
              }
            ]
          }
        ],


      }
    },
    methods: {
      openAddF: function (id) {
        this.modal2 = true;
        this.eachID = id;
      },
      formatDateTime: function (date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? ('0' + m) : m;
        var d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        var h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        var minute = date.getMinutes();
        minute = minute < 10 ? ('0' + minute) : minute;
        var second = date.getSeconds();
        second = second < 10 ? ('0' + second) : second;
        return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
      },
      update: function (e) {
        e.stopPropagation();
        this.$Message.info('编辑');
      },
      delet: function (e) {
        e.stopPropagation();
        this.$Message.info('删除');
      },
      ok: function (i) {
        var id = this.eachID;
        if (i == 2) {
          console.log(this.formInline)
          var items = this.items;
          for (var i = 0; i < items.length; i++) {
            if (items[i].id == id) {
              var obj = {}
              obj['id'] = this.formInline.chn;
              obj['name'] = this.formInline.eng;
              items[i].list.push(obj)

            }
          }
          this.modal2 = false;
        } else {
          console.log(this.formInline1)
          var items = this.items;
          var obj = {}
          obj['name'] = this.formInline1.chn;
          obj['id'] = this.formInline1.eng;
          obj['list'] = [];
          this.items.push(obj);
          this.modal1 = false;
        }

        debugger
        this.$refs['formInline'].resetFields();

        this.$refs['formInline1'].resetFields();
      },
      cancel() {
        this.$refs['formInline'].resetFields();
        this.$refs['formInline1'].resetFields();
      },
      changeItem(item) {
        this.items = item;
      }
    },
    mounted() {

    },
  }

</script>
<style scope>
  .title {

    background: #FAFAFA;
    border-bottom: 1px solid #ddd;
    padding: 7px 20px
  }

  .panelTitle:hover .tool {
    display: block
  }

  .tool {
    display: none
  }

  .iicon {
    font-weight: 800;
  }

  .iicon:hover {
    color: #00968D
  }


  .name {
    display: inline-block;
    height: 26px;
    line-height: 26px;

  }

  .selfB {
    float: right;
    background: #0fa081;
    height: 26px;
    width: 84px;
    text-align: center;
    line-height: 25px;
    padding: 0
  }

  .tool {
    position: absolute;
    top: 0px;
    font-size: 12px;
    left: 200px;
  }

  /* .allY,
  .sBtn02 {
    width: 148px;
    height: 132px;
    box-shadow: none;
    padding: 22px;
    text-align: center;
    background: #F7F9FA;
    display: inline-block;
    cursor: pointer;
    margin: 0 10px;
    z-index: 111;

  } */

  .allY:hover {
    -webkit-box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.3);
    box-shadow: 0px 1px 9px 0 rgba(0, 0, 0, 0.3);
  }

  label {
    width: 150px;
    display: inline-block;
    text-align: right;
    margin-right: 20px
  }

  .group {
    padding: 10px;
    position: relative;
  }

  .group-list,
  .container {
    position: relative;

  }

  .container {}

  .group-title {
    height: 40px;
    line-height: 40px;
    padding: 0 0 0 20px;
    background: #F7F9FA;
    cursor: pointer;
    margin-bottom: 20px;
  }

</style>
