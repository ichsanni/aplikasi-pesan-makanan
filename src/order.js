import React from 'react';

export class OrderFoodComponent extends React.Component {
    render(){
        let getKeys = Object.keys(sessionStorage);
        let temp = [];
        for (let x in getKeys){
            console.log(getKeys[x]);
            temp.push(<WriteOrder key={x} nama={getKeys[x]} makanan={sessionStorage.getItem(getKeys[x])} />);
            
        }
        return <div><h2>Daftar Pesanan</h2>{temp}</div>;

    }
}
export class AddOrderButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {makanan:''};
        this.handleAddMenuOrder = this.handleAddMenuOrder.bind(this);
        }
        
    handleAddMenuOrder(e){
        let newOrder = e.target.value.split(',');
        let update = false;
        let getKeys = Object.keys(sessionStorage);
        if (getKeys.length > 0){
            for (let x in getKeys){
                if(getKeys[x] === newOrder[0]){
                    update = true;
                }
            }
        }
        if (update){
            let order = JSON.parse(sessionStorage.getItem(newOrder[0]));
            let harga = parseInt(order.harga) + parseInt(newOrder[1]);
            let qty = parseInt(order.qty) + 1;
            let updateOrder = {harga:harga, qty:qty};
            sessionStorage.setItem(newOrder[0], JSON.stringify(updateOrder));
        } else {
            let order = {harga:newOrder[1],qty:newOrder[2]}; 
            sessionStorage.setItem(newOrder[0], JSON.stringify(order));
        }
        window.location.reload();
    }

    render(){
    return (
                <button value={[this.props.makanan, this.props.harga, '1']} 
                onClick={this.handleAddMenuOrder}>Pesan {this.props.makanan}</button>);
    }
}
class WriteOrder extends React.Component {
    render(){
        let temp = JSON.parse(this.props.makanan);
        return (

            <div>
                <p>Nama Makanan: {this.props.nama}</p>
                <p>Biaya: {temp.harga}</p>
                <p>Jumlah: {temp.qty}</p>
            </div>
        )
    }
}
