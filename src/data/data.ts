const notes = new Array(15)
  .fill(1)
  .map((e, index) => ({ id: index, title: `Note: ${index}` }))

module.exports = notes
