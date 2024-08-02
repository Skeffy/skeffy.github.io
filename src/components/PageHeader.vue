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
                <img src="../assets/github-logo.png" alt="Github logo" class="icon">
            </a>
            <a href="https://www.linkedin.com/in/noahstevens1/" target="_blank" rel="noopener noreferrer">
                <img src="../assets/linkedin-logo.webp" alt="LinkedIn logo" class="icon">
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
                <img src="" alt="Resume icon" class="icon">
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
    margin-bottom: 50px;
}

#heading {
    grid-area: heading;
    justify-self: center;
}

#links {
    grid-area: links;
}

.icon {
    height: 50px;
    width: 50px;
}
</style>