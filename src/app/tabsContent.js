const getTabContent = (dishType, dishSubtype, dishList) => {
    dishType.forEach(elem => {
        Array.from(new Set(dishSubtype[elem])).forEach(key => {
            document.getElementById(elem).innerHTML += `
                <ul class="collection with-header" id="${key}-collection">
                   <li class="collection-header"><h4>${key}</h4></li>
                </ul>
            `
        })
        Array.from(new Set(dishSubtype[elem])).forEach(key => {
            for (let id in dishList) {
                if (dishList[id].dishSubtype === key)
                    document.getElementById(`${key}-collection`).innerHTML += `
                <li class="collection-item">${dishList[id].dishName}, ${dishList[id].dishDescription}</li>
            `
            }

        })
    })
}

export {getTabContent}