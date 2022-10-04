import {Component} from 'react'


class SearchPic extends Component{

    state = {formvalue:"",counter:1}

    onFormChange = (e)=>{
        e.preventDefault()
        //console.log(this.state.formvalue)
        this.props.sended(this.state.formvalue,this.state.counter)
     }

    formChange = (e)=>{
        this.setState({formvalue:e.target.value})
    }

    add = () =>{
        
        this.setState({counter:this.state.counter+1})
        console.log(this.state.counter)
    }
     
    sub = () =>{
        if (this.state.counter <= 1){
            this.setState({counter:1})
        }
        else{
            this.setState({counter:this.state.counter-1})

        }
        
        console.log(this.state.counter)
    }


    render(){
        return(
            <>
                <form onSubmit={this.onFormChange} action="" method="get" accept-charset="utf-8">
                    <input className="form-control" type="search" name="" id="" value={this.state.formvalue} onChange={this.formChange}  placeholder='Seach for Any Pictures' />
                    
                    
                </form>
                <br/>
                <button className='btn btn-danger' onClick={this.sub}>Previous</button>
                <button className='btn btn-primary ml-3' onClick={this.add}>Next</button>
                <span className='ml-3'>Please hit enter after clicking next/prev buttons</span>
            </>
        )
    }
}

export default SearchPic