let atoz = 'abcdefghijklmnopqrstuvwxyz'
let shiftDigits = 3

let cryptoFun = (string, shiftDigits) => {
    let shiftedLetter = ''
    for(let i = 0; i<string.length; i++){
        let char = string[i]
        if(char.match(/[a-z]/)){
            let currIndex = atoz.indexOf(char)
            let newIndex = (currIndex - shiftDigits + atoz.length) % atoz.length
            shiftedLetter += atoz[newIndex]
        }else{
            shiftedLetter += char
        }
    }
    console.log(shiftedLetter)

}

cryptoFun('l oryh fubswrjudskb!', 3) // prints 'i love cryptography!'
cryptoFun('sdvvzrug', 3)// prints 'password'