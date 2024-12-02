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

@media (min-width: 1300px) {
  #content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-areas: 
    "projects lists"
    "education education";
  }
  
  #lists {
    grid-area: lists;
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
    margin-top: 30px;
  }
}

@media (max-width: 1300px) {
  #lists {
    grid-area: lists;
    margin-bottom: 50px;
    margin-top: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items:first baseline;
  }
}

@media (max-width: 950px) {
  #lists {
    grid-area: lists;
    margin-bottom: 50px;
    margin-top: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items:first baseline;
  }
}

@media (max-width: 750px) {
  #lists {
    display: flex;
    flex-direction: column;
    justify-items: center;
  }
}

@media (max-width: 500px) {
  #app {
    font-size: 12px;
  }
}
</style>