<template>
    <div class="messageBox">
        <h2>定位</h2>
        <p>北京</p>
        <div>
            <div>取消</div>
            <div>切换定位</div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.messageBox{width: 200px;height: 140px;border: 1px solid #ccc;border-radius: 4px; background: white;box-shadow: 3px 3px 3px 3px;position: absolute; left: 50%;top: 50%;margin: 70px 0 0 -100px;}
.messageBox h2{text-align: center; line-height: 40px; font-size: 18px;}
.messageBox p{text-align: center; line-height: 40px;}
.messageBox > div{display: flex;}
</style>