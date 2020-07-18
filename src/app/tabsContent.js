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
                        <li class="collection-item row">
                            <h5>${dishList[id].dishName}</h5>
                            <p class="col s9 m10 l11 description">${dishList[id].dishDescription}</p>
                            <p class="col s3 m2 l1 row weight-price">
                                <span class="col s12">${dishList[id].dishWeight} g</span>
                                <strong class="col s12">${dishList[id].dishPrice} UAH</strong>
                            </p>
                        </li>
            `
            }

        })
    })
}

export {getTabContent}