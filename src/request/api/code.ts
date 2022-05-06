import request from '../axios.ts'

export const getNetSiteCodeLinkList = () => {
  return request.post('/api/netSite/link')
}