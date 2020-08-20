import React from 'react';

class HelloWorld extends React.Component{
    render(){
        return(
        <h1 className="p-3">Hello {this.props.name}</h1>
        );
    }
}

//same as above ^

// function HelloWorld(props){
//     return(
//     <h1>Hello {props.name}</h1>
//     )
// }

export default HelloWorld;
