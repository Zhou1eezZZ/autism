import UserAPI from '@/api/user'

const state = {
  isLogin: false,
  address: '',
  deptId: '',
  email: '',
  name: '',
  nation: '',
  phone: '',
  qualificationNumber: '',
  realName: '',
  relatedUser: null,
  sex: '',
  type: '',
  uuid: '',
  workTime: ''
}

const getters = {

}

const mutations = {
  SET_ISLOGIN: (state, isLogin) => {
    state.isLogin = isLogin
  },
  SET_ADDRESS: (state, address) => {
    state.address = address
  },
  SET_DEPTID: (state, deptId) => {
    state.deptId = deptId
  },
  SET_EMAIL: (state, email) => {
    state.email = email
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_NATION: (state, nation) => {
    state.nation = nation
  },
  SET_PHONE: (state, phone) => {
    state.phone = phone
  },
  SET_QUALIFICATIONNUMBER: (state, qualificationNumber) => {
    state.qualificationNumber = qualificationNumber
  },
  SET_REALNAME: (state, realName) => {
    state.realName = realName
  },
  SET_RELATEDUSER: (state, relatedUser) => {
    state.relatedUser = relatedUser
  },
  SET_SEX: (state, sex) => {
    state.sex = sex
  },
  SET_TYPE: (state, type) => {
    state.type = type
  },
  SET_UUID: (state, uuid) => {
    state.uuid = uuid
  },
  SET_WORKTIME: (state, workTime) => {
    state.workTime = workTime
  }
}

const actions = {
  LoginByPhone({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      UserAPI.userLogin(userInfo).then(response => {
        if (response && response.data && response.data.successful) {
          // debugger
          const data = response.data.data
          commit('SET_ADDRESS', data.address)
          commit('SET_DEPTID', data.deptId)
          commit('SET_EMAIL', data.email)
          commit('SET_NAME', data.name)
          commit('SET_NATION', data.nation)
          commit('SET_PHONE', data.phone)
          commit('SET_QUALIFICATIONNUMBER', data.qualificationNumber)
          commit('SET_REALNAME', data.realName)
          if (data.relatedUser) {
            commit('SET_RELATEDUSER', data.relatedUser)
          }
          commit('SET_SEX', data.sex)
          commit('SET_TYPE', data.type)
          commit('SET_UUID', data.uuid)
          commit('SET_WORKTIME', data.workTime)
          commit('SET_ISLOGIN', true)
        }
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },
  FedLogOut({ commit }) {
    return new Promise(resolve => {
      commit('SET_ADDRESS', '')
      commit('SET_DEPTID', '')
      commit('SET_EMAIL', '')
      commit('SET_NAME', '')
      commit('SET_NATION', '')
      commit('SET_PHONE', '')
      commit('SET_QUALIFICATIONNUMBER', '')
      commit('SET_REALNAME', '')
      commit('SET_RELATEDUSER', '')
      commit('SET_SEX', '')
      commit('SET_TYPE', '')
      commit('SET_UUID', '')
      commit('SET_WORKTIME', '')
      commit('SET_ISLOGIN', false)
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
