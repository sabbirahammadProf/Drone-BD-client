import React, { useState, useEffect } from 'react';

const ManageAllOrders = () => {

    const [drones, setDrones] = useState([]);

    const fetchOrders = () => {
        fetch('https://fathomless-plateau-47154.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setDrones(data));
    }

    useEffect(() => {
        fetchOrders();
    }, []);

    const updateProcessing = (id, proccessing) => {
        fetch(`https://fathomless-plateau-47154.herokuapp.com/orders/${id}/${proccessing}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => fetchOrders());
    }

    return (
        <div className="overflow-auto flex justify-center">
            <table className="table-auto border-collapse border-2 border-secondary p-1">
                <thead>
                    <tr>
                        <th className="border-2 p-2 border-secondary">Order item</th>
                        <th className="border-2 p-2 border-secondary">Order by</th>
                        <th className="border-2 p-2 border-secondary">Order address</th>
                        <th className="border-2 p-2 border-secondary">Order proccessing</th>
                        <th className="border-2 p-2 border-secondary">Manage processing</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        drones.map((drone) => <tr key={drone._id}>
                            <td className="border-2 p-2 border-secondary">{drone.orderItem}</td>
                            <td className="border-2 p-2 border-secondary">{drone.name}</td>
                            <td className="border-2 p-2 border-secondary">{drone.address}</td>
                            <td className="border-2 p-2 border-secondary">{drone.pending}</td>
                            {drone.pending === "pending" ? <td onClick={() => updateProcessing(drone._id, "shipped")} className="border-2 p-2 border-secondary"><button className="btn btn-primary w-full">Set shipped</button></td> : <td onClick={() => updateProcessing(drone._id, "pending")} className="border-2 p-2 border-secondary"><button className="btn btn-secondary w-full">Set pending</button></td>}
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrders;