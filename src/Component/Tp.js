import { click } from "@testing-library/user-event/dist/click";
import { useState } from 'react'
const Tp = () =>{
const [a, setA] = useState();


function click(){



}



    return(
<div>

<p>{a}</p>
<button onClick = {click}>Запуск</button>
</div>
    )
};export default Tp;