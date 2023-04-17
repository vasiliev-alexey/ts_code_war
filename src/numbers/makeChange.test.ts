const makeChange = (amount) => {
    console.log(amount)
    let numberOfHalfDollars = Math.floor(amount / 50)
    let numberOfQuarters = Math.floor((amount - (numberOfHalfDollars*50)) / 25)
    let numberOfDimes = Math.floor( (amount - (numberOfHalfDollars*50) -  (numberOfQuarters*25))  / 10)
    let numberOfNickles = Math.floor ((amount - (numberOfHalfDollars*50) - (numberOfQuarters*25) - (numberOfDimes*10)) / 5)
    let numberOfPennies = amount - (numberOfHalfDollars*50) - (numberOfQuarters*25) - (numberOfDimes*10) - (numberOfNickles*5)

    const array = [ ['H', numberOfHalfDollars], [ 'Q', numberOfQuarters], ['D' ,numberOfDimes], ['N',numberOfNickles], ['P', numberOfPennies] ]

    let change = {}

    for (let i = 0; i < array.length; i++){
        if (array[i][1] !== 0) change[array[i][0]] = array[i][1]
    }

    return change
};
