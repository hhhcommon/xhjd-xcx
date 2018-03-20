const Image = {
  previewImage: function (e) {
    const dataset = e.currentTarget.dataset;
    const url = dataset.url;
    const id = dataset.id;
    let urls = []
    if (id) {
      urls = this.data[id].previewImages
    } else if (this.data.previewImages) {
      urls = this.data.previewImages
    } else {
      urls = [url]
    }
    wx.previewImage({
      current: url,
      urls: urls
    })
  }
}

module.exports = {
  extend: Object.assign,
  Image: Image
}
