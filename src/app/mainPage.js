import {getDishType} from './utils'

const getDishTypeList = (root) => {
    const dishType = getDishType()
    dishType.forEach(e => {
        root.innerHTML += `
            <a class="waves-effect waves-light btn-large" id="${e}">${e}</a>
        `
    })
}

export {getDishTypeList}