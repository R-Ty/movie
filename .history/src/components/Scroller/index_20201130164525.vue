<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'Scroller',
    props:{
        type:Functiion,
        defaul
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