import { createStore } from "vuex"
export default createStore({
    state:{
        repositories:[],
        loading: false,
        error:null,
        currentPage:1,
        searchTerm:''
    },
    mutations: {
            SET_REPOSITORIES(state,repo){
                state.repositories=repo
            },
            SET_LOADING(state,status){
                state.loading=status
            },
            SET_ERROR(state,error){
                state.error=error
            },
            SET_PAGE(state,page){
                state.currentPage=page
            },
            SET_SEARCH_TERM(state,term){
                state.searchTerm=term
            }
    },
    actions:{
        async searchRepositories({ commit },{searchTerm,page=1}){
            commit('SET_PAGE',page)
            commit('SET_SEARCH_TERM',searchTerm)
            commit('SET_LOADING',true)
            commit('SET_ERROR',null)
            try{
                const response = await fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(searchTerm)}&page=${page}&per_page=9`)
            
                const data = await response.json()
                if (response.ok){
                    commit('SET_REPOSITORIES',data.items)
                }else{
                    commit('SET_ERROR',data.message || 'Oops! Sompthing went wrong')
                }
            }catch(error){
                commit('SET_ERROR',error.message)
            }finally{
                commit('SET_LOADING',false)
            }
        }
    },
    getters:{
        repositories: state=>state.repositories,
        loading: state=>state.loading,
        error: state=>state.error,
        currentPage: state=>state.currentPage,
        searchTerm: state=>state.searchTerm
    }
})