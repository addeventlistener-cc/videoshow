<template>
  <div id="app">
    <el-container class="contain">
      <el-aside width="200px">
        <div class="userimg" v-show="count==0">
          <el-avatar >未登录</el-avatar>
        </div>
        <div class="userimg" v-show="count==1">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
        <el-row class="tac">
          <el-col :span="20">
            <el-menu
              default-active="4"
              class="el-menu-vertical-demo"
              background-color="#545c64"
              text-color="#fff"
              ctive-text-color="#ffd04b"
            >
              <router-link class="a" to="/game"
                ><el-menu-item index="1">
                  <i class="el-icon-place"></i>
                  <span slot="title">游戏精彩时刻</span>
                </el-menu-item>
              </router-link>
              <router-link class="a" to="/gaoxiao">
                <el-menu-item index="2">
                  <i class="el-icon-video-play"></i>
                  <span slot="title">娱乐搞笑视频</span>
                </el-menu-item>
              </router-link>
              <router-link class="a" to="/ashboard">
                <el-menu-item index="3">
                  <i class="el-icon-odometer"></i>
                  <span slot="title">仪表盘</span>
                </el-menu-item>
              </router-link>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-header>
          <div class="righttop">
            <router-link class="a" to="/user"
            v-show="count==1"
              ><span class="user">个人中心</span></router-link
            >
            <router-link class="a" to=""
            v-show="count==1"
              ><span class="tuichu" @click="loginout">退出</span></router-link
            >

            <router-link class="a" to="/login" 
            v-show="count==0"
              ><span class="user">登录</span></router-link
            >
            <router-link class="a" to="/register"
            v-show="count==0"
              ><span class="tuichu">注册</span></router-link
            >
          </div>
        </el-header>
        <el-main><router-view></router-view></el-main>
        <el-footer class="footer"></el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    loginout(){
      this.$store.state.count=0
    }
  },
  computed: {
    count(){
      return this.$store.state.count
    }
  },
  watch: {
    count:{
      handler(newval,oldval){
        console.log(newval)
        console.log(oldval)
      },
      immediate:true
    }
  },
}
</script>
<style scoped>
.contain {
  height: 700px;
}
.user {
  position: absolute;
  right: 50px;
  font-size: 13px;
  color: #fff;
}
.tuichu {
  position: absolute;
  right: 0;
  font-size: 13px;
  color: #fff;
}
.righttop {
  position: relative;
}
.el-menu-vertical-demo {
  width: 199px;
}
.el-header,
.el-footer {
  size: 10px;
  background-color:#545c64ad;
  color: #333;
  line-height: 60px;
}
.el-aside {
  background-color:#112b34c7;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #fdf6ec63;
  color: #333;
  padding: 0;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-menu {
  border: none;
}
.userimg{
  height: 100px;
  line-height: 150px;
}
.userimg span{
  font-size: 8px;
}
</style>
