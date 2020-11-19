<template>
  <div>
    <h2>用户信息页</h2>
    {{id}}<br>
    {{info.name}}---{{info.url}}---{{info.address}}
  </div>
</template>

<script>
export default {
  props: ['id'],
  name: "UserProfile",
  data(){
    return{
      info:{
        name: null,
        url: null,
        address: {
          street: null,
          city: null,
          country: null
        }
      }
    }
  },

  beforeRouteEnter: (to,from,next)=>{
    console.log("进入'我的信息页'之前"),
      next(vm => {
        vm.getData();
      });
  },
  beforeRouteLeave: (to,from,next)=>{
    console.log("离开'我的信息页'之前")
    next()
  },
  methods:{
    getData:function () {
      this.axios({
        method:"get",
        url:"http://localhost:8080/static/mock/data.json"
      }).then(response=>console.log(this.info = response.data))
    }
  }
}
</script>

<style scoped>

</style>
