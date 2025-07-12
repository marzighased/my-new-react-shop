import React, { Component } from 'react'

class ShoppingCart extends Component {
    state = {}

    calculateTotal = () => {
        let total = 0;
        for(let item of this.props.items) {
            total += item.amount * item.price;
        }
        return total.toFixed(2);
    }

    render() { 
        const total = this.calculateTotal();
        
        return (
            <div className='shopping-cart'>
                <h2>Warenkorb</h2>
                
                {this.props.items.map(item => (
                    <div key={item.name} className="cart-item">
                        <span>{item.amount}x {item.name}</span>
                        <span className="item-price">
                            {(item.amount * item.price).toFixed(2)}€
                        </span>
                    </div>
                ))}
                
                {this.props.items.length > 0 && <hr />}
                
                <div className="cart-total">
                    <strong>Gesamt: {total}€</strong>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;