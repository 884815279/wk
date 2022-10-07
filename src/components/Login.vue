<template>
  <div>
    <h3>初始数据是：{{$store.state.number1}}</h3>
    <h1>当前求和为:{{sum}}</h1>
    <h1>放大十倍为：{{bigsum}}</h1>
    <H4>我在{{school}}，学习{{subject}}</H4>
    <h2>下方的总人数是：{{personalList.length}}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <!-- <button  @click="addjia">点我加一</button> -->
    <button @click="increament(n)">+</button>
    <button @click="decreament(n)">-</button>
    <button @click="increamentodd(n)">当前求和为基数再加</button>
    <button @click="increamwait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapState,mapGetters,mapActions,mapMutations } from 'vuex'
export default {
// eslint-disable-next-line vue/multi-word-component-names
name: 'Login',

  data () {
    return {
     n:1
    }
  },
  components: {


  },
  mounted() {
    console.log('Login',this.$store)

  },
  methods: {
    // addjia(){
    //   return 
    // },
   /*  increament(){
    this.$store.commit("Jia",this.n)
    },
    decreament(){
    this.$store.commit("Jian",this.n)
    }, */

   ...mapMutations('qiuhe',{increament:'Jia',decreament:'Jian'}),

    /* increamentodd(){
      if(this.$store.state.sum%2)
      this.$store.dispatch("jiaOdd",this.n)

    },
    increamwait(){
      setTimeout(()=>{
        this.$store.dispatch('jiaWait',this.n)
      },500
)
    }, */


    ...mapActions('qiuhe',{increamentodd:"jiaOdd",increamwait:"jiaWait"})
    


  },
  computed:{
   /*  bigsum(){
      return $store.getters.bigsum
    },
    sum(){
      return $store.state.sum
    },
    school(){
     return $store.state.school
    },
    subject(){
     return $store.state.subject
    }, */


    ...mapState('qiuhe',['sum','school','subject']),
    ...mapState('renyuan',['personalList']),
    ...mapGetters('qiuhe',{bigsum:"biggsum"})
  }
}

</script>
<style scoped lang='less'>
</style>