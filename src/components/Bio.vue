<script setup>

</script>

<template>
  <div id="bio">
    <img id="headshot" src="../assets/headshot.png" alt="">
    <div id="about">
        <h2>About Me:</h2>
        <p>I am a software developer who loves a good challenge. Some of the technologies I use include Java, JavaScript, Vue.js, Spring Boot, and PostgreSQL, but there are many more I am familiar with. With a passion for learning and a drive to add to my toolbelt, 
          I am constantly experimenting with new languages and technologies. Outside of my love of programming, I enjoy playing tabletop games with friends, and learning everything I can about rockety and space travel.
        </p>
    </div>
  </div>
</template>

<style scoped>
#bio {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-areas: 
    "photo bio";
    margin-bottom: 50px;
}

#headshot {
    grid-area: photo;
    width: 250px;
    justify-self: right;
    margin-right: 20px;
    clip-path: circle();
}

#about {
    grid-area: bio;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    line-height: 2;
}
</style>