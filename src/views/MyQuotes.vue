<template>
<div>
  <div v-if="user">
    <div class="header">
      <div>
        <h1>{{user.name}}'s Quotes</h1>
        <h2>Remove quotes you no longer want in your collection.</h2>
      </div>
    </div>
    <div class="list">
    <div class="quote" v-for="quote in quotes" v-bind:key="quote._id">
      <div class="quote-text">"{{quote.text}}"</div>
      <p>-{{quote.author}}</p>
      <form v-on:submit.prevent="deleteQuote(quote._id)">
        <button type="submit">Delete</button>
      </form>
    </div>
    </div>
  </div>
  <div v-else>
    <h2>If you would like to remove quotes from your collection, please register for an account or login.</h2>
  </div>
</div>
</template>

<script>
export default {
  name: 'myquotes',
  data() {
    return {
      show: false,
    }
  },
  async created() {
   await this.$store.dispatch("getUser");
   await this.$store.dispatch("getMyQuotes");
 },
  computed: {
  user() {
    return this.$store.state.user;
  },
  quotes() {
      return this.$store.state.quotes;
    },
  },
  methods: {
  async deleteQuote(identifier) {
    try {
      this.error = await this.$store.dispatch("delete", {
        id: identifier
      });
      await this.$store.dispatch("getMyQuotes");
    } catch (error) {
      console.log(error);
    }
  }
  }
}
</script>

<style>

</style>
