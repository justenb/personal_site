<template>
<div>
<router-view name="view"/>
<template v-for="section in Object.keys(posts)">
    <div v-for="( post, index) in posts[section]" :key=index>
        <div class="post">
            <router-link id="title" :to="`/posts/${section}/${post.id}`"> {{post.title}} </router-link>
            <div id="description"> {{post.description}} </div>
            <div id="date"> {{post.date}} </div>
        </div>
    </div>
</template>

</div>

</template>
<script>
import entries from '../posts.json';
export default {
    name: "ListPosts",
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