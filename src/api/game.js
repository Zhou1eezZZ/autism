import request from '@/utils/request'

export function addGame(data){
  return request({
    url:`/autismAPI/game/addGame`,
    method:'post',
    data
  })
}

export function delGame(data){
  return request({
    url:`/autismAPI/game/delGame?uuid=${data.uuid}`,
    method:'delete',
    data
  })
}

export function getGames(data){
  return request({
    url:`/autismAPI/game/getGames`,
    method:'get',
    params:data
  })
}

export function updateGame(data){
  return request({
    url:`/autismAPI/game/updateGame`,
    method:'put',
    data
  })
}

const GameAPI = {
  addGame,
  delGame,
  getGames,
  updateGame
}

export default GameAPI