<template>
    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingOne">
                <span class="panel-title">
                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <span>南京鼎岩信息科技有限公司</span>
                    </a>
                </span>
            </div>
            <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
            <div class="panel-body">
                <span  class="title">职务:</span>
                <p>测试工程师、研发工程师、技术支持</p>
                <span class="title">任务：</span>
                <p>1.产品功能测试</p>
                <p>2.自动化测试脚本研发</p>
                <p>3.版本管理</p>
                <p>4.网站维护</p>
                <p>5.安装程序研发</p>
                <span class="title">技术要求：</span>
                <p> CSS、HTML、javascript、asp、IIS、sql、C++、C#、installshield、NSIS</p>
                <span class="title">工作时间：</span>
                <p>2014.8至2016.11</p>
                <span class="title">企业官网：</span>
                <a href="http://brainytec.com">鼎岩科技(泛霖科技)</a>
            </div>
            </div>
        </div>
        <div class="panel panel-default">
            <div class="panel-heading" role="tab" id="headingTwo">
            <span class="panel-title">
                <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                江苏冉冉光电科技有限公司
                </a>
            </span>
            </div>
            <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
            <div class="panel-body">
                <span class="title">职务：</span>
                <p>研发工程师</p>
                <span class="title">任务：</span>
                <p>企业网站开发</p>
                <span class="title">技术要求：</span>
                <p>CSS、HTML、javascript、jquery、bootstrap、tomcat、linux、java、struts1、hibernate、mysql、maven、shiro</p>
                <span class="title">工作时间：</span>
                <p>2017.11至2018.3</p>
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
