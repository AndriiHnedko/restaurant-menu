import {getDishType} from './utils'

const dishType = getDishType()

const getMainPage = () => {
    return `
      <div class="row" id="dish-list">
        <div class="col s12" id="dish-list-tab">
          <ul class="tabs" id="tabs-swipe-demo">
            
          </ul>
        </div>
      </div>
    `
}

const logicMainPage = () => {
    document.addEventListener('DOMContentLoaded', () => {
        createDishTypeTab()
        let elems = document.querySelectorAll('.tabs')
        let option = {
            swipeable: true
        }
        let instance = M.Tabs.init(elems, option)
    })

}

const createDishTypeTab = () => {
    const width = Math.floor(100 / dishType.length)-0.2
    const tabs = root.querySelector('.tabs')
    const dishList = root.querySelector('#dish-list')

    dishType.forEach(elem => {
        tabs.innerHTML += `
           <li 
           class="tab" 
           style="
               width: ${width}%
           ">
           <a href="#${elem}">${elem}</a></li> 
       `
    })

    dishType.forEach(elem => {
        dishList.innerHTML += `
            <div id="${elem}" class="col s12">${elem}</div>
        `
    })

}






export {getMainPage, logicMainPage}