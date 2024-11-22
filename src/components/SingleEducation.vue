<script>
export default {
    props: ['education'],
}
</script>

<template>
    <div class="education">
        <h3 id="ed-name">{{ education.name }}</h3>
        <h3 id="ed-date">{{ education.date }}</h3>
        <p id="ed-desc">{{ education.desc }}</p>
    </div>
</template>

<style>
.education {
    display: grid;
    grid-template-columns: 1fr, 1fr;
    grid-template-areas: 
    "name date"
    "desc desc";
}

#ed-name {
    grid-area: name;
}

#ed-date {
    grid-area: date;
}

#ed-desc {
    grid-area: desc;
}
</style>