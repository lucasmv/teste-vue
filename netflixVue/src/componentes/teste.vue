<template>
    <h3>{{titulo}}</h3>
</template>

<script>
export default {
    name: "lucas",
    props: ["titulo"]
};
</script>

<style lang="scss">
    h3 {
        color: red;
    }
</style>