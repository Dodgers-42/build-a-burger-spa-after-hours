import React from './node_modules/react';
import styled from './node_modules/styled-components';

const OrderCard = ({ order }) => {

    const displayCondiments = () => {
        const condiments = Object.keys(order.condiments);

        const orderedCondiments = []

        condiments.forEach(key => {
            if (order.condiments[key]) {
                orderedCondiments.push(key);
            }
        })
        return orderedCondiments;
    }
    return (
        <div>
            <h2>{order.name}</h2>
            <h3>{order.phone}</h3>
            <p>{order.bun}</p>
            <p>{order.patties} patties</p>
            {displayCondiments().map((condiment, i) => <p key={i}>{condiment}</p>)}
            <p>{order.instructions}</p>
        </div>
    );
}

export default OrderCard;