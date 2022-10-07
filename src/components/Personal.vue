<template>
  <div>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <ul>
        <li v-for="item in personalList" :key="item.id">
        {{item.name}}
        </li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
name:'Personal',
  data () {
    return {
        name:""

    }
  },
  components: {
   

  },
  mounted() {

  },
  methods: {
    add(){
        const personobj={id:nanoid(),name:this.name}
        this.$store.commit("renyuan/Add_Person",personobj)
        this.name=''
    }

  },
  computed:{
    personalList(){
        return this.$store.state.renyuan.personalList
    }
  }
}

</script>
<style scoped lang='less'>
</style>