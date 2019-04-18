<template>
<div class="home">
  <div v-if="user">
    <h1>{{user.name}}, add a quote to your collection!</h1>
    <form v-on:submit.prevent="addQuote">
      <textarea v-model="$store.state.addedText" placeholder="Quote"></textarea>
      <br />
      <input v-model="$store.state.authorName" placeholder="Author">
      <br />
      <button type="submit">Post Quote</button> <button @click="logout">Logout</button>
    </form>

  </div>
  <div v-else>
    <h2>Please login to post your favorite quotes!</h2>
    <router-link to="/register" class="pure-button">Register</router-link> or
    <router-link to="/login" class="pure-button">Login</router-link>
  </div>
</div>
</template>

<script>

export default {
  name: 'home',
  async created() {
    await this.$store.dispatch("getUser");
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
  async logout() {
    try {
      this.error = await this.$store.dispatch("logout");
    } catch (error) {
      console.log(error);
    }
  },
  async addQuote() {
    try {
      this.error = await this.$store.dispatch("upload", {
        text: this.$store.state.addedText,
        author: this.$store.state.authorName
      });
    } catch (error) {
      console.log(error);
    }
  }
  }
}
</script>
