<script>
export default {
    props: ["list"]
}
</script>

<template>
    <div :id="this.list.name" class="list">
        <h2 class="name">{{ this.list.name }}:</h2>
        <ul class="bulletlist">
            <li v-for="item in this.list.list" :value="item" class="listitem">{{ item }}</li>
        </ul>
    </div>
</template>

<style>
.list {
    background-color: rgb(206, 149, 63);
    padding: 25px;
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: fit-content;
    margin: 10px;
    border-radius: 25px;
    box-shadow: 5px 5px 5px black;
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
</style>