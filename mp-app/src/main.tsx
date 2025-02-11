import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Counter from './Components/Counter/conunter.tsx'
import Togglebutton from './Components/Togglebutton/toggle.tsx'
import Inputmirror from './Components/Inputmirror/input.tsx'
import Shoppinglist from './Components/Shoppinglist/list.tsx';
import Colorchanger from './Components/Colorchanger/changer.tsx'
import Amaliy_1 from './Components/Amaliy_1/amaliy1.tsx';
import Updateuser from './Components/Updateuser/User.tsx'
import Arrayy from './Components/Arrayy/array.tsx'
import ClassCom from './Components/ClassCom/com.tsx'
import Funkcom from './Components/Funkcom/com.tsx'
import Events from './Components/Events/events.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClassCom/>
    <Funkcom/>
    <Events/>
    <Amaliy_1/>
    <Updateuser/>
    <Arrayy/>
    <Counter/>
    <Togglebutton/>
    <Inputmirror/>
    <Shoppinglist/>
    <Colorchanger/>
  </StrictMode>,
)
