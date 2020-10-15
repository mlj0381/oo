const state = {
  // 接口调用参数
  params: {
    page: 1,
    per_page: 10,
    condition: {}
  },
  roles: {}, // 权限
  apiName: 'vehicleWarehouse',
  privileges: [
    'vehicle_warehouse_add',
    'vehicle_warehouse_export',
    'vehicle_warehouse_delete'
  ],
  // 列表data数据
  total: 0,
  isLoading: false,
  tableData: [],
  searchData: [],
  multipleSelection: [],
  tableHeadList: [
    {
      label: "名称",
      prop: "name",
      checked: 1
    },
    {
      label: "联系人",
      prop: 'contact_name',
      checked: 1
    },
    {
      label: "联系人电话",
      prop: "phone_no",
      checked: 1
    },
    {
      label: "详细地址",
      prop: "address",
      checked: 1
    },
    {
      label: "更新时间",
      prop: "update_time",
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
  // 更新列表多选数据
  updateSelection(state, payload) {
    state.multipleSelection = payload
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
