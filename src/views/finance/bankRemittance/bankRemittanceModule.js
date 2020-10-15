const state = {
  // 接口调用参数
  params: {
    page: 1,
    per_page: 10,
    pay_method: 'bank_card',
    pay_state: 'ready',
    condition: {}
  },
  extraCondition: {},
  roles: {}, // 权限
  apiName: 'remittance',
  privileges: [
    "bankcard_pay_records_pay",
    "bankcard_pay_records_export",
    "settlement_account_edit"
  ],
  // 列表data数据
  total: 0,
  isLoading: false,
  tableData: [],
  searchData: [],
  tableHeadList: [
    {
      label: '单据编号',
      prop: 'bill_number',
      width: '150',
      checked: 1
    },
    {
      label: '场景',
      width: '100',
      prop: 'bill_type_display',
      checked: 1
    },
    {
      label: '金额(元) ',
      prop: 'amount',
      width: '100',
      sortable: true,
      checked: 1
    },
    {
      label: '收款人姓名',
      prop: 'receiver_name',
      width: '100',
      checked: 1
    },
    {
      label: '收款人手机号',
      prop: 'receiver_mobile',
      width: '120',
      checked: 1
    },
    {
      label: '开户行',
      prop: 'bank_id_display',
      slotName: 'bank_id_display',
      width: '100',
      checked: 1
    },
    {
      label: '开户行卡号',
      prop: 'bank_card',
      slotName: 'bank_card',
      width: '150',
      checked: 1
    },
    {
      label: '申请人',
      prop: 'creator_id_display',
      width: '100',
      checked: 1
    },
    {
      label: '申请时间',
      prop: 'create_time_display',
      width: '150',
      sortable: true,
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
    payload.map(ele => {
      ele.amount = Number(ele.amount) / 100
    })
    state.tableData = payload
  },
  // 更新列表表头数据
  updateEditTableList(state, payload) {
    state.tableHeadList = payload
  },
  // 更新列表参数数据
  updateParams(state, payload) {
    state.params = Object.assign({}, state.params, payload)
    state.extraCondition = {
      pay_method: state.params.pay_method,
      pay_state: state.params.pay_state
    }
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
