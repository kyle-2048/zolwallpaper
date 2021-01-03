<template>
    <div class="PageButton">
        <button class="lastPage" @click="HandlePage('last')">上一页</button>
        <button @click="FirstButton" :class="{activeButton:activeIndex===4}">1</button>
        <button @click="activeIndex=5,JumbWebPage()" v-if="SecondButtonShow" :class="{activeButton:activeIndex===5}">2</button>
        <div v-else class="threeDot">...</div>
<!--        <button>3</button>-->
<!--        <button>4</button>-->
<!--        <button>5</button>-->
<!--        <button>下一页</button>-->
        <button v-for="(data,index) in buttonNum" :key="index" :class="{activeButton:index===activeIndex}"
        @click="HandleClick(index)"
        >
            {{data}}
        </button>
        <button class="nextPage" @click="HandlePage('next')">下一页</button>
    </div>
</template>

<script>
    import '@/style/pageButton.css';
    import bus from '../bus'
    export default {
        name: "pageButton",
        data(){
            return{
                activeIndex:4,
                buttonNum:[3,4,5,6],
                SecondButtonShow:true,
                activeIndexGroup:[4,5,0,1,2,3],  //用来实现点击上一页下一页，active样式转换
            }
        },
        mounted() {
            let this_=this;
            bus.$on("PageButtonInit",function(pageNum){
                if(pageNum==4){
                    this_.FirstButton();
                }
            })
        },
        methods:{
            //当点击后3,4,5,6button时
            HandleClick(index){
                if(index>1){
                    let Num=this.buttonNum[index];  //存储点击的值
                    //修改按钮的值
                    this.buttonNum[0]=Num-1;
                    this.buttonNum[1]=Num;
                    this.buttonNum[2]=Num+1;
                    this.buttonNum[3]=Num+2;
                    this.buttonNum.push(1);
                    this.buttonNum.pop();
                    this.activeIndex=1;   //要激活按钮的索引值
                }
                else if(index===1){
                    this.activeIndex=1;
                }
                else if(index===0){
                    let Num=this.buttonNum[index];
                    if(Num===3){
                        this.activeIndex=0;
                        this.JumbWebPage();
                        return;
                    }
                    this.buttonNum[0]=Num-1;
                    this.buttonNum[1]=Num;
                    this.buttonNum[2]=Num+1;
                    this.buttonNum[3]=Num+2;
                    this.buttonNum.push(1);
                    this.buttonNum.pop();
                }
                this.ChangeSecondButton();
                this.JumbWebPage();
            },
            //当点击button1时
            FirstButton(){
                this.buttonNum=[3,4,5,6]
                this.activeIndex=4;
                this.ChangeSecondButton();
                this.JumbWebPage();
            },
            //当点击其他按钮，判断button 2是否需要修改样式
            ChangeSecondButton(){
              let length=this.buttonNum.length;
              if(this.buttonNum[length-1]<7){
                  this.SecondButtonShow=true;
                }
              else{
                  this.SecondButtonShow=false;
              }
            },
            //当点击上一页或者下一页
            HandlePage(fangxiang){
                //因为activeIndex并不是按0-5的顺序，所以这里设定了一个activeIndexGroup来存放
                //6个按钮按顺序的activeIndex,然后获取activeIndex在数组里的索引值，通过索引值的增减
                //得到新的activeIndex
                let act=this.activeIndex;
                let index=this.activeIndexGroup.indexOf(act);
                if(fangxiang==='next'){
                    if(index===3){
                        this.activeIndex=this.activeIndexGroup[index];
                        this.buttonNum[0]++;
                        this.buttonNum[1]++;
                        this.buttonNum[2]++;
                        this.buttonNum[3]++;
                        this.buttonNum.push(1);
                        this.buttonNum.pop();
                    }
                    else if(index<3){
                        index++;
                        this.activeIndex=this.activeIndexGroup[index];
                    }
                }
                else if(fangxiang==='last'){
                    let length=this.buttonNum.length;
                    if(this.buttonNum[length-1]>6){
                        this.buttonNum[0]--;
                        this.buttonNum[1]--;
                        this.buttonNum[2]--;
                        this.buttonNum[3]--;
                        this.buttonNum.push(1);
                        this.buttonNum.pop();
                    }
                    else if(this.buttonNum[length-1]===6){
                        if(index===0){
                            this.activeIndex=this.activeIndexGroup[index];
                            return;
                        }
                        index--;
                        this.activeIndex=this.activeIndexGroup[index];
                    }
                }
                this.ChangeSecondButton();
                this.JumbWebPage();
            },
            //当点击分页按钮时跳转到相应的网页
            JumbWebPage(){
                let PageIndex=null;
                // console.log(this.activeIndex)
                if(this.activeIndex===4) {
                    PageIndex = 1;
                }
                else if(this.activeIndex===5){
                    PageIndex=2;
                }
                else{
                    PageIndex=this.buttonNum[this.activeIndex]
                }
                //因为不同二级路由下要点击分页按钮要跳转的路由都不一样
                //这里通过获取当前路由的路劲来实现动态跳转到三级路由
                let pathGroup=this.$route.path.split("/")
                let firstPath=pathGroup[1];
                let SecondPath=pathGroup[2];
                switch (PageIndex) {
                    case 1: return this.$router.push('/'+firstPath+'/'+SecondPath)
                    case 2: return this.$router.push('/'+firstPath+'/'+SecondPath+'/second')
                    case 3: return this.$router.push('/'+firstPath+'/'+SecondPath+'/third')
                    case 4: return this.$router.push('/'+firstPath+'/'+SecondPath+'/forth')
                    case 5: return this.$router.push('/'+firstPath+'/'+SecondPath+'/fifth')
                }
            }
        }
    }
</script>

<style scoped>

</style>
