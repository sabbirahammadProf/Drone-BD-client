import React, { useState, useEffect } from 'react';

const ManageProducts = () => {

    const [drones, setDrones] = useState([]);

    const fetchDrones = () => {
        fetch('https://fathomless-plateau-47154.herokuapp.com/allDrones')
            .then(res => res.json())
            .then(data => setDrones(data))
    }

    useEffect(() => {
        fetchDrones();
    }, []);

    const handleDeleteProduct = (id) => {
        const isDelete = window.confirm("Are you want to delete this product?")
        if (isDelete) {
            fetch(`https://fathomless-plateau-47154.herokuapp.com/allDrones/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => fetchDrones())
        } else {

        }
    }

    return (
        <div>
            <table className="table-auto border-collapse border-2 border-secondary p-1">
                <thead>
                    <tr>
                        <th className="border-2 p-2 border-secondary">Product name</th>
                        <th className="border-2 p-2 border-secondary">Product price</th>
                        <th className="border-2 p-2 border-secondary">Available colors</th>
                        <th className="border-2 p-2 border-secondary">Product in stock</th>
                    </tr>
                </thead>
                <tbody>
                    {drones.map((drone) => <tr key={drone._id}>
                        <td className="border-2 p-2 border-secondary">{drone.name}</td>
                        <td className="border-2 p-2 border-secondary">{drone.price}</td>
                        <td className="border-2 p-2 border-secondary">{drone.colors}</td>
                        <td className="border-2 p-2 border-secondary">{drone.stock}</td>
                        <td className="border-2 p-2 border-secondary"><button onClick={() => handleDeleteProduct(drone._id)} className="btn btn-danger w-full">Delete</button></td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;