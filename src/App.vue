<template>
  <div class="wrapper with-sidebar">
    <Sidebar />
    <div class="app-content not-sidebar">
      <TopNav />
      <main class="app-content-container">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";
import TopNav from "./components/TopNav";
export default {
  name: "App",
  components: {
    Sidebar,
    TopNav,
  },
};
</script>

