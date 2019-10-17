import React from 'react';
import Background from './Background';
import Footer from './Footer';
import './App.css';

class App extends React.Component {
    state = {}

    componentDidMount() {}

    render() {
        return (
            <div >
                <div className={"HeaderAndContent-wrap"}>
                    <div className={"main-background"}>
                        <Background />
                    </div>
                </div>


                <Footer />
            </div>
        )
    }
}

export default App;