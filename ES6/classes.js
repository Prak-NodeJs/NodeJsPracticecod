class Car {
constructor(options){
    this.title = options.title;
}
    drive(){
        return 'vroom';
    }
}


class Toyota extends Car{
  constructor(options){
    super(options);
    this.color = options.color;

  }

    honk(){
        return 'beep';
    }
}

const toyota = new Toyota({color:'red', title: 'daily dribve'});
console.log(toyota);
console.log(toyota.honk());