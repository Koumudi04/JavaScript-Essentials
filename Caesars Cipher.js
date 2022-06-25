function rot13(str) {
    let result = ''
    for(let  i = 0; i<str.length; i++){
        let s = str.codePointAt(i)
        console.log(s)
        if(s<=90 && s>=65){
            if(s < 78){
                s = s + 13
                console.log(s)
            }
            else{
                s = s - 13
                console.log(s)
            }
        }
        result += String.fromCharCode(s)
    }
    return result
}

rot13('SERR PBQR PNZC')
