async function getAlluser() {
    try {
        const response = await fetch('https://api.github.com/users/KrushnatSalavi')

        const data = await response.json()
        console.log(data);
    }
    catch(error){
        console.log('E :',error)
    }
    
}

getAlluser();