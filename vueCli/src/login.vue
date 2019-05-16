<template>
    <div>
      <Header></Header>
      <form action="">
        账号：<input type="text" ><br>
        密码：<input type="text"><br>
        <input type="submit" value="提交">
        <router-link to="/reg">我要注册</router-link>
      </form>
      <Footer></Footer>
    </div>
</template>

<script>
import axios from 'axios'

import Header from '@/components/cmp-header'
import Footer from '@/components/cmp-footer'

export default {
  name: 'login',
  mounted () {
    console.log(this)
    this.$axios.get('http://localhost:3333/api/house/page').then((data) => {
      console.log(data)
    })
    // id=ffdfaad2f8d748679d285a64e5e481ed
    axios.get('http://localhost:3333/api/house/page/ffdfaad2f8d748679d285a64e5e481ed').then((data) => {
      console.log(data)
    })
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>
