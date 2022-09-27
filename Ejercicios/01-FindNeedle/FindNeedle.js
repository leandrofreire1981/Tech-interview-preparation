function FindNeedle(haystack, needle) {
    
    for (let i = 0; i < haystack.length; i++) {
        const a = haystack.slice(i, i + needle.length)
        if(a === needle)
            return i        
    }
    return -1
    
}

//console.log(FindNeedle("react-redux", "redux")); //(6)

//console.log(FindNeedle("pinky", "puntual")); //(-1)

//console.log(FindNeedle("rereredux", "reredux")); //(2)
