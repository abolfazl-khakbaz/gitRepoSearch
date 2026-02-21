<template>
  <div id="app">
    <!-- header and searchbar -->
    <SearchBar @search="handleSearch" />
    <section class="section">
      <div class="container">
        <p v-if="lastSearch" class="has-text-info">
          Last search: <strong>{{ lastSearch }}</strong>
        </p>
        <RepoList />
      </div>
    </section>
    


    <Footer />
  </div>
</template>
<script>
import SearchBar from "./components/searchbar.vue";
import RepoList from "./components/repolist.vue";
import Footer from "./components/footer.vue";
export default {
  name: "App",
  components: {
    SearchBar,
    RepoList,
    Footer,
  },
  data() {
    return {
      lastSearch: "",
    };
  },
  methods: {
    handleSearch(searchTerm) {
      console.log("User Searched for:", searchTerm);
      this.lastSearch = searchTerm;
      this.$store.dispatch("searchRepositories", { searchTerm, page: 1 });
    },
  },
};
</script>
<style>
body {
  font-family: "Segoe UI", sans-serif;
  background-color: #0e0e0e;
  color: #e0e0e0;
}
</style>
