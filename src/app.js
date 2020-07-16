import './styles/style.scss'
import 'materialize-css/dist/js/materialize'
import {getHeader, logicHeader} from './app/header'
import {createDishTypeBtn} from './app/mainPage'
import {getDishSubtype} from './app/utils'


const root = document.getElementById('root')

root.innerHTML = getHeader()
createDishTypeBtn(root)
logicHeader()

getDishSubtype()

