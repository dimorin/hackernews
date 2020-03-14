import { /* fetchNewsList, fetchAskList, fetchJobsList, */ fetchUserInfo, fetchItemInfo, fetchList } from '../api/index.js'
export default{
    /* FETCH_NEWS({commit}){
        return fetchNewsList()
        .then((response) => {
            commit('SET_NEWS', response.data);
            return response;
        })
        .catch(error => console.log(error))
    },
    FETCH_ASKS({commit}){
        return fetchAskList()
        .then(({data}) =>{
        commit('SET_ASKS', data)
        })
        .catch()
    },
    FETCH_JOBS({commit}){
        return fetchJobsList()
        .then(({data}) => {
        commit('SET_JOBS', data)
        })
        .catch()
    }, */
    FETCH_USER({commit},userName){
        return fetchUserInfo(userName)
        .then(({data}) => {
            commit('SET_USER', data);
        })
        .catch()
    },
    FETCH_ITEM({commit},id){
        return fetchItemInfo(id)
        .then(({data}) => {            
            commit('SET_ITEM', data);
        })
        .catch()
    },
    /* FETCH_LIST({commit}, pageName){
        return fetchList(pageName)
        .then(({data}) => {
            commit('SET_LIST', data);
        })
        .catch()
    } */
    async FETCH_LIST({commit}, pageName){
        try{
            const response = await fetchList(pageName);
            commit('SET_LIST', response.data);
            return response;
        }catch(error){
            console.log(error);
        }        
    }
}