<template>
  <div>
    <li v-for="(item,index) in fruit">
   {{item.address}}--{{item.price}}
  </li>
  <li v-for="(item,index) in autors">
    {{index}}--{{item.name}}--{{item.hometown}}--{{item.people}}

  </li>
  
  </div>
</template>

<script>
export default {
// eslint-disable-next-line vue/multi-word-component-names
name:'Home',
  data () {
    return {
      fruit:[
      {price:17,address:"河南"},
      {price:18,address:"意大利"},
      {price:199,address:"英国"}
    ],
    autors:[
      {name:'王杰',hometown:"陕西",people:5},
      {name:"据可信",hometown:"东北",people:14}
    ]

    }
  },
  components: {

  },
  mounted() {

  },
  methods: {

  },
}

</script>
<style scoped lang='less'>
</style>