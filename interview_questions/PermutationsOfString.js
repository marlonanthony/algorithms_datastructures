function permutationsOfString(str, prefix='', data=[]){
    let n = str.length 
    if (n === 0) return data.push(prefix)
    for (let i = 0; i < n; i++){
        permutationsOfString(str.substring(0, i) + str.substring(i+1, n), prefix + str[i],  data)
    }
    return data
}
console.log(permutationsOfString('abc'))