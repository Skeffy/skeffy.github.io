<script setup>
import PageHeader from './components/PageHeader.vue';
import Bio from './components/Bio.vue';
import Projects from './components/Projects.vue';
import List from './components/List.vue';
</script>

<template>
  <div id="app">
    <PageHeader />
    <main>
      <Bio />
      <div id="lists">
        <List :list="this.$store.state.skills"/>
        <List :list="this.$store.state.softwares"/>
      </div>
      <Projects />
    </main>
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
}

#lists {
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  justify-content: space-evenly;
}
</style>