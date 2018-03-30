<template>
    <div>
      <table class="table">
        <tr>
          <td>
            <div class="name animated rollIn">
              <i class="icon iconfont icon-xingming"></i>
              <span>姓名</span>
            </div>
          </td>
          <td>
              <div class="animated zoomInDown name-val">
                <span>陈怀礼</span>
              </div>
          </td>
          <td>
            <div class="homeplace animated rollIn">
              <i class="icon iconfont icon-dizhi"></i>
              <span>祖籍</span>
            </div>
          </td>
          <td>
            <div class="animated zoomInDown homeplace-val">
              <span>淮安</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
              <div class="name animated rollIn">
                  <i class="icon iconfont icon-nianling-"></i>
                  <span>年龄</span>
              </div>
          </td>
          <td>
              <div class="animated zoomInDown">
                <span>28</span>
              </div>
          </td>
          <td>
              <div class="name animated rollIn">
                  <i class="icon iconfont icon-jiaoyu"></i>
                  <span>学历</span>
              </div>
          </td>
          <td>
              <div class="animated zoomInDown">
                <span>本科</span>
              </div>
          </td>
        </tr>
        <tr>
          <td>
              <div class="name animated rollIn">
                  <i class="icon iconfont icon-gongzuoyixiang"></i>
                  <span>意向</span>
              </div>
          </td>
          <td>
              <div class="animated zoomInDown">
                <span>全栈</span>
              </div>
          </td>
          <td>
              <div class="name animated rollIn">
                  <i class="icon iconfont icon-xiangmujingyan"></i>
                  <span>经验</span>
              </div>
          </td>
          <td>
              <div class="animated zoomInDown">
                <span>2年</span>
              </div>
          </td>
        </tr>
      </table>
      <div class="baseinfo-bottom">
        <div class="row">
          <div class="school col-md-6 animated zoomInUp" style="animation-delay:2.2s">
            <i class="icon iconfont icon-jiaoyu"></i>
            <span>毕业院校：</span>
            <span>南京农业大学</span>
          </div>
          <div class="skill col-md-6 animated zoomInUp" style="animation-delay:2.2s">
            <i class="icon iconfont icon-zhuanyezhishijineng"></i>
            <span>专业：</span>
            <span>信息管理与信息系统</span>
          </div>  
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        props:{

        },
        data(){
            return {

            }
        },
        mounted(){
          let divs = $("table div");
          let num = 0;
          for(let i = 0;i<divs.length;i++){
            $(divs[i]).css({
              'animation-delay': (.2*num)+'s',
              'animation-duration':'.2s'
            })
            num++;
          }
        }
    }
</script>

<style lang="less" scoped>
  .table{
    margin: 0;
  }
  .table td{
    border-top: none;
    padding: .1rem;
    &:nth-child(even){
      border-right: 3px solid lightblue;
    }
    &:last-child{
      border-right: inherit;
    }
    .icon{
      font-size: .28rem;
    }
    .homeplace{
      font-size: 0;
      span{
        font-size: .28rem;
      }
    }
  }
  .baseinfo-bottom{
    border-top: 3px solid lightblue;
    margin-top: .4rem;
    .icon{
      font-size: .28rem;
    }
    .school{
      padding-top: .3rem;
    }
    .skill{
      padding-top: .3rem;
    }
    .row{
      margin-left: 0;
      margin-right: 0;
    }
  }
</style>
