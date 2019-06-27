<template lang="">
  <div>
    
  </div>
</template>
<script>
  export default {
    name: 'model',
    props: ['modal1', 'modal2'],
    data() {
      return {
       // modalF: this.modal1,
     //   modalY: this.modal2,
        loading: true,
       
      }
    },
    methods: {
      ok: function () {
        this.$Message.info('Clicked ok');
        this.modal1 = false
      },
      cancel() {
        this.$Message.info('Clicked cancel');
      },

    },
  }

</script>
