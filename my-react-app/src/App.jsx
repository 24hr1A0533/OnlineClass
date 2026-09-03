import Header  from "./Headers";
import {add as yuva , sub as kishore , mul as venky} from "./Headers";
function App() {

  return (
    <>
   <h1>hello world </h1>
   <h1>
    Yuva sri 
   </h1>
   <h2> Add:{yuva(16,20)}</h2><br />
   <h2> subtraction:{kishore(16,20)}</h2><br />
   <h2> Division:{venky(16,20)}</h2>
    </>
  )
}

export default App
