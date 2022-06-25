let r = ""
function convertToRoman(num) {
    
    while(num > 0){
        if(num >= 1000){
            r += "M"
            num = num - 1000
        } else if (num >= 900) {
            r += "CM"
            num = num - 900
        } else if (num >= 500) {
            r += "D"
            num = num - 500
        } else if (num >= 400) {
            r += "CD"
            num = num - 400
        } else if (num >= 100) {
            r += "C"
            num = num - 100
        } else if (num >= 90) {
            r += "XC"
            num = num - 90
        } else if (num >= 50) {
            r += "L"
            num = num - 50
        } else if (num >= 40) {
            r += "XL"
            num = num - 40
        } else if (num >= 10) {
            r += "X"
            num = num - 10
        } else if (num >= 9) {
            r += "IX"
            num = num - 9
        } else if (num >= 5) {
            r += "V"
            num = num - 5
        } else if (num >= 4) {
            r += "IV"
            num = num - 4
        } else if (num >= 1) {
            r += "I"
            num = num - 1
        }
        console.log(r, num)
    }
	return r
}

convertToRoman(2)
