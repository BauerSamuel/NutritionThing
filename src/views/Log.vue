<template>
  <div class=" ">
    <search></search>
    <p>We're in the log view for {{activeLog._id}}.</p>
  </div>
</template>

<script>
  import Search from '@/components/Search.vue'
  export default {
    name: "",
    props: [],
    data() {
      return {

      }
    },
    mount() {

    },
    computed: {
      activeLog() {
        // this.$store.
      }
    },
    methods: {},
    computed: {
      activeLog() {
        return this.$store.state.activeLog
      }
    },
    components: {
      Search
    }
  }
</script>
<style>
</style>