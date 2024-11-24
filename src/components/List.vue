<script>
export default {
    props: ["list"]
}
</script>

<template>
    <div :id="list.name" class="list module">
        <h2 class="name">{{ list.name }}:</h2>
        <ul class="bulletlist">
            <li v-for="item in list.list" :value="item" class="listitem">{{ item }}</li>
        </ul>
    </div>
</template>

<style>
.list {
    height: fit-content;
    width: fit-content;
    margin: 10px;
}

.bulletlist {
    columns: 2;
}

.name {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
}

.listitem {
    padding-right: 10px;
}

@media (max-width: 750px) {
    .list {
        margin-left: auto;
        margin-right: auto;
    }
}
</style>