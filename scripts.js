function Phone(brand, price, color, camera) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.camera = camera;
}

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + "Camera is  " + this.camera + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver", "5.0 Mpix - przód, 12.0 Mpix - tył");
var SamsungGalaxyS6 =new Phone("Samsung", 1534, "black", "16 Mpix - tył i 5 Mpix - przód");
var OnePlusOne = new Phone("One Plus", 1299, "black", "13 Mpix");

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();