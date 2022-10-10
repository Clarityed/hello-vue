import Vue from 'vue';
import Router from 'vue-router';

// 导入视图组件
import Main from "../views/Main";
import Login from "../views/Login";
import NotFound from "../views/NotFound";
// 导入子模块组件
import UserProfile from "../views/user/Profile";
import UserList from "../views/user/List";

// 安装路由
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/main/:username',
      component: Main,
      props: true,
      // 路由嵌套
      children: [
        {path: '/user/profile/:id', name: 'UserProfile', component: UserProfile},
        {path: '/user/list/:id', name: 'UserList', component: UserList, props: true}
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/goHome',
      redirect: '/main'
    },
    {
      path: '/*',
      component: NotFound
    }
  ]
});
