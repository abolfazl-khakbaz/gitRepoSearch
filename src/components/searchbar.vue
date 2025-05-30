<template>
    <section class="section">
        <div class="container">
            <div class="columns is-mobile is-centered" style="text-align: center;">
                <h1 class="title has-text-success column is-half">Github Repo Search</h1>
            </div>
            <div class="field has-addons">
                <div class="control is-expanded custom-search-bar">
                    <input type="text" class="input is-dark is-medium" placeholder="Search your Github address..." v-model="searchTerm" @keyup.enter="submitSearch">
                </div>
                <div class="control">
                    <button class="button is-success is-medium " @click="submitSearch">Go</button>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default{
    data() {
        return {
            searchTerm: ''
        };
    },
    methods: {
        submitSearch() {
            if (this.searchTerm.trim()){
                this.$emit('search',this.searchTerm)
            }
        }
    }
};
</script>
<style scoped>
h1.title {
    font-family: monospace;
}
.container{
  
    margin-top: 10%;
}

</style>