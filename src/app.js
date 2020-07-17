import './styles/style.scss'
import 'materialize-css/dist/js/materialize'
import {getHeader, logicHeader} from './app/header'
import {getMainPage, logicMainPage} from './app/mainPage'
import {getDishSubtype} from './app/utils'


const root = document.getElementById('root')

root.innerHTML = getHeader()
root.innerHTML += getMainPage()
logicHeader()
logicMainPage()

getDishSubtype()

