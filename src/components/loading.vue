<template>
    <div class="loading" v-if="show" transition="opacity">
        <div class="content">
            <img src="../../dist/img/loading.png" alt="">
        </div>
    </div>
</template>
<script>
    export default {
        props:["show"]
    }
</script>
<style lang="less">
.loading {
    z-index: 999;
    position: absolute;
    background: #fff;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    >.content {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -50px;
        margin-top: -50px;
        width: 100px;
        height: 100px;
        img {
            width: 100%;
            height: 100%;
            -webkit-animation: loadings 1s  linear infinite;
        }
    }
}
@-webkit-keyframes loadings{
    0%{
        transform:rotate(0deg);    
        -webkit-transform:rotate(0deg);    
        -moz-transform:rotate(0deg);
    }to{
        transform:rotate(360deg);    
        -webkit-transform:rotate(360deg);    
        -moz-transform:rotate(360deg);
    }
}
/* 必需 */
.opacity-transition {
  transition: all .5s ease-in-out;
  opacity: 1;
}

/* .expand-enter 定义进入的开始状态 */
/* .expand-leave 定义离开的结束状态 */
.opacity-enter {
    transform: translateY(0);
    opacity: 1;
}
.opacity-leave {
    transform: translateY(-100%);
    opacity: 0;
}
</style>