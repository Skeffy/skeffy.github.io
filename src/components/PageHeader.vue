<script setup>

</script>

<template>
    <header>
        <div id="heading">
            <h1>Noah Stevens</h1>
            <h2>Software Engineer</h2>
        </div>
        <div id="links">
            <a href="https://github.com/Skeffy" target="_blank" rel="noopener noreferrer">
                <img src="../assets/github.png" alt="Github logo" class="icon">
            </a>
            <a href="https://www.linkedin.com/in/noahstevens1/" target="_blank" rel="noopener noreferrer">
                <img src="../assets/linkedin-logo.webp" alt="LinkedIn logo" class="icon">
            </a>
            <a href="https://drive.google.com/file/d/1TK2e_J9a6EzilUrn5XAd1zyQYpo4Asxk/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <img src="../assets/resume.png" alt="Resume icon" class="icon">
            </a>
        </div>
    </header>
</template>

<style scoped>
header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 
    ". heading links";
    padding-bottom: 25px;
    margin-bottom: 100px;
    border-bottom: 4px solid orange
}

#heading>h1 {
    font-weight: bolder;
}

#heading {
    grid-area: heading;
    justify-self: center;
}

#links {
    grid-area: links;
    justify-self: right;
    align-self: center;
    padding-right: 50px;
}

.icon {
    height: 50px;
    width: 50px;
    margin-left: 10px;
    margin-right: 10px;
}
</style>