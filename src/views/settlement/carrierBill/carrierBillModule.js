const state = {
  // 接口调用参数
  params: {
    page: 1,
    per_page: 10,
    condition: {}
  },
  roles: {}, // 权限
  apiName: 'carrierBill',
  // 列表data数据
  total: 0,
  isLoading: false,
  tableData: [],
  searchData: [],
  tableHeadList: [
    {
      label: '承运方名称',
      prop: 'provider_display',
      width: 100,
      checked: 1
    },
    {
      label: '承运台数',
      prop: 'num',
      width: 100,
      checked: 1
    },
    {
      label: '暂估运费',
      prop: 'estimate_cost',
      width: 80,
      checked: 1
    },
    {
      label: '合同运费',
      prop: 'contract_cost',
      width: 100,
      checked: 1
    }
  ]
}

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
  // 更新页面搜索内容
  updateSearchData(state, payload) {
    state.searchData = payload
  },
  // 更新表格 loading 状态
  updateLoading(state, payload) {
    state.isLoading = payload
  },
  // 更新数据总条数
  updateTotal(state, payload) {
    state.total = payload
  },
  // 更新data数据
  updateTableData(state, payload) {
    state.tableData = payload
  },
  // 更新列表表头数据
  updateEditTableList(state, payload) {
    state.tableHeadList = payload
  },
  // 更新列表参数数据
  updateParams(state, payload) {
    state.params = Object.assign({}, state.params, payload)
  },
  // 更新权限
  updateRoles(state, payload) {
    state.roles = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
