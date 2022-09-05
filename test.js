const someObject = {
    a: 1,
    b: 'Hello'
}

console.log('Testing object:')
console.log(someObject)

function test1() {
    console.log("Testing exercise 1:")
    printToConsole(someObject)
}

function test2() {
    console.log("Testing exercise 2:")
    console.log('True - ' + hasProperty('a', someObject))
    console.log('False - ' + hasProperty('wow', someObject))
}

function test3() {
    console.log("Testing exercise 3:")
    console.log(createEmptyObject())
}

async function test4() {
    console.log("Testing exercise 4:")
    console.log(myTV1)
    console.log(myKettle1)
    console.log(`Water in kettle1 ${myKettle1.water} L. Pouring.`)
    myKettle1.pourIn(0.02)
    console.log(`Water in kettle1 ${myKettle1.water} L. Switching on.`)
    myKettle1.switchOn()
    console.log(`Now power of kettle1 is ${myKettle1.calculatePower()} W. Waiting 3.5 seconds.`)
    await new Promise(resolve => setTimeout(resolve, 3500))
    console.log(`Now power of kettle1 is ${myKettle1.calculatePower()} W.`)
}

function test5() {
    console.log("Testing exercise 5:")
    console.log(myTV2)
    console.log(myKettle2)
    console.log("Switching on TV2.")
    myTV2.switchOn()
    console.log(`Power of TV2 is ${myTV2.calculatePower()} W. Breaking it.`)
    myTV2.break()
    console.log(`Power of TV2 is ${myTV2.calculatePower()} W. Voltage of TV2 is ${myTV2.voltage}.`)
}

async function runAllTests() {
    test1()
    test2()
    test3()
    await test4()
    test5()
}

runAllTests().then()