<template>
<div class="intro" key="great-intro">
    <img src="../assets/ninja.png" class="avatar" >
    <div class="intro-name"> Justen Boykin </div>
    <div class="intro-title"> Fullstack Developer</div>
</div>
  
</template>

<script>
export default {
    name: "Intro",
    components:{},
    data(){
        return {
            active_items: ['hello']
        }
    },
    methods: {
        set_next_item_active(item){
            this.active_items.push(item)
        },
    }
}
</script>


<style>
img.avatar {
    height: 150px;
border-radius: 50%;
padding-bottom: 10px;

}
</style>