import request from '@/utils/request'

export function addDept(data) {
  return request({
    url: `/autismAPI/dept/addDept`,
    method: 'post',
    data
  })
}

export function delDept(data) {
  return request({
    url: `/autismAPI/dept/delDept?uuid=${data.uuid}`,
    method: 'delete',
    data
  })
}

export function getDept(data) {
  return request({
    url: `/autismAPI/dept/getDept`,
    method: 'get',
    params: data
  })
}

export function updateDept(data) {
  return request({
    url: `/autismAPI/dept/update`,
    method: 'put',
    data
  })
}

const DeptAPI = {
  addDept,
  delDept,
  getDept,
  updateDept
}

export default DeptAPI
