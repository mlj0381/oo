const state = {
  // 接口调用参数
  params: {
    page: 1,
    per_page: 10,
    condition: {}
  },
  roles: {}, // 权限
  apiName: 'expenseRules',
  privileges: [
    'expense_rule_add'
  ],
  // 列表data数据
  total: 0,
  isLoading: false,
  tableData: [],
  searchData: [],
  tableHeadList: [
    {
      label: '策略名称',
      prop: 'name',
      width: '100',
      checked: 1
    },
    {
      label: '出发地',
      width: '100',
      prop: 'from_display',
      checked: 1
    },
    {
      label: '目的地',
      prop: 'to_display',
      width: '100',
      checked: 1
    },
    {
      label: '适用场景',
      prop: 'scene_display',
      width: '100',
      checked: 1
    },
    {
      label: '适用运力分组',
      prop: 'truck_group_display',
      width: '100',
      checked: 1
    },
    {
      label: '最近更新时间',
      prop: 'update_time',
      width: '100',
      checked: 1
    },
    {
      label: '最近操作人',
      prop: 'user_name',
      width: '100',
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
