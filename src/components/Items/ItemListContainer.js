import React from "react";
import ItemCount from "./ItemCount"

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
                <ItemCount stock={6} initial={1}></ItemCount>
            </div>
        );
    }
}
export default ItemListContainer;