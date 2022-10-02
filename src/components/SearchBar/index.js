import {Component} from 'react'


class SearchPic extends Component{

    state = {formvalue:""}

    formChange = (e)=>{
        this.setState({formvalue:e.target.value})
        
    }


    render(){
        return(
            <>
                <form action="" method="get" accept-charset="utf-8">
                    <input class="form-control" type="search" name="" id="" value={this.state.formvalue} onChange={this.formChange}  placeholder='Seach for Any Pictures' />
                    
                </form>
            </>
        )
    }
}

export default SearchPic