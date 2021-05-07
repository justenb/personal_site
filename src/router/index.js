import VueRouter from 'vue-router'

import App from '../App'
// import Home from '../components/pages/Home'
import Bio from '../components/pages/Bio'
import Contact from '../components/pages/Contact'
import Posts from '../components/pages/Posts'
import ListPosts from '../components/ListPosts'
import ListSections from '../components/ListSections'

import entries from '../posts.json';

const blogRoutes = Object.keys(entries).map(section => {
    const children = entries[section].map(child => ({
        path: child.id,
        name: child.id,
        meta: { title: route => "Justen Boykin | " + route.name},
        component: () => import(`../components/posts/${section}/${child.id}.md`)
    }))

    return {
        path: `${section}`,
        name: section,
        component: () => import('../components/Blog'),
        children
    }
})

const routes = [
    { path: '/', component: App,
    children: [
        {
            path: 'home',
            name: "Home",
            component: ListPosts,
            meta: { title: route => "Justen Boykin | " + route.name}
        },
        {
            path: 'bio',
            name: "Bio",
            component: Bio,
            meta: { title: route => "Justen Boykin | " + route.name}
        },
        {
            path: 'contact',
            name: "Contacts",
            component: Contact,
            meta: { title: route => "Justen Boykin | " + route.name}
        },
        {
            path: 'posts',
            name: "Posts",
            component: Posts, 
            children: [
                    {
                        path: "all",
                        component: ListSections,
                        name: "all",
                        meta: { title: route => "Justen Boykin | " + route.name}
                    },
                    ...blogRoutes
            ]
        },
    ]
}]

console.log(blogRoutes)

const router = new VueRouter({
  mode: 'history',
  routes: routes,
})

export default router;