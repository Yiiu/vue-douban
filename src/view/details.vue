<template>
    <div>
        <div class="details" v-if="!btns">
            <div class="header">
                <div class="container wrapper clearfix">
                    <div class="img"><img :src="data.images.large" alt=""></div>
                    <div class="content">
                        <h3>{{data.title}}<span> ({{ data.year }})</span></h3>
                        <h4>{{data.aka[1]}}</h4>
                        <p><strong>导演: </strong><span v-for="directors in data.directors">{{directors.name}} </span></p>
                        <p><strong>主演: </strong><span v-for="casts in data.casts">{{casts.name}} </span></p>
                        <p><strong>类型: </strong>{{data.genres}}</p>
                        <p><strong>制片国家/地区: </strong>{{data.countries[0]}}</p>
                        <p><strong>剧情简介: </strong>{{data.summary}}</p>
                    </div>
                </div>
                <div class="bg">
                    <div id="d_bg"></div>
                </div>
            </div>
        </div>
        <loading :show="btns"></loading>
    </div>
</template>
<script>
export default {
    data(){
        return {
            btns:true,
            data:{}
        }
    },
    ready:function(){
        this.$http.jsonp("https://api.douban.com/v2/movie/subject/"+this.$route.params.id).then((response=>{
            this.data = response.data;
            console.log(this.data);
            this.btns = false;
            this.$nextTick(function(){
                let bg = document.getElementById('d_bg');
                bg.style.backgroundImage =  "url("+ this.data.images.large + ")";
            })
        }))
    },
    components: {
        loading:require("../components/loading.vue"),
    }
}
</script>
<style lang="less">
.details {
    .header{
        background: #34495E;
        overflow: hidden;
        .bg {
            z-index: 1;
            width: 100%;
            height: 400px;
        }
        .container {
            z-index: 999;
            position: absolute;
            top:70px;
            left:50%;
            margin-left: -520px;
            color: #fff;
            .img {
                float: left;
                width: 20%;
                height: 300px;
                margin-top: 50px;
                overflow: hidden;
                img {
                    width: 100%;
                }
            }
            .content {
                box-sizing: border-box;
                padding-left: 30px;
                padding-top: 50px;
                width: 80%;
                float: left;
                h3 {
                    color: #ECF0F1;
                    margin: 0;
                    font-size: 32px;
                    line-height: 1;
                    span {
                        font-size: 28px;
                    }
                }
                p {
                    margin: 0;
                }
            }
        }
    }
}
#d_bg {
    z-index: 1;
    background-size: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    -webkit-filter: blur(13px); /* Chrome, Opera */
       -moz-filter: blur(13px);
        -ms-filter: blur(13px);    
            filter: blur(13px);
    &:before {
        z-index: 2;
        content: '';
        position: absolute;
        background: rgba(0,0,0,.6);
        top: 0; right: 0; bottom: 0; left: 0;
    }
}
</style>