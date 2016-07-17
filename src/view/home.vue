<template>
        <div class="moves wrapper" v-if="!btns">
            <div class="hots">
                <h2>{{ theaters.title }}</h2>
                <ul class="clearfix">
                    <li v-for="mov in theaters.mov">
                        <inmovie :data.sync='mov'></inmovie>
                    </li>
                </ul>
            </div>
        </div>
        <loading :show="btns"></loading>
</template>
<style lang="less">
.hots {
    ul{
        width: 1120px;
        li {
            position: relative;
            width: 100%;
            height:340px;
            overflow: hidden;
            background-size: cover;
            background-position: center center;
            width: 258px;
            margin-right: 20px;
            margin-bottom: 20px;
            border: 1px #e4e4e4 solid;
            border-radius: 4px;
            float: left;
            //overflow: hidden;
            .img {
                transition: 0.3s all;
                img{
                    text-align: center;
                    margin-left: -8%;
                }
            }
            .title {
                transition: 0.3s all;
                box-sizing: border-box;
                width: 100%;
                position:absolute;
                bottom: -45px;
                background: url(../../dist/img/op.png) no-repeat;
                background-size: 100%;
                padding: 15px 20px;
                h3 {
                    line-height: 24px !important;
                    font-size: 20px;
                    line-height: 1;
                    margin: 0;
                    padding: 0;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
                h4 {
                    width: 100%;
                    font-size: 18px;
                    font-weight: 400;
                    margin-bottom: 15px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    color: #7F8C8D;
                }
                span {
                    text-shadow: 0 0px 1px #ccc;
                    font-size: 14px;
                    color: #BDC3C7;
                    &.nums {
                        float: right;
                    }
                }
            }
        }
    }
}
</style>
<script>
export default {
    data(){
        return {
            theaters:{},
            btns:true
        }
    },
    route:{
        data(){
            this.$http.jsonp("https://api.douban.com/v2/movie/in_theaters").then((response) =>{
                this.theaters.num = response.data.total;
                this.theaters.title =  response.data.title;
                this.theaters.mov = response.data.subjects;
                this.btns = false;
            }, (response)=> {
                console.log(response)
            })

        }
    },
    components:{
        loading:require("../components/loading.vue"),
        inmovie:require("../components/inmovie.vue")
    }
}
</script>