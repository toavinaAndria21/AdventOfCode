export function isDigit(car) {
    let digits = [0,1,2,3,4,5,6,7,8,9]
    for(const digit in digits)
    {
       if( car == digit ) return true
    }
    return false
}
export function isTheStringDigit(car, file, i) {

    switch (car) {
        case 'z':
            if(file[i+1] === 'e' && file[i+2] === 'r' && file[i+3] === 'o') 
                return '0'
            break
        case 'o':
            if(file[i+1] === 'n' && file[i+2] === 'e')  
                return '1'
            break
        case 't':
            if(file[i+1] === 'w' && file[i+2] === 'o')  
                return '2'
            else if(file[i+1] === 'h' && file[i+2] === 'r' && file[i+3] === 'e' && file[i+3] === 'e')
                return '3'
            break
        case 'f':
            if(file[i+1] === 'o' && file[i+2] === 'u' && file[i+3] === 'r')  
                return '4'
            else if(file[i+1] === 'i' && file[i+2] === 'v' && file[i+3] === 'e')
                return '5'
            break
        case 's':
            if(file[i+1] === 'i' && file[i+2] === 'x')  
            return '6'
        else if(file[i+1] === 'e' && file[i+2] === 'v' && file[i+3] === 'e' && file[i+4] === 'n')
            return '7'
            break
        case 'e':
            if(file[i+1] === 'i' && file[i+2] === 'g' && file[i+3] === 'h' && file[i+4] === 't')
            return '8'
            break
        case 'n':
            if(file[i+1] === 'i' && file[i+2] === 'n' && file[i+3] === 'e')
            return '9'
        break
    }
}