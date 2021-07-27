import React from 'react';
import { AddOrderButton, OrderFoodComponent } from './order.js';

export class MenuComponent extends React.Component {
    getMenu(){
        const daftarMenu = [{id:'0', tersedia:true, namaMakanan:'Kentang Goreng', harga:'25000', infoKalori:'211', deskripsi:'Kentang goreng instan digoreng dadakan'},
                            {id:'1', tersedia:true, namaMakanan:'Nasi Goreng', harga:'35000', infoKalori:'267', deskripsi:'Nasi goreng instan digoreng dadakan'},
                            {id:'2', tersedia:true, namaMakanan:'Mie Goreng', harga:'15000', infoKalori:'321', deskripsi:'Mie goreng instan digoreng dadakan'},
                            {id:'3', tersedia:false, namaMakanan:'Bihun Goreng', harga:'20000', infoKalori:'296', deskripsi:'Bihun goreng instan digoreng dadakan'},
                            ];
        return daftarMenu;
    }

    render(){
        let listMenu = this.getMenu();
        let pcMenu = listMenu.map((menu) =>
            <Menu key={menu.id} 
                tersedia={menu.tersedia} 
                namaMakanan={menu.namaMakanan} 
                harga={menu.harga} 
                infoKalori={menu.infoKalori} 
                deskripsi={menu.deskripsi} />  
            );
        return pcMenu;
    }
}

class Menu extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {makanan:''};
        }   
    render(){
        let sedia;
        let add;
        if(this.props.tersedia){
            sedia = "menu";
            add = <AddOrderButton makanan={this.props.namaMakanan} harga={this.props.harga} />
         } else {
            sedia = "menu habis";
            add = <div>Produk Habis!</div>
         }
        // namaMakanan, harga, tersedia, infoKalori, vegan, gambar
        return (
            <div className={sedia}>
                <div className='pic placeholder'></div>
                <div className='nama'>{this.props.namaMakanan}</div>
                <div className='harga'>Rp{this.props.harga}</div>
                <div className='kalori'>Kalori: {this.props.infoKalori} kkal</div>
                <div className='desk'>Deskripsi: {this.props.deskripsi}</div>
                {add}
            </div>
        );
    }
}
