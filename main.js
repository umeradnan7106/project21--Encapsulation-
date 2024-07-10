"use strict";
// ================ Encapsulation =================
//  Public
//  Private
//  Protected
class Animal {
    constructor(Name, Color, Age, Price) {
        this.name = Name;
        this.color = Color;
        this.age = Age;
        this._price = Price;
    }
    get price() {
        return this._price;
    }
    set price(a) {
        if (a <= 0)
            console.log("please provide valid price");
        else
            this._price = a;
    }
    MakeNoice() {
        console.log("Animal can make noice.");
    }
}
class Parrot extends Animal {
    constructor(name, color, age, price) {
        super(name, color, age, price);
    }
}
let p = new Parrot("Parrot", "green", 4, 200);
p.MakeNoice();
p.name = "Parrot";
p.price = 180;
console.log(p.name, "Price is", p.price);
