import ObserverList from "./ObserverList"

export default class Subject {
  constructor() {
    this.observers = new ObserverList()
  }

  addObserver(observer) {
    this.observers.add(observer)
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer, 0)
    this.observers.removeAt(index)
  }

  notify(context) {
    this.observers.getAll().forEach(observer => {
      observer.update(context)
    })
  }
}
