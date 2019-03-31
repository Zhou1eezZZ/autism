import request from '@/utils/request'

const appKey = '14ec61db9c451f22'
export function fetchNews() {
  return request({
    url: '/api/search',
    method: 'get',
    params: {
      appkey:appKey,
      keyword:'自闭症'
    }
  })
}