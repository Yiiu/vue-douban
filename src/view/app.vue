<template>
    <div class="main">
        <headers></headers>
        <div class="content">
            <router-view></router-view>
        </div>
        <footers></footers>
    </div>
</template>
<script>
    import headers from "./header";
    import footers from "./footer";

    export default {
        components :{
            headers,
            footers
        }
    }
</script>
<style>
</style>