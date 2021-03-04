import request from '@/utils/request'

const appKey = 'fb03e8f764d7a1518199eae6a99092a5'
export function fetchNews() {
  return request({
    url: '/api/jisuapi/newSearch',
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

export function AIRobot(data) {
  return request({
    url: '/api/iqa/query',
    method: 'get',
    params: {
      appkey: appKey,
      question: data.question
    }
  })
}
