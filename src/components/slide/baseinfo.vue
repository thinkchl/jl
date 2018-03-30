<template>
  <div class="my-container">
    <div class="top">
      <div class="music" @click="musicCtl">
        <i class="icon iconfont icon-cd"></i>
      </div>
      <div class="header"></div>
      <div class="text">
        <transition name="wel">
            <p class="wel" v-if="showel">青春一去不复返，事业一纵永无成</p>
        </transition>
      </div>
    </div>
    <div class="baseinfo">
      <baseinfo/>
    </div>
  </div>
</template>

<script>
  import animate from 'animate.css'
  import baseinfo from '../baseinfo'
    export default {
      components:{
        baseinfo
      },
      data(){
        return {
          showel:false,
        }
      },
      mounted(){
        this.showel=true;
      },
      methods:{
        musicCtl(){
          let audio = $("#bg-music")[0];
          if(audio.paused){
            audio.play();
            $(".music").css("animation","");
          }else{
            audio.pause();
            $(".music").css("animation","musicRotate 2s linear infinite");
          }
        }
      },

    }
</script>

<style lang="less" scoped>
  @import '../less/mixin.less';
  @keyframes musicRotate {
   0%{
     transform: rotate(0deg);
   }
   100%{
     transform: rotate(360deg);
   }
  }
  .my-container{
    width: 100%;
    height: 100%;
    font-size: .28rem;
    .top{
      width: 100%;
      height: 0;
      background-color: #e0ece0;
      .music{
        position: absolute;
        padding:.1rem;
        top: .2rem;
        margin-left: .4rem;
        animation: musicRotate 2s linear infinite;
        .icon{
          font-size: .5rem;
          color: turquoise;
        }
      }
      .header{
        background-color: white;
        border-radius: 50%;
        margin: 0 auto;
        background: url('../../assets/photo.jpg');
        background-size: cover;
      }
      .bg-height();
    }
    .text{
      margin: 0 auto;      
      margin-top: .7rem;
      font-size: .28rem;
      font-family: 'Comic Sans MS', cursive;
      .wel{
        transition: all 1s ease-in;
        &.wel-enter{
          transform: scale(.1);
        }
      }
    }
    .btn{
      font-size: .28rem;
    }
    .baseinfo{
      margin:0 .2rem;
      margin-top: .2rem;
      font-size: .28rem;
      background-color: white;
    }
  }
</style>
