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
    selectedId: {
      type: String,
      value: '1'
    },
    scroll: {
      type: Boolean,
      value: true
    },
    height: {
      type: Number,
      value: 90
    },
    fixed: {
      type: Boolean,
      value: false
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    componentId: 'tab'
  },
  ready: function () {
  },
  methods: {
    handleTabChange(e) {
      const dataset = e.currentTarget.dataset;
      const componentId = dataset.componentId;
      const selectedId = dataset.itemId;
      this.setData({
        selectedId: selectedId
      });
      this.triggerEvent("tabChange", { selectedId });
    }
  }
})
