import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from "./components/Backdrop/Backdrop";

class App extends Component {
    state = {
      sideDrawerVisible: false
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerVisible: !prevState.sideDrawerVisible};
        });
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerVisible: false})
    };

    render(){
        let backDrop;

        if (this.state.sideDrawerVisible) {
            backDrop = <Backdrop click={this.backdropClickHandler}/>;
        }

        return (
            <div style={{height: '100%'}}>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SideDrawer show={this.state.sideDrawerVisible}/>
                {backDrop}
                <main style={{marginTop: '64px'}}>
                    <p>page content</p>
                </main>
            </div>
        )
    }
}

export default App;
