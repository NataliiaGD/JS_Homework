function pow(x,y) {
    let result = 1
    for(let i = 0; i < y ; i++){
        result = result * x
    }
    return result
}
const x = 2
const y = 4

console.log(pow(x,y))