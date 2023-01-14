let car = { //// Task1
  car:{ model:  'Tesla',
        year: '2022',
        color: 'white',
    },
    car: {
        type: 'electric',
        color: 'black',
    },
    
    signal() {
        alert('fa!fa!');
    },
    
}
car.signal();

let salaries = { /// Task 2
    frontend: 12000,
    backend: 10000,
    designer: 8000,
    dayPay() {
        alert('We must pay salary on Tuesday!');
    },
    total() {
        let sum = 0;
        for (const key in this) {
            if (typeof this[key] === 'number') {
                sum += this[key]
            }
        }
        console.log(sum, 'result')
    }
}
salaries.total();

// function Computer (brand, system, cost) { ////Task 3
//     this.brand = brand;
//     this.system = system;
//     this.cost = this.cost;

// }
// let dell = new Computer('Dell', 'Windows', '800');
// let apple = new Computer('Apple', 'MAC OS', '1700');
// console.log(dell.brand);
// console.log(dell.system);
// console.log(dell.cost);
// console.log(apple.brand);
// console.log(apple.system);
// console.log(apple.cost);

function Computer (brand, system, _cost) { ////Task 4
    this.brand = brand;
    this.system = system;
    this._cost = this._cost;
    this[Symbol.toPrimitive] = function (hint) {
        switch (hint) {
            case 'string':
                return this.brand
            case 'number':
                return this._cost
            case 'defalut':
               return this.brand + this.system + this._cost 
        }
    }

}
let dell = new Computer('Dell', 'Windows', '800');
let apple = new Computer('Apple', 'MAC OS', '1700');
let group = {};
group[dell] = dell + apple;
console.log(String(dell));
console.log(+apple);
console.log(dell + apple);
console.log(group);

