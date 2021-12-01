export default class Fish {
  #TYPES = ['small', 'medium', 'large'];
  #FISH_NAMES = {
    small: ["Carp", "Perch", "Mackerel", "Trout", "Walleye"],
    medium: ["Flounder", "Snapper", "Salmon", "Cod", "Catfish"],
    large: ["Bass", "Tuna", "Marlin", "Pike", "Sturgeon"]
  }
  // in centimeters
  #FISH_SIZES = {
    small: 17,
    medium: 34,
    large: 110
  }

  constructor() {
    this.type = this.pickType();
    this.name = this.pickName();
    this.catchPattern = this.createCatchPattern();
    this.size = this.baseSize();
  }

  pickType() {
    return this.#TYPES[Math.floor(Math.random() * this.#TYPES.length)]
  }

  pickName() {
    let tempNames = this.#FISH_NAMES[this.type];
    return tempNames[Math.floor(Math.random() * tempNames.length)]
  }

  createCatchPattern() {
    const pattern = [];
    let patternSize;
    switch (this.type) {
      case 'small':
        patternSize = 3;
        break;
      case 'medium':
        patternSize = 4;
        break;
      case 'large':
        patternSize = 5;
        break;
      default:
        patternSize = 0;
    }

    for(let i = 0; i < patternSize; i++) {
      if (Math.floor(Math.random()*10) % 2 === 0) {
        pattern.push('tiny');
      } else {
        pattern.push('big');
      }
    }
    pattern.push('catch')
    return pattern;
  }

  baseSize() {
    let size = this.#FISH_SIZES[this.type]
    for (let tug of this.catchPattern) {
      if (tug === 'tiny') {
        size += 1;
      } else if (tug === 'big'){
        size += 1.5;
      }
    }
    return size;
  }

  shuffle(arr) {
    for(let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      [arr[i], arr[j]] = [arr[j] , arr[i]];
    }
    return arr;
  }
}

// export default const newFish = () => new Fish();
// let myFish = new Fish();
// console.log(` ${myFish.type}\n ${myFish.name}\n ${myFish.size} \n ${myFish.catchPattern}`);
