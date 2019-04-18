<template>
  <div>
    <h1>See what everyone has posted.</h1>
    <div class="quote" v-for="quote in quotes" v-bind:key="quote._id">
      <div class="quote-text">"{{quote.text}}"</div>
      <p>-{{quote.author}}</p></br>
      (Posted by {{quote.user.name}})
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
   await this.$store.dispatch("getAllQuotes");
 },
  computed: {
  user() {
    return this.$store.state.user;
  },
  quotes() {
      return this.$store.state.quotes;
    },
  }
}
</script>
