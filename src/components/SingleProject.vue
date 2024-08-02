<script>

</script>

<template>
  <div class="project">
    <div id="project-photo">
      <img src="" alt="Project thumbnail">
      <button>Go to Project</button>
    </div>
    <div id="project-info">
      <h3>Test Project</h3>
      <h4>Java | Spring | Javascript</h4>
      <p>This is the description of the roject. It does a whole bunch of whacky, crazy shit.</p>
    </div>
  </div>
</template>

<style scoped>
.project {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
  "photo info";
}

#project-photo {
  grid-area: photo;
  display: grid;
  justify-content: center;
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
</style>