<template>
    <div class="container row">
        <div class="study col-lg-5">
            <div class="stu-title-container">
                <transition name="stu-title">            
                    <div class="title hideflag" v-show="showStuTitle">
                        <i class="icon iconfont icon-jiaoyu"></i>
                        <span>教育背景</span>
                    </div>
                </transition>
            </div>
            <div class="stu-content-container">
                <transition name="study">            
                    <div class="content hideflag" v-show="showStudy">
                        <ul>
                            <li>南京网博优壹教育<span class="date">(2016.12)</span></li>
                            <li>南京农业大学<span class="date">(2010.9)</span></li>
                            <li>江苏涟水中学<span class="date">(2007.9)</span></li>
                            <li>江苏涟水第四中学<span class="date">(2004.9)</span></li>
                            <li>涟水张圩小学<span class="date">(2002.2)</span></li>
                            <li>涟水湖房小学<span class="date">(1997.9)</span></li>
                        </ul>
                    </div>
                </transition>
            </div>
        </div>
        <div class="skills col-lg-5">
            <div class="skills-title-container">
                <transition name="skills-title">            
                    <div class="title hideflag" v-show="showSkillTitle">
                        <i class="icon iconfont icon-zhuanyezhishijineng"></i>
                        <span>技能</span>
                    </div>
                </transition>
            </div>
            <div class="content"></div>
        </div>
    </div>
</template>

<script>
    import echarts from 'echarts'
    import 'bootstrap/dist/css/bootstrap.min.css'
    export default {
        data(){
            return {
                showStuTitle:false,
                showStudy:false,
                showSkillTitle:false,
                elPosition:{},
                echartsOptions:{
                    animationDelay:(idx)=>{
                        return idx * 100;
                    },
                    xAxis:{
                        data:['css','less','html','javascript','jquery','php','vue','angular','java','mysql','oracle','hibernate','spring','weChat','ps','maven','shiro'],
                        axisLabel:{
                            formatter:''
                        }
                    },
                    yAxis:{
                        max:100,
                        axisLabel:{
                            formatter(value,index){
                                if(index==1)
                                    return '了解';
                                else if(index==2)
                                    return '熟悉';
                                else if(index==3)
                                    return '熟练';
                                else if(index==4)
                                    return '掌握';
                                else if(index==5)
                                    return '精通';
                            },
                            interval:20,
                        }
                    },
                    legend:{
                        type:'scroll'
                    },
                    series:[{
                        type:'bar',
                        data:[80,70,65,70,75,30,70,30,60,50,50,45,40,30,35,40,20],
                        label:{
                            show:true,
                            rotate:90,
                            align:'center',
                            formatter:'{b}'
                        },
                        itemStyle:{
                            barBorderRadius:10,
                            color:new echarts.graphic.LinearGradient(0,0,0,1,[{
                                offset:0,
                                color:'#99d9ea'
                            },{
                                offset:1,
                                color:'#3fa7dc'
                            }]),
                            shadowColor:'rgba(0,0,0.4)',
                            shadowBlur:20
                        }
                    }]
                }
            }
        },
        methods:{
            runSkillTitle(){
                this.showSkillTitle=true;
            },
            runStudy(){
                this.showStudy=true;
            },
            runStuTitle(){
                this.showStuTitle=true;
            },
            initHeight(){
                $(".stu-title-container").css("height",$(".stu-title-container .title").outerHeight());
                $(".stu-content-container").css("height",$(".stu-content-container .content").outerHeight());
                $(".skills-title-container").css("height",$(".skills-title-container .title").outerHeight());
            },
            initEchart(){
                let myEcharts = echarts.init($(".skills .content")[0]);
                myEcharts.setOption(this.echartsOptions);
            }
        },
        mounted(){
            this.$nextTick(()=>{
                $(document).ready(()=>{
                    setTimeout(()=>{
                        this.initHeight();
                    },100)
                    this.elPosition.runStuTitle = $(".stu-title-container").offset().top+$(".title").outerHeight();
                    this.elPosition.runStudy= $(".stu-content-container").offset().top+$(".content").outerHeight()/2;
                    this.elPosition.runSkillTitle = $(".skills-title-container").offset().top+$(".title").outerHeight();
                    this.elPosition.initEchart = $(".skills .content").offset().top+$(".skills .content").outerHeight()/3*2;
                })
                this.$emit('onmounted',this.elPosition);
            })
        }
    }
</script>

<style lang="less" scoped>
    .container{
        text-align: left;
        padding-top: 1rem;
        display: flex;
        justify-content: space-between;
        .title{
            color: lightblue;
            transition: all 1s ease-in;
        }
        .icon{
            font-size: .28rem;
        }
        .study{
            min-width: 4.5rem;
            .title{
                &.stu-title-enter{
                    transform: translate3d(-1rem,0,0);
                    opacity: 0;
                }
            }
            .content{
                padding-top: 10px;
                transition: all 1s ease-in;
                &.study-enter{
                    transform: translate3d(-1rem,0,0);
                    opacity: 0;
                }
                ul{
                    list-style-type: none;
                    margin-bottom: 0;
                    li{
                        padding-top: .1rem;
                    }
                    .date{
                        color: #a3a8a6;
                        font-size: .20rem;
                        margin-left: .1rem;
                    }
                }
                color: #595353;
                font-size: .28rem;
            }
        }
        .skills{
            padding-top: .2rem;
            min-width: 4.5rem;
            @media screen and (min-width:992px){
                padding-top: 0;
            }
            .skills-title-enter{
                transform: translate3d(-1rem,0,0);
                opacity: 0;
            }
            .content{
                height: 4rem;
                min-height: 350px;
            }
        }
    }
</style>
