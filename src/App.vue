<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <el-row class="tac">
          <el-col :span="20">
            <el-menu
              default-active="4"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              ctive-text-color="#ffd04b"
            >
              <router-link class="a" to="/game"><el-menu-item index="1">
                <i class="el-icon-place"></i>
                <span slot="title">游戏精彩时刻</span> </el-menu-item>
                </router-link>
                <router-link class="a" to="/gaoxiao">
              <el-menu-item index="2">
                <i class="el-icon-video-play"></i>
                <span slot="title">娱乐搞笑视频</span> </el-menu-item>
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

        <!-- <div> <router-link class="a" to="/game">游戏王者时刻</router-link></div>
   <div> <router-link class="a" to="/gaoxiao">搞笑娱乐视频</router-link></div>
   <div> <router-link class="a" to="/ashboard">仪表盘</router-link></div> -->
      </el-aside>
      <el-container>
        <el-header>
          <div class="righttop">
            <router-link class="a" to="/user"><span class="user">个人中心</span></router-link>
            <router-link class="a" to=""><span class="tuichu">退出</span></router-link>
          </div>
          
        </el-header>
        <el-main><router-view></router-view></el-main>
        <el-footer class="footer">Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
</script>

<style scoped>
.a {
  text-decoration: none;
}
.a:hover a:link a:visited a:active{
  text-decoration: none;
  color: #333;
}
.user{
  position: absolute;
  right: 50px;
  font-size: 13px;
}
.tuichu{
  position: absolute;
  right: 0;
  font-size: 13px;
}
.righttop{
  position: relative;
}
.el-menu-vertical-demo {
  width: 199px;
}
.el-header,
.el-footer {
  size: 10px;
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-color: #545c64;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
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
</style>
