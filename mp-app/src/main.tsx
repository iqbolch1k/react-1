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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
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
