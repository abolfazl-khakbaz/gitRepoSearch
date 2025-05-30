<template>
<section class="section">
    <div class="container">
        <div v-if="error" class="notification is-danger">
            ⚠️ Error: {{ error }}
        </div>
        <div v-else-if="loading" class="has-text-info">
            Loading repositories...
        </div>
        <div v-else-if="repositories.length===0">
           ❗ No repositories found. Try another search term.
        </div>
        <div v-else>
            <div class="columns is-multiline">
                <div class="column is-4" v-for="repo in repositories" :key="repo.id">
                    <div class="card">
                        <div class="card-content">
                            <p class="title is-5">
                              🔐 <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
                            </p>
                            <p class="subtitle is-6">
                               📄 {{ repo.description || 'No description provided' }}
                            </p>
                            <p>
                                ⭐Stars: {{ repo.stargazers_count }}<br/>
                                🗣️Language: {{ repo.language || 'N/A' }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="buttons is-centered mt-5">
                <button class="button is-small is-link" @click="changePage(-1)" :disabled="page===1">
                    ⬅ Prev
                </button>
                 <span class="has-text-white mx-3">Page {{ page }}</span>
                <button class="button is-small is-link" @click="changePage(1)">
                   Next ➡
                </button>
            </div>
        </div>
        
    </div>
    
</section>
</template>
<script>
export default {
    computed: {
        repositories(){
            return this.$store.getters.repositories
        },
        loading(){
            return this.$store.getters.loading
        },error(){
            return this.$store.getters.error
        },
        page(){
            return this.$store.state.currentPage
        },
        searchTerm(){
            return this.$store.state.searchTerm
        }
    },
    methods:{
        changePage(direction){
            const newPage=this.page + direction
            if(newPage < 1)return
            this.$store.dispatch('searchRepositories',{
                searchTerm: this.searchTerm,
                page: newPage
            })
        }
    }
}
</script>
<style scoped>
    .card{
        background-color:#1e1e1e;
        color:#e0e0e0;
        border-radius:10px;
        box-shadow:0 0 10px rgba(100,255,100,0.2);
        transition:0.3s ease;
    }
    .card:hover{
        box-shadow:0 0 15px rgba(0,255,0,0.4);
    }
    a{
        color:#00ff99;
        text-decoration: none;
    }
    a:hover{
        text-decoration: underline;
    }

</style>