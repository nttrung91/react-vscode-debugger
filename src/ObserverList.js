export default class ObserverList {
  constructor() {
    this.observerList = []
  }

  add(obj) {
    return this.observerList.push(obj)
  }

  count() {
    return this.observerList.length
  }

  get(index) {
    if (index > -1 && index < this.observerList.length) {
      return this.observerList[index]
    }
  }

  getAll() {
    return this.observerList
  }

  indexOf(obj, startIndex) {
    this.observerList.forEach((o, i) => {
      if (startIndex < i && obj === o) {
        return i
      }
    })

    return -1
  }

  removeAt(index) {
    this.observerList.splice(index, 1)
  }
}
