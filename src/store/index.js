import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    report:global.sessionStorage.getItem('report'),
    id_card:'',
    guidance:global.sessionStorage.getItem('guidance'),
    session:global.sessionStorage.getItem('session'),
    doctorId:global.sessionStorage.getItem('id'),
    shownCov:true,
    name:global.sessionStorage.getItem('name'),
    isdeliver:global.sessionStorage.getItem('isdeliver')
  },
 
  mutations: {
    setisdeliver(state,isdeliver){
      state.isdeliver=isdeliver
      global.sessionStorage.setItem('isdeliver',isdeliver)
    },
    setName(state,name){
      state.name=name
      global.sessionStorage.setItem('name',name)
    },
    setId(state,id){
      state.id_card = id
    }, 
    setdocId(state,id){
      state.doctorId = id
      global.sessionStorage.setItem('id',id)
    },
    setSession(state,session){
      global.sessionStorage.setItem('session',session)
      state.session = session
    },
    setReport (state,report){
      state.report = JSON.stringify(report),
      global.sessionStorage.setItem('report',JSON.stringify(report))
    },
    setGuidance(state,guidance){
      state.guidance = JSON.stringify(guidance),
      global.sessionStorage.setItem('guidance',JSON.stringify(guidance))
    },
    setnCov(state,ncov){
      state.shownCov=ncov
      global.sessionStorage.setItem('ncov',ncov)

    }
  }
})
export default store