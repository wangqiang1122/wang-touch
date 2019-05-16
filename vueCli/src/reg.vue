<template>
  <div>
    <Header></Header>
    <form action="">
      账号：<input type="text" ><br>
      密码：<input type="text"><br>
      <input type="submit" value="提交">
      <router-link to="/">返回登陆</router-link>
    </form>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/cmp-header'
import Footer from '@/components/cmp-footer'

export default {
  name: 'reg',
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>
