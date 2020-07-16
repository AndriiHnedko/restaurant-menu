import './styles/style.scss'
import 'materialize-css/dist/js/materialize'
import {getHeader, logicHeader} from './app/header'
import {getDishTypeList} from './app/mainPage'


const root = document.getElementById('root')

root.innerHTML = getHeader()
getDishTypeList(root)
logicHeader()


