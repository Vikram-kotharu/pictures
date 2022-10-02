import SearchPic from "../SearchBar"
import './index.css'
const Home = () =>{
    return(
        <>
            <div className="container">
        <div className="d-flex flex-row justify-content-center">
            <div className="col-lg-5 m shadow p-4">
                <h1>Pic-Pedia</h1>
                <SearchPic/>

                
            </div>

        </div>


    </div>
            
        </>
    )
}

export default Home