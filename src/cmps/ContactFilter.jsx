import  { Component } from 'react'

export  class ContactFilter extends Component {


    handleChange =({target}) =>{
        this.props.onChangeFilter(target.value)
        // console.log(target.value);

    }
    render() {
        return (
            <div className="contact-filter">
                <form className="simple-form">
                    <label htmlFor="text">Search:</label>
                    <input type="text" id="text" onChange={this.handleChange} autoComplete="off" />
                </form>
                
            </div>
        )
    }
}
