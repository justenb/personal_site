<template>
<div class="sidebar">
    <div class="intro-wrapper">
            <Intro key="intro"/>
    </div>
    <Social/>
    <div class="footer"> 
        <div class="by_justen"> © Justen Boykin 2021 </div> 
    </div>
</div>
</template>

<script>
import  Social from '../components/Social'
import  Intro from '../components/Intro'
export default {
    name: "Sidebar",
    components: {
        Social,
        Intro
    }
}
</script>

<style lang="scss">

</style>