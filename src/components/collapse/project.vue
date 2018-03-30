<template>
    <div class="panel-group" id="project" role="tablist" aria-multiselectable="true">
        <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingOne">
                <span class="panel-title">
                    <a role="button" data-toggle="collapse" data-parent="#project" href="#p1" aria-expanded="true" aria-controls="collapseOne">
                        <span>个人简历网站(前端)</span>
                    </a>
                </span>
            </div>
            <div id="p1" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                <div class="panel-body">
                    <span  class="title">工具:</span>
                    <p>VSCode</p>
                    <span class="title">技术：</span>
                    <p>1.HTML</p>
                    <p>2.LESS</p>
                    <p>3.javescript</p>
                    <p>4.jquery</p>
                    <p>5.vue</p>
                    <p>6.vue-cli</p>
                    <p>7.bootstrap</p>
                    <p>8.echarts</p>
                    <p>9.linux</p>
                    <p>10.tomcat</p>
                    <span class="title">功能介绍：</span>
                    <p>主要展示个人基本信息，实现自适应手机端和PC端</p>
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingTwo">
            <span class="panel-title">
                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#project" href="#p2" aria-expanded="false" aria-controls="collapseTwo">
                    <span>微信小程序－音乐播放器(前端)</span>
                </a>
            </span>
            </div>
            <div id="p2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
            <div class="panel-body">
                <span class="title">工具：</span>
                <p>WeChat微信开发者工具</p>
                <span class="title">技术：</span>
                <p>1.HTML</p>
                <p>2.CSS</p>
                <p>3.javascript</p>
                <p>4.WeChat</p>
                <p>5.ajax</p>
                <span class="title">功能介绍：</span>
                <p>通过调用QQ音乐接口实现，支持播放、搜索、歌词展示等基本功能，美化播放界面</p>
            </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingTwo">
            <span class="panel-title">
                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#project" href="#p3" aria-expanded="false" aria-controls="collapseTwo">
                    <span>冉冉光电企业网站(后端)</span>
                </a>
            </span>
            </div>
            <div id="p3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
            <div class="panel-body">
                <span class="title">工具：</span>
                <p>MyEclipse</p>
                <span class="title">技术：</span>
                <p>见工作经历</p>
                <span class="title">功能介绍：</span>
                <p>主要实现接口的开发，以及管理网站的开发(前端)</p>
            </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingTwo">
            <span class="panel-title">
                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#project" href="#p4" aria-expanded="false" aria-controls="collapseTwo">
                    <span>仿饿了么手机端外卖系统(前端)</span>
                </a>
            </span>
            </div>
            <div id="p4" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                <div class="panel-body">
                    <span class="title">工具：</span>
                    <p>Sublime</p>
                    <span class="title">技术：</span>
                    <p>1.CSS</p>
                    <p>2.HTML</p>
                    <p>3.javascript</p>
                    <p>4.jquery</p>
                    <p>5.less</p>
                    <p>6.vue</p>
                    <p>7.vuex</p>
                    <p>8.vue-cli</p>
                    <p>9.ajax</p>
                    <p>10.express</p>
                    <span class="title">功能介绍：</span>
                    <p>通过express模拟后台接口，仿饿了么界面完成布局，包括动画效果，完成基本的购买流程</p>
                    <span class="title">项目网址：</span>
                    <p><a href="http://chenhuaili.cn/olm">chenhuaili.cn/olm</a></p>
                </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingTwo">
            <span class="panel-title">
                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#project" href="#p5" aria-expanded="false" aria-controls="collapseTwo">
                    <span>企业创业平台官网(前端+后端)</span>
                </a>
            </span>
            </div>
            <div id="p5" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                <div class="panel-body">
                    <span class="title">工具：</span>
                    <p>Sublime</p>
                    <span class="title">技术：</span>
                    <p>1.CSS</p>
                    <p>2.HTML</p>
                    <p>3.javascript</p>
                    <p>4.jquery</p>
                    <p>5.ps</p>
                    <p>6.PHP</p>
                    <p>7.bootstrap</p>
                    <p>8.swiper</p>
                    <p>9.ajax</p>
                    <p>10.mysql</p>
                    <span class="title">功能介绍：</span>
                    <p>前台网页使用bootstrap完成响应式布局，后台管理页主要控制前台的显示信息(PC端)</p>
                    <span class="title">项目网址：</span>
                    <p><a href="http://chenhuaili.cn/project/client/home.php">chenhuaili.cn/project/client/home.php</a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>


<style lang="less" scoped>
    .panel{
        border: 1px solid #dddddd;
        border-radius: .05rem;
        margin-bottom: .2rem;
        .panel-heading{
            background-color: #f5f5f5;
            line-height: .5rem;
            padding-left: .28rem;
        }
        .panel-body{
            padding-left: .2rem;
            .title{
                color: lightseagreen;
            }
            p{
                font-family: 'Comic Sans MS', cursive;
                text-indent: .5rem;
                margin-bottom: .1rem;
            }
        }
    }
</style>
