<template>
  <div>
    <h1>个人信息</h1>
    {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  // 钩子函数 过滤器
  beforeRouteEnter: (to, from, next) => {
    // 加载数据
    console.log("进入个人信息也之前，进行相关操作");
    next(vm => {
      // 进入路由之前执行getData方法
      vm.getData();
    });
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("进入个人信息也之后，进行相关操作");
    next();
  },
  // axios
  methods: {
    getData: function () {
      this.axios({
        method: 'get',
        url: 'http://localhost:8081/static/mock/data.json'
      }).then(function (response) {
        console.log(response);
      })
    }
  }
}
</script>

<style scoped>

</style>
