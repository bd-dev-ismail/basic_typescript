class K {
  num: number;

  constructor(num: number) {
    this.num = num;
  }
}

class Z extends K {
  constructor(num: number) {
    super(num);
  }
}
