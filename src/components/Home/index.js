import { Component } from "react"
import axios from 'axios'
import SearchPic from "../SearchBar"
import './index.css'
import ImageContainer from "../ImageList"
class  Home extends Component{

    state = {imageSet:[]}
    
    sending = async(res1,res2)=>{
        const response = await axios.get("https://api.unsplash.com/search/photos",{
            params: {query: res1,page:res2},
            headers:{
                Authorization:" Client-ID mc40WaYzYAwGVFJ-_HBDbAHNyXnkp8oWh4SWLpgX-ds"
            }
        })
        this.setState({imageSet:response.data.results})
        
        console.log(response.data.results[0].links.download)


    }

    render(){
    return(
        <>
            <div className="container">
        <div className="d-flex flex-row justify-content-center">
            <div className="col-lg-12 m shadow p-4">
                <h1>Pic-Pedia</h1>
                <SearchPic sended = {this.sending}/>
                <ImageContainer LOI={this.state.imageSet}/>
                
                

                
            </div>

        </div>


    </div>
            
        </>
    )
    }
}

export default Home