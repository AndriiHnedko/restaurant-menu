import {getDishType, getElementsFromDB, getDishSubtype} from './utils'
import {getTabContent} from './tabsContent'

const dishType = getDishType()
const dishList = getElementsFromDB()
const dishSubtype = getDishSubtype()


const getMainPage = () => {
    return `
      <div class="row" id="dish-list">
        <div class="col s12" id="dish-list-tab">
          <ul class="tabs"></ul>
        </div>
      </div>
    `
}

const logicMainPage = () => {
    document.addEventListener('DOMContentLoaded', () => {
        createDishTypeTab()
        let elems = document.querySelectorAll('.tabs')
        let instance = M.Tabs.init(elems)
        getTabContent(dishType, dishSubtype, dishList)
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
            <div id="${elem}" class="col s12 tabs-window"></div>
        `
    })

}







export {getMainPage, logicMainPage}