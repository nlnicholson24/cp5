<template>
<div id="app">
    <div class="top">Inspirational Quotes</div>
    <div class="navbar">
      <div class="links">
        <router-link to="/" class="menu-link" id="home">HOME</router-link>
        <router-link to="/myquotes" class="menu-link" id="quotes">MY QUOTES</router-link>
        <router-link to="/publicfeed" class="menu-link" id="public">PUBLIC FEED</router-link>
      </div>
    </div>
  <div class="content">
    <router-view />
  </div>
</div>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      async logout() {
        try {
          this.error = await this.$store.dispatch("logout");
        } catch (error) {
          console.log(error);
        }
      },
    }
  }
<script>

<style>

</style>
