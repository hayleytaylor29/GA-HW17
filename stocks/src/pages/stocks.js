import React from 'react';
import data from './data.json';

const Stocks = (props) => {
    const symbol = props.match.params.symbol;
    const [stocks, setStocks] = React.useState('null');


    React.useEffect(() => {
        let tempStock = null;
        data.forEach((stock) => {
            if (stock.symbol === symbol) {
                // console.log(stock)
                tempStock = stock;
            } 
        } )
        setStocks(tempStock);
    }, []);

    const loaded = () => {
        return (
            <div>
                <h1>
                    Name: {stocks.name}
                </h1>
                <h1>
                    Price: {stocks.lastPrice}
                </h1>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading...</h1>
    };
        return data ? loaded() : loading();
    
}

export default Stocks



