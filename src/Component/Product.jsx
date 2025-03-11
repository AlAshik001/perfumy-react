import one from "../assets/image/one.jpg"
import two from "../assets/image/two.png"
import three from "../assets/image/three.png"


// Product Components

function Product()
{
  return(
    <div className="products">
    <div className="box">
      <img src={one} alt="Perfume 1"/>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet impedit quam corporis excepturi vitae optio nobis cum totam numquam et?</p>
    </div>

    <div className="box">
      <img src={two} alt="Perfume 2"/> 
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet impedit quam corporis excepturi vitae optio nobis cum totam numquam et?</p>
  </div>

  <div className="box">
    <img src={three} alt="Perfume 3" />
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet impedit quam corporis excepturi vitae optio nobis cum totam numquam et?</p>
</div>

  </div>
  )
}

export default Product