import React from "react";

class ItemListContainer extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            greeting: this.props.greeting
        }
    }

    render (){
        return(
            <div>
                <p> {this.state.greeting} </p>
            </div>
        );
    }
}
export default ItemListContainer;