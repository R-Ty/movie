<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>
<script>
import func from '../../../vue-temp/vue-editor-bridge';
export default {
    name:'Scroller',
    props:{
        handleToScroll:{
           type:Functiion,
            default:function(){}   
        },
       handleToTouchEnd(){
        type
    }
    },
   
    mounted() {
          var scroll =  new BScroll(this.$refs.wrapper,{
            tap:true,
            probeType:1
        }); 
    },
    
}
</script>
<style scoped>
.wrapper{height: 100%;}
</style>