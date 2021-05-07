<template>
  <header>
    <nav class="navbar">
      <ul class="main-nav">
        <li @click="toggleActiveClass($event)" data-value="home" class="nav-item" >
          <router-link id="nav-item-home" to="/home">Home</router-link>
        </li>
        <li @click="toggleActiveClass($event)" data-value="posts" class="nav-item" id="nav-item-posts" >
          <router-link id="nav-item-posts" to="/posts/all">Posts</router-link>
        </li>
        <li @click="toggleActiveClass($event)" data-value="bio" class="nav-item nav-item-bio" >
          <router-link id="nav-item-bio" to="/bio">Bio</router-link>
        </li>
        <li @click="toggleActiveClass($event)" data-value="contact" class="nav-item nav-item-contact" >
          <router-link id="nav-item-contact" to="/contact">Contact</router-link>
        </li>
        <li class="nav-item" id="theme-toggle" @click="toggle_theme()" v-tooltip.auto="'toggle theme.'">
          <i v-bind:class="[dark_mode ? activeClass : '', inactiveClass]"  ></i>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Topnav",
  data() {
    return {
      currently_active_link: "",
      prev_target: null,
      dark_mode: false,
      activeClass: 'fa fa-toggle-on',
      inactiveClass: 'fa fa-toggle-off'
    };
  },
  methods: {
    toggle_theme() {
      const theme_target = document.getElementsByTagName("html")[0];
      if (theme_target.hasAttribute("data-theme")) {
      this.dark_mode =false 
        theme_target.removeAttribute("data-theme");
        return;
      }
      this.dark_mode = true
      theme_target.setAttribute("data-theme", "dark");
    },
    toggleActiveClass(e) {
      let should_be_active = e.currentTarget.getAttribute("data-value");
      if (this.currently_active_link ===  should_be_active) {
          e.target.classList.remove("active-link");
        return 
      } else {
          if (this.prev_target !== null) {
            this.prev_target.classList.remove("active-link")
          }

        this.currently_active_link = should_be_active
        e.target.parentElement.classList.toggle("active-link");
        console.log(this.prev_target)
        this.prev_target = e.target.parentElement;
      }
    },
  },
};
</script>

<style lang="scss">

</style>