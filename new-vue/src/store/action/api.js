import  axios from 'axios'

export default {
    getAll({commit},params){
        return axios.get('/query',params)
    },
    addOne({commit},params){
        return axios.post('/create',params)
    },

    updateThose({commit},params){
        return axios.put('/update',params)
    },
    deleteThose({commit},params){
        return axios.delete('/delete',params)
    }
}
