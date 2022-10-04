
import './index.css'

const ImageContainer = (props) =>{
    const {LOI} = props
    console.log(LOI)

    

    return(
            <>

            <div className="row">
              <div className="col-lg-12">
              {LOI.map((item) => {
                return <img className="col-lg-3 mb-3 mt-3 img1" key={item.id} height='250px' src={item.urls.regular} alt="images" />
            })}
                  

              </div>

            </div>
            
            
            
            

            </>
    )
    
}


export default ImageContainer