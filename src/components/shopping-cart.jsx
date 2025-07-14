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
                        <div className="item-info">
                            <span>{item.amount}x {item.name}</span>
                            <span className="item-price">
                                {(item.amount * item.price).toFixed(2)}€
                            </span>
                        </div>
                        <div className="item-controls">
                            <button 
                                className="btn btn-sm btn-secondary me-1"
                                onClick={() => this.props.onDecrease(item.name)}
                            >
                                -
                            </button>
                            <button 
                                className="btn btn-sm btn-danger"
                                onClick={() => this.props.onRemove(item.name)}
                            >
                                ×
                            </button>
                        </div>
                    </div>
                ))}
                
                {this.props.items.length === 0 && (
                    <p className="text-muted">Ihr Warenkorb ist leer</p>
                )}
                
                {this.props.items.length > 0 && <hr />}
                
                <div className="cart-total">
                    <strong>Gesamt: {total}€</strong>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;