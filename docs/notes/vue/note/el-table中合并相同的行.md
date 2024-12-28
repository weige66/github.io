---
title: el-table中合并相同的行
createTime: 2024/12/28 23:47:14
permalink: /notes/vue/el-table中合并相同的行/
---

```vue
data() {
    return {
  	columnArr: ['variety'], //需要合并的项
      	spanArr: [], //临时组
      	spanData: [], // 组合的合并组
      	tableData: [],
    }
}


 methods: {
	init() {
		axios(xxx).then(({datat})=> {
		 this.tableData = data.bizTypeVOS
      		this.getSpanData(this.tableData)
                }
         },
	// 计算需要合并的单元格
    getSpanData(data) {
      this.spanData = []
      this.columnArr.forEach(element => {
        let contactDot = 0
        this.spanArr = []
        data.forEach((item, index) => {
          if (index === 0) {
            this.spanArr.push(1)
          } else {
            if (item[element] === data[index - 1][element]) {
              this.spanArr[contactDot] += 1
              this.spanArr.push(0)
            } else {
              contactDot = index
              this.spanArr.push(1)
            }
          }
        })
        this.spanData.push(this.spanArr)
      })
    },
// 合并相同项
    spanMethod({ row, column, rowIndex, columnIndex }) {
      if (this.columnArr.includes(column.property)) {
        if (this.spanData[columnIndex][rowIndex]) {
          return {
            rowspan: this.spanData[columnIndex][rowIndex],
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
}
	

```