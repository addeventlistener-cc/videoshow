<template>
  <div class="main">
    <div class="baoguo">
      <el-input
        placeholder="请输入4-12位字母或数字"
        v-model="username"
        clearable
        class="username"
      >
      </el-input>
    </div>
    <div class="baoguo">
      <el-input
        placeholder="请输入6位数字密码"
        v-model="password"
        show-password
        class="password"
      ></el-input>
    </div>
    <div @keyup.enter='register' class="baoguo">
      <el-input
        placeholder="请输入您的真实姓名"
        v-model="name"
        clearable
        class="name"
      ></el-input>
    </div>
    <p class="tips">{{ tips }}</p>
    <div><el-button type="danger" @click="register">注册</el-button></div>
  </div>
</template>
<script>
import Qs from "qs";

export default {
  data() {
    return {
      username: "",
      password: "",
      name: "",
      tips: "",
    };
  },
  methods: {
    register() {
      var data = Qs.stringify({
        username: this.username,
        password: this.password,
        name: this.name,
      });
      if (this.$store.state.count == 0) {
        
        this.$axios
          .post("http://192.168.137.242:8080/user/add", data)
          .then((res) => {
            if (res.data == 1) {
              this.$store.commit('add')
              this.$router.push("/register/regsuccess");
            } else {
              this.tips = res.data;
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>
<style scoped>
.main {
  line-height: 150px;
  text-align: center;
}
.tips {
  height: 20px;
  color: red;
  font-size: 12px;
  line-height: 50px;
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
</style>