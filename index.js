class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length += 1;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (this.items[pos] < this.length) {
      return this.items[pos];
    }

    throw new Error("OutOfBounds");
  }

  max() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }

    return this.items[this.length - 1];
  }

  min() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }

    return this.items[0];
  }

  sum() {
    return this.items.reduce((acc, elem) => {
      return acc + elem;
    }, 0);
  }

  avg() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }

    return this.sum() / this.length;
  }
}

module.exports = SortedList;
