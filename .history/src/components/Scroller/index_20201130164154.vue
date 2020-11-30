<template>
    <div class="wrapper">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'Scroller',
    mounted() {
          var scroll =  new BScroll(this.$refs.movie_body,{
            tap:true,
            probeType:1
        }); 
    },
    
}
</script>
<style scoped>
.wrapper{height: 100%;}
</style>