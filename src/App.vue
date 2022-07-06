<template>
  <div id="app" class="pb-10"><AppHeader /><Memos /></div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import AppHeader from "./components/AppHeader.vue";
import Memos from "./components/Memos.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    AppHeader,
    Memos,
  },
};
</script>
