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

const getDishSubtype = () => {
    const dish = getElementsFromDB()
    const dishType = getDishType()
    const dishSubtype = {}
    dishType.forEach(elem => {
        dishSubtype[elem] = new Array(0)
        for (let key in dish) {
            if (elem === dish[key].dishType) {
                dishSubtype[elem].push(dish[key].dishSubtype)
            }
        }
    })
    return dishSubtype
}

const getDish = dishType => {

}

export {getDishType, getDishSubtype, getElementsFromDB}


