<template>
    <div @mouseover="on" @mouseout="off">
        <a v-link="{ name: 'details', params: { id: data.id }}"><div class="img"><img :src="data.images.large" alt=""></div></a>
        <div class="title" :class="{'inmovie-o':btn}">
            <a v-link="{ name: 'details', params: { id: data.id }}"><h3>{{data.title}}</h3></a>
            <h4>{{data.original_title}}</h4>
            <span class="nums">评分:{{data.rating.average}}</span>
            <span class="year">上映时间:{{data.year}}</span>
        </div>
    </div>
</template>
<style lang="less">
.inmovie-o {
    bottom: 0px !important;
}
</style>
<script>
export default {
    props:["data"],
    data(){
        return {
            btn:false
        }
    },
    methods :{
        on : function(){
            this.btn = true;
        },
        off: function(){
            this.btn = false;
        }
    }
}
</script> 