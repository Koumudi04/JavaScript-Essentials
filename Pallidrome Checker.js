function palindrome(str) {
    let rev = ''
    let r1 = ''
    for(let i = 0; i < str.length; i++){
        let s = str.charAt(i).toLowerCase()
        switch(s){
            case 'a':
            case 'b':
            case 'c':
            case 'd':
            case 'e':
            case 'f':
            case 'g':
            case 'h':
            case 'i':
            case 'j':
            case 'k':
            case 'l':
            case 'm':
            case 'n':
            case 'o':
            case 'p':
            case 'q':
            case 'r':
            case 's':
            case 't':
            case 'u':
            case 'v':
            case 'w':
            case 'x':
            case 'y':
            case 'z':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                r1 = r1 + s
                console.log(r1, s)
        }
    }
    for(let i = r1.length-1; i >=0; i--){
        let s = r1.charAt(i)
            rev = rev+s
            console.log(rev, s)
    }
	return rev === r1
}

palindrome('eye')
