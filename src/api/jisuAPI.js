import request from '@/utils/request'

const appKey = '14ec61db9c451f22'
export function fetchNews() {
  return request({
    url: '/api/news/search',
    method: 'get',
    params: {
      appkey: appKey,
      keyword: '自闭症'
    }
  })
}

export function fetchWeather(ip) {
  return request({
    url: '/api/weather/query',
    method: 'get',
    params: {
      appkey: appKey,
      city: '',
      ip: ip
    }
  })
}
