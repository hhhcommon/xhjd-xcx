Component({
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type: Array,
      value: []
    },
    align: {
      type: Array,
      value: ['center', 'center']
    },
    width: {
      type: Array,
      value: [50, 50]
    }
  },
  data: {
  },
  ready: function () {
  },
  methods: {
  }
})
