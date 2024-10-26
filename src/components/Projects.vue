<script>
import SingleProject from './SingleProject.vue';

export default {
    components: {
        SingleProject,
    },
}
</script>

<template>
  <div id="projects">
    <h2>Projects</h2>
    <SingleProject v-for="project in this.$store.state.projects" :project="project"/>
  </div>
</template>

<style scoped>
#projects {
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 25px;
  height: fit-content;
}

h2 {
  margin-bottom: 25px;
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
}
</style>