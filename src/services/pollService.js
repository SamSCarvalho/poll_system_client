import APIRequest from './api';

export const getPolls = () => {
  return APIRequest.get(`/poll`)
  .then((response) => {
    return response.data
  });
}

export const getPollById = (id) => {
  return APIRequest.get(`/poll/${id}`)
  .then((response) => {
    return response.data
  });
}

export const createPoll = (data) => {
  return APIRequest.post(`/poll`, data)
  .then((response) => {
    return response
  })
}

export const deletePoll = (id) => {
  return APIRequest.delete(`/poll/${id}`)
  .then((response) => {
    return response
  })
}

export const votePoll = (id) => {
  return APIRequest.put(`/vote/${id}`)
  .then((response) => {
    return response;
  })
}