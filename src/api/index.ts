import viteApi from '../utils/request'

/**
 * 获取列表数据
 * @param params
 * @returns
 */
const getList = (params = {}) => {
  return viteApi(
    {
      url: '/api/basic/list',
      method: 'get',
      data: params
    },
    { loading: true }
  )
}

export { getList }
