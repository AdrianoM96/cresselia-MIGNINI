import React from "react";

class ItemListContainer extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            greeting: 'LISTA DE ITEMS '
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