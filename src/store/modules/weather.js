import { fetchWeather } from '@/api/jisuAPI'

const state = {
  city: '',
  date: '',
  week: '',
  weather: '',
  temp: '',
  temphigh: '',
  templow: '',
  humidity: '',
  winddirect: '',
  img: ''
}

const mutations = {
  SET_CITY: (state, city) => {
    state.city = city
  },
  SET_DATE: (state, date) => {
    state.date = date
  },
  SET_WEEK: (state, week) => {
    state.week = week
  },
  SET_WEATHER: (state, weather) => {
    state.weather = weather
  },
  SET_TEMP: (state, temp) => {
    state.temp = temp
  },
  SET_TEMPHIGH: (state, temphigh) => {
    state.temphigh = temphigh
  },
  SET_TEMPLOW: (state, templow) => {
    state.templow = templow
  },
  SET_HUMIDITY: (state, humidity) => {
    state.humidity = humidity
  },
  SET_WINDDIRECT: (state, winddirect) => {
    state.winddirect = winddirect
  },
  SET_IMG: (state, img) => {
    state.img = img
  }
}

const actions = {
  setWeather({ commit }, ip) {
    return new Promise((resolve, reject) => {
      fetchWeather(ip).then(response => {
        // debugger
        if (response.status === 200 && response.data.msg === 'ok' && response.data.result) {
          const data = response.data.result
          commit('SET_CITY', data.city)
          commit('SET_DATE', data.date)
          commit('SET_WEEK', data.week)
          commit('SET_WEATHER', data.weather)
          commit('SET_TEMP', data.temp)
          commit('SET_TEMPHIGH', data.temphigh)
          commit('SET_TEMPLOW', data.templow)
          commit('SET_HUMIDITY', data.humidity)
          commit('SET_WINDDIRECT', data.winddirect)
          commit('SET_IMG', data.img)
        }
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
