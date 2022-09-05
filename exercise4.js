function FDevice(name, amperage) {
    this.name = name
    this.amperage = amperage
    this.voltage = 0
}

FDevice.prototype.switchOn = function () {
    this.voltage = 220
}

FDevice.prototype.switchOff = function () {
    this.voltage = 0
}

FDevice.prototype.calculatePower = function () {
    return this.amperage * this.voltage
}


function FTelevision() {
    this.screen = '1280x720'
}

FTelevision.prototype = new FDevice('Xiaomi MI TV 32 P1 32" HD', 0.23)

FTelevision.prototype.break = function () {
    this.amperage = 0
}

FTelevision.prototype.repair = function () {
    this.amperage = 0.23
}


function FKettle() {
    this.capacity = 2
    this.water = 0
}

FKettle.prototype = new FDevice('HOME ELEMENT HE-KT180', 8.2)

FKettle.prototype.pourIn = function (volume) {
    this.water = Math.min(this.capacity, this.water + volume)
}

FKettle.prototype.pourOut = function (volume) {
    this.water = Math.max(0, this.water - volume)
}

FKettle.prototype.switchOn = function () {
    // не понял как обратиться к родительскому методу
    this.voltage = 220
    console.log(150000*this.water)
    // setTimeout(this.switchOff, 150000*this.water) так почему-то не работает
    setTimeout(() => this.switchOff(), 150000*this.water)
}

myTV1 = new FTelevision()
myKettle1 = new FKettle()
