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
    display: grid;
}

h2 {
    justify-self: center;
    margin-bottom: 25px;
}
</style>