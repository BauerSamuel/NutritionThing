<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12">
        <input type="date" v-model="date">
        <button @click="CreateLog">Creates New Date</button>
      </div>
      <div class="col-12">
        <MyLogs></MyLogs>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import MyLogs from '@/components/MyLogs.vue'

  export default {
    name: 'home',
    mounted() {
      this.$store.dispatch('initialize')
    },
    data() {
      return {
        date: new Date().toISOString().split('T')[0]
      }
    },
    components: {
      MyLogs
    },
    methods: {
      CreateLog() {
        let date = this.date || Date.now()
        this.$store.dispatch('createLog', { date })
      }
    }
  }
</script>
<style>
  img {
    max-height: 1em;
  }
</style>