import request from '@/utils/request'

export function addRelation(data) {
  return request({
    url: `/autismAPI/userRelation/addRelation`,
    method: 'post',
    data
  })
}

export function delRelation(id) {
  return request({
    url: `/autismAPI/userRelation/delRelation?uuid=${id}`,
    method: 'delete'
  })
}

export function getRelation(data) {
  return request({
    url: `/autismAPI/userRelation/getRelation`,
    method: 'get',
    params: data
  })
}

export function updateRelation(data) {
  return request({
    url: `/autismAPI/userRelation/updateRelation`,
    method: 'put',
    data
  })
}

const UserRelateAPI = {
  addRelation,
  delRelation,
  getRelation,
  updateRelation
}

export default UserRelateAPI
