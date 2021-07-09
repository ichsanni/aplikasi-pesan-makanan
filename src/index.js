import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MenuComponent } from './menu.js';
import { OrderFoodComponent } from './order.js';
import { HistoryComponent } from './history.js';

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {makanan:''};
    }   
    render(){
        return (
            <div>
            <MenuComponent />
            <OrderFoodComponent />
            <HistoryComponent />
            </div>
        )
    }
}

ReactDOM.render(<MainComponent />, document.getElementById('app'));