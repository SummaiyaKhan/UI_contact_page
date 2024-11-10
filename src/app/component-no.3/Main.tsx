import Rightside from "../component-no.1/Right-side"
import Leftside from "../component-no.2/Left-side"

 const  Main =()=> {
  return(
    <div className="flex justify-end ">
      <Rightside />
      <Leftside />
    </div>
  )
}

export default Main