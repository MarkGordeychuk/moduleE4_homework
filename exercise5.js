class CDevice {
    constructor(name, amperage) {
        this.name = name
        this.amperage = amperage
        this.voltage = 0
    }

    switchOn() {
        this.voltage = 220
    }

    switchOff() {
        this.voltage = 0
    }

    calculatePower() {
        return this.amperage * this.voltage
    }
}


class CTelevision extends CDevice {
    constructor() {
        super('Xiaomi MI TV 32 P1 32" HD', 0.23);
        this.screen = '1280x720'
    }

    break() {
        this.amperage = 0
    }

    repair() {
        this.amperage = 0.23
    }
}


class CKettle extends CDevice {
    constructor() {
        super('HOME ELEMENT HE-KT180', 8.2);
        this.capacity = 2
        this.water = 0
    }

    switchOn() {
        super.switchOn();
        // setTimeout(this.switchOff, 150000*this.water)
        setTimeout(() => this.switchOff(), 150000*this.water)
    }

    pourIn(volume) {
        this.water = Math.min(this.capacity, this.water + volume)
    }

    pourOut(volume) {
        this.water = Math.max(0, this.water - volume)
    }
}

myTV2 = new CTelevision()
myKettle2 = new CKettle()
