<script setup>
import PageHeader from './components/PageHeader.vue';
import Bio from './components/Bio.vue';
import Projects from './components/Projects.vue';
import List from './components/List.vue';
import Education from './components/Education.vue';
</script>

<template>
  <div id="app">
    <PageHeader />
    <main>
      <Bio />
      <div id="content">
        <Projects />
        <div id="lists">
          <List :list="$store.state.skills"/>
          <List :list="$store.state.softwares"/>
        </div>
        <Education />
      </div>
    </main>
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
}

#content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-areas: 
  "projects lists"
  "education education";
}

#lists {
  grid-area: lists;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

#projects {
  grid-area: projects;
}

#education {
  grid-area: education;
}

.module {
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 25px;
  padding: 25px;
  display: flex;
  flex-direction: column;
}
</style>