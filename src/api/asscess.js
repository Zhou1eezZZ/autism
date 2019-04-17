import request from '@/utils/request'

export function addAsscess(data) {
  return request({
    url: `/autismAPI/asscess/addAsscess`,
    method: 'post',
    data
  })
}

export function delAsscess(data) {
  return request({
    url: `/autismAPI/asscess/delAsscess?uuid=${data.uuid}`,
    method: 'delete',
    data
  })
}

export function getAsscess(data) {
  return request({
    url: `/autismAPI/asscess/getAsscess`,
    method: 'get',
    params: data
  })
}

export function updateAsscess(data) {
  return request({
    url: `/autismAPI/asscess/update`,
    method: 'put',
    data
  })
}

const AsscessAPI = {
  addAsscess,
  delAsscess,
  getAsscess,
  updateAsscess
}

export default AsscessAPI
