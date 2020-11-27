<template>
  <div>
    <p>注册成功，{{num}}s后跳转首页</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
        num:3,
        timeid:''
    };
  },
  methods: {
    
  },
  mounted() {
      if(this.num!=1){
         this.timeid=setInterval(()=>{
          this.num=this.num-1
      },1000)
      }
      setTimeout(()=>{
          this.$router.push("/game");
      }, 3000);
    },
    updated() {
        if(this.num===0){
            clearInterval(this.timeid)
        }
        
    },
};
</script>
<style lang="">
</style>