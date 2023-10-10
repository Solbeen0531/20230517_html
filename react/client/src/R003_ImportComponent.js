import { Component } from "react";

class R003_ImportComponent extends Component {
    render(){
        return(
            <div className="App">
                <R003_ImportComponent></R003_ImportComponent>
            <h2>This is Imported Component</h2>
            </div>
        );
    }
}
export default R003_ImportComponent;