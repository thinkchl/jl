<template>
    <div class="container">
        <div class="title-container">
            <transition name="title">
                <div class="title" v-show="showTitle">
                    <i class="icon iconfont icon-gongzuojingyan"></i>
                    <span>工作经历</span>
                </div>
            </transition>
        </div>
        <div class="content-container" id="set-auto-flag">
            <transition name="content">
                <div class="work-content" v-show="showContent">
                    <my-collapse></my-collapse>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import myCollapse from '../collapse'
    export default {
        components:{
            myCollapse,
        },
        data(){
            return {
                showTitle:false,
                showContent:false,
                elPosition:{}
            }
        },
        methods:{
            showModal(){
                this.$refs.modal.showModal();
            },
            runTitle(){
                this.showTitle=true;
            },
            runContent(){
                this.showContent=true;
            },
            initHeight(){
                $(".title-container").css("height",$(".title").outerHeight());
                $(".content-container").css("height",$(".work-content").outerHeight());
            }
        },
        mounted(){
            this.$nextTick(()=>{
                $(document).ready(()=>{
                    this.initHeight();
                    this.elPosition.runTitle = $(".title-container").offset().top;
                    this.elPosition.runContent = $(".content-container").offset().top;
                })
                this.$emit('onmounted',this.elPosition);
            })
        },
        watch:{
            showContent:()=>{
                $("#set-auto-flag").css("height","auto");
            }
        }
    }
</script>

<style lang="less" scoped>
    .container{
        text-align: left;
        // margin:0;
        font-size: .28rem;
        .content-container{
            padding-top: .4rem;
        }
        .title{
            color: lightblue;
            transition: all 1s ease-in;
            &.title-enter{
                transform: translate3d(-1rem,0,0);
                opacity: 0;
            }
        }
        .icon{
            font-size: .28rem;
        }
        .work-content{
            transition: all 1s ease-in;
            margin-left: .7rem;
            padding-top: .2rem;
            &.content-enter{
                transform: translate3d(-1rem,0,0);
                opacity: 0;
            }
            a{
                color: blue;
            }
        }
    }
</style>
