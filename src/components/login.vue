<template>
  <div class="main">
    <div class="baoguo">
      <el-input
        @focus="focus"
        placeholder="请输入用户名"
        v-model="username"
        clearable
        class="username"
      >
      </el-input>
    </div>
    <div @keyup.enter="login" class="baoguo">
      <el-input
        
        @focus="focus"
        placeholder="请输入密码"
        v-model="password"
        show-password
        class="password"
      ></el-input>
    </div>
    <p class="tips">{{ tips }}</p>
    <div><el-button type="primary" @click="login" >登录</el-button></div>
    <span
      >没有账户？<router-link to="/register" class="register"
        >去注册</router-link
      ></span
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      tips: "",
      username: "",
      password: "",
    };
  },
  methods: {
    // http://192.168.137.242:8080/login/in
    login() {
      if (this.$store.state.count == 0) {
        this.$axios
          .get(
            `http://192.168.137.242:8080/login/in?username=${this.username}&password=${this.password}`
          )
          .then((response) => {
            if (response.data === "登录成功") {
              alert('登录成功')
              this.$store.commit("add");
              this.$router.push("/game");
            } else {
              this.tips = "用户名或密码错误";
            }
          })
          .catch((error) => console.log(error));
      }
    },
    focus() {
      if (this.tips != "") {
        this.username = "";
        this.password = "";
        this.tips = "";
      }
    }
  },
};
</script>
<style scoped>
.main {
  text-align: center;
  line-height: 150px;
}
h1 {
  color: red;
}
.baoguo {
  height: 120px;
}
.el-input {
  width: 30%;
  line-height: 95px;
}
.tips {
  height: 20px;
  color: red;
  font-size: 12px;
  line-height: 50px;
}
span {
  color: rgb(78, 77, 77);
  font-size: 10px;
}
.register {
  text-decoration: none;
  color: red;
}
</style>
