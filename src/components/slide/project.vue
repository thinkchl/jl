<template>
    <div class="project-container container">
        <div class="title-container">
            <transition name="title">
                <div class="title" v-show="showTitle">
                    <i class="icon iconfont icon-xiangmujingyan"></i>
                    <span>项目经验</span>
                </div>
            </transition>
        </div>
        <div class="content-container" id="project-set-auto-flag">
            <transition name="content">
                <div class="content" v-show="showContent">
                    <my-collapse></my-collapse>
                </div>
            </transition>
        </div>
        <div class="title-container">
            <transition name="title">
                <div class="title" v-show="showTitle2">
                    <i class="icon iconfont icon-aixin"></i>
                    <span>兴趣爱好</span>
                </div>
            </transition>
        </div>
        <div class="hobby-container">
            <transition name="hobby">
                <div class="hobby" v-show="showHobby">
                    <span>音乐，竹笛，绘画，旅游，影视，约上三五朋友吹吹牛~</span>
                </div>
            </transition>
        </div>
    </div>    
</template>

<script>
    import myCollapse from '../collapse/project'
    export default {
        components:{
            myCollapse
        },
        data(){
            return {
                showTitle:false,
                showContent:false,
                showHobby:false,
                showTitle2:false,
                showTitle3:false,
                showCallMe:false,
                elPosition:{}
            }
        },
        methods:{
            runTitle(){
                this.showTitle = true;
            },
            runContent(){
                this.showContent = true;
            },
            runHobby(){
                this.showHobby = true;
            },
            runTitle2(){
                this.showTitle2 = true;
            },
            runCallMe(){
                this.showCallMe = true;
            },
            initHeight(){
                $(".project-container .title-container").css("height",$(".project-container .title").outerHeight());
                $(".project-container .title-container:eq(1)").css("height",$(".project-container .title").outerHeight());
                $(".project-container .content-container").css("height",$(".project-container .content").outerHeight());
                $(".project-container .hobby-container").css("height",$(".project-container .hobby").outerHeight());
            },
            popover(){
                $("#test").popover()
            }
        },
        mounted(){
            this.$nextTick(()=>{
                $(document).ready(()=>{
                    setTimeout(() => {
                        this.initHeight();
                        this.elPosition.runTitle = $(".project-container .title-container").offset().top;
                        this.elPosition.runTitle2 = $(".project-container .title-container:eq(1)").offset().top;
                        this.elPosition.runContent = $(".project-container .content-container").offset().top;
                        this.elPosition.runHobby = $(".project-container .hobby-container").offset().top;
                    }, 100);
                })
                this.$emit('onmounted',this.elPosition);
            })
        },
        watch:{
            showContent:()=>{
                $("#project-set-auto-flag").css("height","auto");
            }
        }
    }
</script>


<style lang="less" scoped>
    .project-container{
        margin-top: 1rem;
        text-align: left;
        font-size: .28rem;
        .title{
            color: lightblue;
            transition: all 1s ease-in;
            padding-bottom: .4rem;
            &.title-enter{
                transform: translate3d(-1rem,0,0);
                opacity: 0;
            }
        }
        .icon{
            font-size: .28rem;
        }
        .content{
            transition: all 1s ease-in;
            margin-left: .7rem;
            padding-top: .2rem;
            padding-bottom: .5rem;
            &.content-enter{
                transform: translate3d(-1rem,0,0);
                opacity: 0;
            }
            a{
                color: blue;
            }
        }
        .hobby{
            padding-left: .4rem;
            transition: all 1s ease-in;
            padding-bottom: .4rem;
            &.hobby-enter{
                transform: translate3d(-1rem,0,0);
                opacity: 0;    
            }
        }
        .call-me{
            padding-left: .4rem;
            transition: all 1s ease-in;
            &.call-me-enter{
                transform: translate3d(-1rem,0,0);
                opacity: 0;    
            }
            .icon{
                font-size: .36rem;
                padding: .2rem;
                padding-bottom: 0;
            }
        }
    }
</style>
