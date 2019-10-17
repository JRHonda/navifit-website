import React from 'react';
import Background from './Background';
import Footer from './Footer';
import './App.css';
import Content from "./Content";

class App extends React.Component {
    state = {}

    componentDidMount() {}

    render() {
        return (
            <div >
                <div className={"HeaderAndContent-wrap"}>
                    <div className={"main-background"}>
                        <Background />
                        <Content />
                    </div>
                </div>


                <Footer />
            </div>
        )
    }
}

export default App;