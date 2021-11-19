import React, { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const { user } = useAuth();

    const fetchMyOrder = () => {
        fetch(`https://fathomless-plateau-47154.herokuapp.com/myorders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }

    useEffect(() => {
        fetchMyOrder();
    }, []);

    const handleDeleteMyOrder = (id) => {
        const confirm = window.confirm("Do you want to cancel this order?");
        if (confirm) {
            fetch(`https://fathomless-plateau-47154.herokuapp.com/myorders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    fetchMyOrder();
                })
        } else {

        }
    }

    return (
        <div className="responsive-grid-2col my-10">
            {
                allOrders.map((order) => <div key={order._id} className="card">
                    <h3 className="card-title">Order by: {order.name}</h3>
                    <p>{order.description}</p>
                    <p className="text-lg font-bold py-2">Ordered product price: ${order.orderItemPrice}</p>
                    <p className="text-lg font-bold py-2">Status: {order.pending}</p>
                    {order.pending === "pending" ? <button className="btn btn-danger mt-2" onClick={() => handleDeleteMyOrder(order._id)}>Cancel order</button> : <button className="btn bg-lightGray mt-2" disabled>Already Shipped</button>}
                </div>)
            }
        </div>
    );
};

export default MyOrders;