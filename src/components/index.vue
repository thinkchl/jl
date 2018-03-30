<template>
<div class="index-container">
    <div class="wrapper">
      <div class="slide">
          <base-info/>
      </div>
      <div class="slide">
          <study class="study" ref="stu" @onmounted='getEl'/>
      </div>
      <div class="slide">
          <work ref="work" @onmounted='getEl'/>
      </div>
      <div class="slide">
          <project ref="project" @onmounted='getEl'/>
      </div>
    </div>
    <div class="footer">
        <i class="icon iconfont icon-qq-copy icon-qq" @click="showQQ"></i>
        <i class="icon iconfont icon-weixin icon-wx" @click="showWX"></i>
        <a href="mailto:think_chl@163.com">
            <i class="icon iconfont icon-youxiang"></i>
        </a>
        <a href="tel:13291285280">
            <i class="icon iconfont icon-shoujijiaofei"></i>
        </a>
    </div>
    <transition name="qq" @before-enter="beforeEnter"
                            @enter="enter">
        <div class="qq dialog" v-show="showDialogQQ">
            <i class="icon iconfont icon-guanbi-copy" @click="closeDialog"></i>
        </div>
    </transition>
    <transition name="wx" @before-enter="beforeEnter"
                            @enter="enter">
        <div class="wx dialog" v-show="showDialogWX">
            <i class="icon iconfont icon-guanbi-copy" @click="closeDialog"></i>
        </div>
    </transition>
    <div class="black-bg" v-if="showDialogQQ || showDialogWX"></div>
  </div>
</template>

<script>
    // import Swiper from 'swiper'
    import baseInfo from './slide/baseinfo'
    import study from './slide/study'
    import work from './slide/work'
    import project from './slide/project'
    // import $ from 'jquery'
    export default {
        components:{
           baseInfo,
           study,
           work,
           project
        },
        data(){
            return {
                elPosition:[],
                slideRefName:['stu','work','project'],
                showDialogQQ:false,
                showDialogWX:false,
                listenTouch:false
            }
        },
        mounted(){
            window.onscroll = ()=>{
                this.checkElPosition();
            }
            $(document).ready(()=>{
                setTimeout(() => {
                    this.checkElPosition();
                }, 100);
            })
        },
        methods:{
            showQQ(){
                if(this.showDialogWX){
                    return;
                }
                this.showDialogQQ = true;
            },
            showWX(){
                if(this.showDialogQQ){
                    return;
                }
                this.showDialogWX = true;
            },
            beforeEnter(el){
                let strClassName = $(el).attr("class");
                let className = strClassName.split(" ")[0];
                let iconOffset = $(`.icon-${className}`).offset();
                let imgH = $(el).height();
                let imgW = $(el).width();
                let screenH = $(window).height();
                let screenW = $(window).width();
                let footerH = $(".footer").height();
                let offsetH = (screenH - imgH)/2 - footerH/2 + imgH/2;
                let offsetW = -(screenW/2 - iconOffset.left) + imgW*.1;
                el.style.Transform = `translate3d(${offsetW}px,${offsetH}px,0) scale(.1)`;
                el.style.webkitTransform = `translate3d(${offsetW}px,${offsetH}px,0) scale(.1)`;
                el.style.msTransform = `translate3d(${offsetW}px,${offsetH}px,0) scale(.1)`;
                el.style.mozTransform = `translate3d(${offsetW}px,${offsetH}px,0) scale(.1)`;
            },
            enter(el,done){
                //触发浏览器重绘
                let rf = el.offsetHeight;
                this.$nextTick(()=>{
                    el.style.Transform = 'translate3d(0,0,0) scale(1)';
                    el.style.webkitTransform = 'translate3d(0,0,0) scale(1)';
                    el.style.msTransform = 'translate3d(0,0,0) scale(1)';
                    el.style.mozTransform = 'translate3d(0,0,0) scale(1)';
                })
            },
            getEl(data){
                this.elPosition = this.elPosition.concat(data);
            },
            closeDialog(){
                this.showDialogQQ = false;
                this.showDialogWX = false;
            },
            checkElPosition(){
                let height = $(window).height();
                var scrollTop = $(document).scrollTop();
                if(this.elPosition.length<1)
                    return;
                let obj = this.elPosition;
                for (const key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        const element = obj[key];
                        let keys = Object.keys(element);
                        let values = Object.values(element);
                        if( keys.length>0){
                            for (const k in keys) {
                                if (keys.hasOwnProperty(k)) {
                                    const el = keys[k];
                                    if(element[el]<scrollTop+height){
                                        this.$refs[this.slideRefName[key]][el]();
                                    }
                                }
                            }
                        }
                    }
                }
                
            },
        }
    }
</script>

<style lang="less">
    body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
    .index-container{
        background-color: #f5e7e6;
        min-height: 100%;
        height: auto;
        height: 100%;
        position: relative;
        .footer{
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
            max-width: 1200px;
            height: .6rem;
            background-color: #6cf;
            text-align: center;
            z-index: 2;
            font-size: .36rem;
            .icon{
                font-size: .36rem;
                line-height: .6rem;
                padding: .2rem;
                color: black;
                cursor: pointer;
            }
        }
        .wrapper{
            padding-bottom: .6rem;
        }
    }
    .dialog{
        width: 4rem;
        height: 4rem;
        background-size: cover;
        position: fixed;
        left: 50%;
        top: 50%;
        margin: -2rem 0 0 -2rem;
        z-index: 2;
        transition: all .3s linear;
        .icon{
            font-size: .5rem;
            position: relative;
            top: -.8rem;
            left: 4rem;
            color: white;
            padding: .1rem;
        }
        &.qq{
            background-image: url(../assets/qq.jpg);
            &.qq-enter{
                transform: translate3d(-63px,300px,0) scale(.1);
            }
            &.qq-leave-to{
                transform: scale(.1);
                opacity: 0;
            }
        }
        &.wx{
            background-image: url(../assets/wx.jpg);
            &.wx-enter{
                transform: translate3d(-63px,300px,0) scale(.1);
            }
            &.wx-leave-to{
                transform: scale(.1);
                opacity: 0;
            }
        }

    }
    .black-bg{
        background-color: black;
        opacity: .4;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1;
    }
    .slide {
        margin: 0 auto;
        text-align: center;
        font-size: .28rem;
        max-width: 1200px;
        display: flex;
        background-color: white;
    }
    html,body{
        margin:0;
        padding:0;
        width:100%;
        font-size: .36rem;
    }
</style>