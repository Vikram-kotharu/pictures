import {Component} from 'react'


class SearchPic extends Component{

    state = {formvalue:""}

    onFormChange = (e)=>{
        e.preventDefault()
        //console.log(this.state.formvalue)
        this.props.sended(this.state.formvalue)
     }

    formChange = (e)=>{
        this.setState({formvalue:e.target.value})
    }
     


    render(){
        return(
            <>
                <form onSubmit={this.onFormChange} action="" method="get" accept-charset="utf-8">
                    <input className="form-control" type="search" name="" id="" value={this.state.formvalue} onChange={this.formChange}  placeholder='Seach for Any Pictures' />
                    
                    
                </form>
            </>
        )
    }
}

export default SearchPic