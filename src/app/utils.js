const getElementsFromDB = () => {
    fetch('https://restaurant-menu-c2d19.firebaseio.com/dishs.json')
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('dishList', JSON.stringify(data))
        })
    return JSON.parse(localStorage.getItem('dishList'))
}


const getDishType = () => {
    const dish = getElementsFromDB()
    let dishType = []
    for (let key in dish) {
        dishType.push(dish[key].dishType)
    }
    return Array.from(new Set(dishType))
}

export {getDishType}


