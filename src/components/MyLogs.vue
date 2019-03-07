<template>
   <div class="myLogs row">
      <div class="col-12">
         <ul>
            <li v-for="log in logs">
               <router-link :to="{name: 'details', params: {logId:log._id}}">{{log.date}}</router-link>
            </li>
         </ul>
      </div>
   </div>
</template>

<script>
   export default {
      name: "myLogs",
      props: [],
      data() {
         return {}
      },
      computed: {
         logs() {
            return this.$store.state.logs
         },
         activeLog() {
            return this.$store.state.activeLog
         }
      },
      methods: {},
      components: {}
   }
</script>
<style>
</style>