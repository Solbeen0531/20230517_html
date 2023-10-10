import { Component } from "react";

class R004_LifecycleEx extends Component {
    render(){
        console.log('3. render Call');
        return(
            <h2>[This is Re-render Component]</h2>
        );
    }
}
export default R004_LifecycleEx;