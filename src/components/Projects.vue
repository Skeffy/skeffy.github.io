<script>
import SingleProject from './SingleProject.vue';

export default {
    components: {
        SingleProject,
    },
}
</script>

<template>
  <div id="projects" class="module">
    <h2>Projects</h2>
    <SingleProject v-for="project in this.$store.state.projects" :project="project"/>
  </div>
</template>

<style scoped>
#projects {
  height: fit-content;
}

h2 {
  margin-bottom: 25px;
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
}
</style>