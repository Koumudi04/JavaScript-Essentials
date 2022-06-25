function telephoneCheck(str) {
    let state = 'a'
	let n = str.length
    if(n < 10)
        return false
    for(let i = 0; i < n; i++){
        let s = str.charAt(i)
		console.log(i, s)
        switch(state){
            case 'a':
                switch(s){
                    case '1':
                        state = 'b'
						console.log(state)
                        break
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        state = 's'
						console.log(state)
                        break
                    case '(':
                        state = 'k'
						console.log(state)
                        break
                    case "\0":
                    default:
                        return false
                }
                break

            case 'b':
                switch(s){
                    case ' ':
                        state = 'c'
                        console.log(state)
                        break
                    case '(':
                        state = 'k'
						console.log(state)
                        break
                    case "\0":
                    default:
                        return false
                }
                break

            case 'c':
                switch(s){
					case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        state = 'd'
						console.log(state)
                        break
                    case '(':
                        state = 'k'
						console.log(state)
                        break
                    case "\0":
                    default:
                        return false
                }
                break
            
            case 'd':
                switch(s){
					case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        state = 'e'
						console.log(state)
                        break
                    case "\0":
                    default:
                        return false
                }
                break
            
            case 'e':
                switch(s){
					case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        state = 'f'
						console.log(state)
                        break
                    case "\0":
                    default:
                        return false
                }
                break
            
            case 'f':
                switch(s){
                    case ' ':
                        state = 'g'
						console.log(state)
                        break
                    case '-':
                        state = 'g0'
						console.log(state)
                        break
                    case "\0":
                    default:
                        return false
                }
                break
            
            case 'g':
                switch(s){
					case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        state = 'h'
						console.log(state)
                        break
                    case "\0":
                    default:
                        return false
                }
                break
            
            case 'g0':
                switch(s){
					case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        state = 'h0'
						console.log(state)
                        break
                    case "\0":
                    default:
                        return false
                }
                break
            
            case 'h':
                switch(s){
					case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        state = 'i'
						console.log(state)
                        break
                    case "\0":
                    default:
                        return false

                }
                break
            
            case 'h0':
                switch(s){
					case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        state = 'i0'
						console.log(state)
                        break
                    case "\0":
                    default:
                        return false
                }
                break
            
            case 'i':
                switch(s){
					case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        state = 'j'
						console.log(state)
                        break
                    case "\0":
                    default:
                        return false
                }
                break
            
            case 'i0':
                switch(s){
					case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        state = 'r'
						console.log(state)
                        break
                    case "\0":
                    default:
                        return false
                }
                break
            
            case 'j':
                switch(s){
                    case ' ':
                        state = 'x'
						console.log(state)
                        break
                    case "\0":
                    default:
                        return false
                }
                break
            
            case 'k':
                switch(s){
					case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        state = 'l'
						console.log(state)
                        break
                    case "\0":
                    default:
                        return false
                }
                break
            
            case 'l':
                switch(s){
					case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        state = 'm'
						console.log(state)
                        break
                    case "\0":
                    default:
                        return false
                }
                break
            
            case 'm':
                switch(s){
					case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        state = 'n'
						console.log(state)
                        break
                    case "\0":
                    default:
                        return false
                }
                break
            
            case 'n':
                switch(s){
                    case ')':
                        state = 'o'
						console.log(state)
                        break
                    case "\0":
                    default:
                        return false
                }
                break
            
            case 'o':
                switch(s){
					case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        state = 'p'
						console.log(state)
                        break
                    case ' ':
                        state = 'o0'
						console.log(state)
                        break
                    case "\0":
                    default:
                        return false
                }
                break
            
            case 'o0':
                switch(s){
					case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        state = 'p'
						console.log(state)
                        break
                    case "\0":
                    default:
                        return false
                }
                break
            
            case 'p':
                switch(s){
					case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        state = 'q'
						console.log(state)
                        break
                    case "\0":
                    default:
                        return false
                }
                break
            
            case 'q':
                switch(s){
					case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        state = 'r'
						console.log(state)
                        break
                    case "\0":
                    default:
                        return false
                }
                break
            
            case 'r':
                switch(s){
                    case '-':
                        state = 'x'
						console.log(state)
                        break
                    case "\0":
                    default:
                        return false
                }
                break
            
            case 's':
                switch(s){
					case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        state = 't'
						console.log(state)
                        break
                    case "\0":
                    default:
                        return false
                }
                break
            
            case 't':
                switch(s){
					case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        state = 'u'
						console.log(state)
                        break
                    case "\0":
                    default:
                        return false
                }
                break
            
            case 'u':
                switch(s){
					case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        state = 'v'
						console.log(state)
                        break
					case ' ':
						state = 'g'
						console.log(state)
						break
					case '-':
						state = 'g0'
						console.log(state)
                        break
                    case "\0":
                    default:
                        return false
                }
                break
 
            case 'v':
                switch(s){
					case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        state = 'w'
						console.log(state)
                        break
                    case "\0":
                    default:
                        return false
                }
                break
            
            case 'w':
                switch(s){
					case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        state = 'y1'
						console.log(state)
                        break
                    case "\0":
                    default:
                        return false
                }
                break
            
            case 'x':
                switch(s){
					case '1': 
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        state = 'y1'
						console.log(state)
                        break
                    case "\0":
                    default:
                        return false
                }
                break
            
            case 'y1':
                switch(s){
					case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        state = 'y2'
						console.log(state)
                        break
                    case "\0":
                    default:
                        return false
                }
                break
            
            case 'y2':
                switch(s){
					case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        state = 'y3'
						console.log(state)
                        break
                    case "\0":
                    default:
                        return false
                }
                break
            
            case 'y3':
                switch(s){
					case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        state = 'z'
						console.log(state)
                        break
                    case "\0":
                    default:
                        return false
                }
                break
            
            case 'z':
				console.log(n-1)
                if(i == (n-1))
					return true
				else 
					state = '0'
					break
        }
		if(state == '0')
			break
    }
	if(state == '0')
		return false
	return true
}

telephoneCheck('555-555-5555')
