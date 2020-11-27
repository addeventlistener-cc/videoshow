<template>
    <div>
        <ul class="videolist">
          <li @click="watch"><a href="#"><img src="../img/c6672e4642f433948f54b2e0ad68c432.jpg.big.webp" alt=""><span>招即浪第21期：远离谐星搞笑，韩信变身五星刺客</span></a></li>
          <li @click="watch"><a href="#"><img src="../img/c6672e4642f433948f54b2e0ad68c432.jpg.big.webp" alt=""><span>招即浪第21期：远离谐星搞笑，韩信变身五星刺客</span></a></li>
          <li @click="watch"><a href="#"><img src="../img/c6672e4642f433948f54b2e0ad68c432.jpg.big.webp" alt=""><span>招即浪第21期：远离谐星搞笑，韩信变身五星刺客</span></a></li>
          <li @click="watch"><a href="#"><img src="../img/c6672e4642f433948f54b2e0ad68c432.jpg.big.webp" alt=""><span>招即浪第21期：远离谐星搞笑，韩信变身五星刺客</span></a></li>
          <li @click="watch"><a href="#"><img src="../img/c6672e4642f433948f54b2e0ad68c432.jpg.big.webp" alt=""><span>招即浪第21期：远离谐星搞笑，韩信变身五星刺客</span></a></li>
          <li @click="watch"><a href="#"><img src="../img/c6672e4642f433948f54b2e0ad68c432.jpg.big.webp" alt=""><span>招即浪第21期：远离谐星搞笑，韩信变身五星刺客</span></a></li>
          <li @click="watch"><a href="#"><img src="../img/c6672e4642f433948f54b2e0ad68c432.jpg.big.webp" alt=""><span>招即浪第21期：远离谐星搞笑，韩信变身五星刺客</span></a></li>
          <li @click="watch"><a href="#"><img src="../img/c6672e4642f433948f54b2e0ad68c432.jpg.big.webp" alt=""><span>招即浪第21期：远离谐星搞笑，韩信变身五星刺客</span></a></li>
          <li @click="watch"><a href="#"><img src="../img/c6672e4642f433948f54b2e0ad68c432.jpg.big.webp" alt=""><span>招即浪第21期：远离谐星搞笑，韩信变身五星刺客</span></a></li>
          <li @click="watch"><a href="#"><img src="../img/c6672e4642f433948f54b2e0ad68c432.jpg.big.webp" alt=""><span>招即浪第21期：远离谐星搞笑，韩信变身五星刺客</span></a></li>
          <li @click="watch"><a href="#"><img src="../img/c6672e4642f433948f54b2e0ad68c432.jpg.big.webp" alt=""><span>招即浪第21期：远离谐星搞笑，韩信变身五星刺客</span></a></li>
          <li @click="watch"><a href="#"><img src="../img/c6672e4642f433948f54b2e0ad68c432.jpg.big.webp" alt=""><span>招即浪第21期：远离谐星搞笑，韩信变身五星刺客</span></a></li>
          <li @click="watch"><a href="#"><img src="../img/c6672e4642f433948f54b2e0ad68c432.jpg.big.webp" alt=""><span>招即浪第21期：远离谐星搞笑，韩信变身五星刺客</span></a></li>
          <li @click="watch"><a href="#"><img src="../img/c6672e4642f433948f54b2e0ad68c432.jpg.big.webp" alt=""><span>招即浪第21期：远离谐星搞笑，韩信变身五星刺客</span></a></li>
          <li @click="watch"><a href="#"><img src="../img/c6672e4642f433948f54b2e0ad68c432.jpg.big.webp" alt=""><span>招即浪第21期：远离谐星搞笑，韩信变身五星刺客</span></a></li>
          <li @click="watch"><a href="#"><img src="../img/c6672e4642f433948f54b2e0ad68c432.jpg.big.webp" alt=""><span>招即浪第21期：远离谐星搞笑，韩信变身五星刺客</span></a></li>
          
        </ul>
    </div>
</template>
<script>
export default {
    data() {
      return {
        
      }
    },
    methods: {
      watch(){
        alert('后台数据还没准备好，稍安勿躁')
      }
    },
}
</script>
<style scoped>
h1 {
  color:red
}
.videolist{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 15px 20px 0 80px;
  box-sizing: border-box;
  margin: 0;
  width: 100%;
  height:700px;
}
ul li{
  margin-bottom: 8%;
  margin-left: 15px;
  list-style: none;
  width: 250px;
  height: 140px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
ul li a{
  text-decoration: none;
}
ul li a span{
  color: #666;
  font-size: 14px;
}
ul li img{
  width: 100%;
  height:100%
}
</style>