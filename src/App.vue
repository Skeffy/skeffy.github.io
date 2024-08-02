<script setup>
import PageHeader from './components/PageHeader.vue';
import Bio from './components/Bio.vue';
import Projects from './components/Projects.vue';
</script>

<template>
  <div>
    <PageHeader />
    <main>
      <Bio />
      <Projects />
    </main>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}
</style>