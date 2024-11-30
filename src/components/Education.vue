<script>
import SingleEducation from './SingleEducation.vue';

export default {
    components: {
        SingleEducation,
    }
}
</script>

<template>
    <div id="education" class="module">
        <h2>Education / Certifications</h2>
        <SingleEducation v-for="education in this.$store.state.education" :education="education"/>
    </div>
</template>

<style>

</style>