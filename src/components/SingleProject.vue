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
      <button @click="openProject()" class="button" role="button">Go to Project</button>
    </div>
    <div id="project-info">
      <h3 id="project-name">{{ project.name}}</h3>
      <h4 id="project-tech">{{ project.tech }}</h4>
      <p id="project-desc">{{ project.desc }}</p>
    </div>
  </div>
</template>

<style scoped>
.project {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
  "photo info";
  margin-bottom: 50px;
}

#project-photo {
  grid-area: photo;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

#project-info {
  grid-area: info;
  display: grid;
  grid-template-rows: 1fr 1fr 3fr;
  grid-template-areas:
  "title"
  "tech"
  "desc";
}

#project-name {
  grid-area: title;
  justify-self: center;
  align-self: last baseline;
  text-decoration: underline;
}

#project-tech {
  grid-area: tech;
  justify-self: center;
  margin-bottom: 10px;
}

#project-desc {
  grid-area: desc;
  padding-right: 25px;
}

.project-thumbnail{
  height: 150px;
  width: 150px;
  margin-bottom: 20px;
}

.button {
  width: 150px;
  height: 40px;
  background-color: #636363;
  border-radius: 3px;
  border: 1px solid orange;
  box-shadow: rgba(255, 255, 255, .7) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: orange;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI","Liberation Sans",sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.15385;
  margin: 0;
  outline: none;
  padding: 8px .8em;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
}

.button:hover,
.button:focus {
  background-color: #888888;
  color: rgb(255, 166, 0);
}

.button:focus {
  box-shadow: 0 0 0 4px rgba(0, 149, 255, .15);
}

.button:active {
  background-color: #acacac;
  box-shadow: none;
  color: #2c5777;
}

@media (max-width: 750px) {
  .project {
    display: flex;
    flex-direction: column-reverse;
  }

  #project-info {
    margin-bottom: 25px;
  }

  #project-desc {
    justify-self: center;
    padding: 0px;
  }
}
</style>