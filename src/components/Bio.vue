<script setup>

</script>

<template>
  <div id="bio">
    <img id="headshot" src="../assets/headshot.webp" alt="">
    <div id="about">
        <h2>About Me</h2>
        <p>This is some shit I be doin'.</p>
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
    margin-right: 10px;
}

#about {
    grid-area: bio;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
}
</style>