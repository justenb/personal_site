
<template>
<div>
<router-view name="view"/>
<template v-for="section in Object.keys(posts)">
    <div class="section" :key="section">
    <h1>{{section}}</h1>
    <div v-for="( post, index) in posts[section]" :key=index>
        <div id="section-post">
            <router-link id="post-title" :to="`${section}/${post.id}`"> {{post.title}} </router-link>
        </div>
    </div>
    </div>
</template>

</div>

</template>
<script>
import entries from '../posts.json';
export default {
    name: "ListSections",
    data(){
        return {
            posts: entries,
        }
    },
    mounted(){
        console.log(entries);
    }
}
</script>

<style lang="scss">

</style>