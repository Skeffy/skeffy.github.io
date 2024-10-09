<script>
export default {
  props: ["project"],

  methods: {
    openProject() {
      window.open(this.project.link, '_blank');
    }
  }
}
</script>

<template>
  <div class="project">
    <div id="project-photo">
      <img :src="project.img" alt="Project thumbnail" class="project-thumbnail">
      <button @click="openProject()">Go to Project</button>
    </div>
    <div id="project-info">
      <h3>{{ project.name}}</h3>
      <h4>{{ project.tech }}</h4>
      <p>{{ project.desc }}</p>
    </div>
  </div>
</template>

<style scoped>
.project {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
  "photo info";
  margin-bottom: 50px;
}

#project-photo {
  grid-area: photo;
  display: grid;
  justify-items: center;
}

#project-info {
  grid-area: info;
  display: grid;
}

h3 {
  justify-self: center;
}

h4 {
  justify-self: center;
  margin-bottom: 10px;
}

button {
  width: 200px;
  height: 25px;
}

.project-thumbnail{
  height: 150px;
  margin-bottom: 20px;
}
</style>