import React from 'react';
import { Link } from 'react-router-dom';
import data from './data.json'

const Stock = (props) => {
    return (
        <div className="stocks">
            {data.map((stock) => {
                const { name, lastPrice, symbol, change } = stock;
                const roundChange = 
                    Math.round(change * 1000)/1000;
                    
            
                return (
                    <Link to={`/stocks/${symbol}`}>
                        <h2>{name} {lastPrice} ({roundChange})</h2>
                    </Link>
                )
            })}
        </div>
    )
    
}

export default Stock
