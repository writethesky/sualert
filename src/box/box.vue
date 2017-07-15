<template>
<div v-bind:style="{fontSize: style.fontSize, display: style.display}" v-bind:class="showClass">
    <div class="stock-box">
        <div class="shade"></div>
        <div class="goods-pop-up" v-bind:style="{top: style.top}">
            <div class="pop-up-head">
                <span>{{title}}</span>
            </div>
            <span class="close" v-on:click="hide">×</span>
            <div class="pop-up-body">
                <div class="pop-up-txt" v-for="(item, i) in itemss">
                    <span class="pop-up-left" :style="{width: style.itemLeftTextWidth}">{{item.name}}</span>
                    <span class="pop-and">：</span>
                    <span :style="{left: style.itemLeftWidth}" class="pop-up-input">
                        <input v-if="!item.type" type="text" name="" v-model:value="item.value" class="pop-up-input" v-on:keyup="changed(i)" v-on:keydown="changed(i)">
                        <select v-if="item.type == 'select'" type="text" name="" v-model:value="item.value" class="pop-up-input" v-on:change="changed(i)" >
                            <option v-for="option in item.options" :value="option.value">{{option.text}}</option>
                        </select>
                    </span>
                    
                </div>
                <div class="btn-box">
                    <input type="button" name="" value="保存" class="button1" v-on:click="ok" >
                    <input type="button" name="" value="取消" class="button2" v-on:click="hide">
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>





    export default {
        data:function(){
            return {
                showClass: "",
                itemss: []
            };
        },
        props: ['title', 'items', 'styles', 'name'],
        computed: {
            style: function(){
                var tmp_obj = {}
                tmp_obj.fontSize = this.styles.fontSize ? this.styles.fontSize : '16px';
                tmp_obj.itemLeftWidth = this.styles.itemLeftWidth ? this.styles.itemLeftWidth : '5em';
                tmp_obj.itemLeftTextWidth = this.styles.itemLeftTextWidth ? this.styles.itemLeftTextWidth : "4em";
                tmp_obj.top = this.styles.top ? this.styles.top : "4em";
                tmp_obj.display = this.styles.display ? this.styles.display : "none";

                this.itemss = this.items;
                return tmp_obj;
            }



        },
        methods: {
            show(){
                this.style.display = "block";
                this.showClass = "show";
            },
            hide(){
                this.showClass = "hide";
                this.style.display = "none";
            },
            ok(){
                this.itemss.push({});
                this.$emit('ok', this.items);
            },
            changed(index){
                // this.items[0].value = 78;
                // this.$set(this.items, 0, this.items[0]);

                this.$emit('changed', index, this.items);
            }
        }
 
    }
</script>

<style scoped>
.goods-pop-up {
    position: fixed;
    top: 3em;
    left: 50%;
    margin-left: -14em;
    width: 28em;
    background: #f5f5f5 ;
    border: .1em solid #29a595;
    border-radius: .3em;
    overflow: hidden;
    z-index: 999;
}
.pop-up-head {
    width: 100%;
    height: 2.22em;
    color: #fff;
    line-height: 2.22em;
    font-size: 1em;
    text-align: center;
    background-color: #29a595;
}
.pop-up-body {
    padding: 2.2em 3.5em;
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
}

.pop-up-txt {
    position: relative;
    width: 100%;
    height: 1.58em;
    margin-bottom: 1em;
    font-size: 1em;
    line-height: 1.58em;
    color: #666666;
}
.pop-and {
    display: block;
    float: left;
}
.pop-up-left {
    float: left;
    text-align-last: justify;
    display: block;
    width: 3em;
}
.pop-up-input {
    height: 1.58em;
    float: right;
    box-sizing: border-box;
    padding-left: .1em;
    padding-right: .1em; 
    font-size: 1em;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    border: 1px soli #ccc;
}
.pop-up-input input, .pop-up-input select {
    width: 100%;
}
.button1,.button2{
    width: 5em;
    height: 1.67em;
    color: #fff;
    border: 0;
    margin:0;
    float: left;
    font-size: .889em;
    margin: 0 .833em;
    border-radius: .2em;
}
.button1{
    background: #15c3ac;
}
.button2{
    background: #ccc;
}
.shade {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    z-index: 1;
}

.btn-box {
    overflow: hidden;
    width: 12.499em;
    margin: 0 auto;
    margin-top: 2em;
}

.close {
    float: right;
    padding: 0 .5em;
    cursor: pointer;
    color: #fff;
    position: absolute;
    line-height: 2.22em;
    right: 0;
    top: 0;
}


.add-btn {
    position: absolute;
    top: -1.24em;
    right: 0;
    font-size: .32em;
    color: #fff;
    background: #15c3ac;
    height: .6em;
    line-height: .6em;
    padding: 0 .25em;
    border-radius: .05em;
    cursor: pointer;
}

.show {
    animation: fade-in;
    animation-duration: 1.5s;
}
.hide {
    animation: fade-out;
    animation-duration: 1.5s;
}

@keyframes fade-in {  
    0% {opacity: 0;}
    100% {opacity: 1;}
 
} 
@keyframes fade-out {  
    0% {opacity: 1;}
    100% {opacity: 0;} 
} 
</style>