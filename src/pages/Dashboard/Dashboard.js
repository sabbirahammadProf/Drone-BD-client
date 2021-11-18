import React, { useState } from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import useAuth from '../../hooks/useAuth';
import AddNewAdmin from './AddNewAdmin/AddNewAdmin';
import AddProduct from './AddProduct/AddProduct';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import ManageProducts from './ManageProducts/ManageProducts';
import MyOrders from './MyOrders/MyOrders';
import Pay from './Pay/Pay';
import Review from './Review/Review';

const Dashboard = () => {
    const { path, url } = useRouteMatch();
    const { logOut, user } = useAuth();
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if (data.admin == true) {
                    setAdmin(true);
                } else {
                    setAdmin(false);
                }
            })
    }, []);

    return (
        <div className="container grid grid-cols-3">
            <div className="bg-secondary rounded text-center my-4">
                <h3 className="text-2xl py-4 text-white bg-black rounded mb-2">Dashboard of Sabbir Ahammad</h3>
                <div className="pb-4">
                    {admin ? <><Link to={`${url}/manageorders`} className="dashboard-link">Manage all Orders</Link>
                        <Link to={`${url}/manageproducts`} className="dashboard-link">Manage products</Link>
                        <Link to={`${url}/addproduct`} className="dashboard-link">Add new products</Link>
                        <Link to={`${url}/makeadmin`} className="dashboard-link">Make an admin</Link> <button className="btn btn-secondary mt-6 mb-3" onClick={logOut}>Sign Out Now</button></> : <><Link to={`${url}/pay`} className="dashboard-link">Pay Now</Link>
                        <Link to={`${url}/myorders`} className="dashboard-link">My orders</Link>
                        <Link to={`${url}/review`} className="dashboard-link">Give a review</Link>
                        <button className="btn btn-secondary mt-6 mb-3" onClick={logOut}>Sign Out Now</button></>}
                </div>
            </div>
            <div>
                <Switch>
                    <Route exact path={`${path}/manageorders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                    <Route exact path={`${path}/manageproducts`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                    <Route path={`${path}/addproduct`}>
                        <AddProduct></AddProduct>
                    </Route>
                    <Route exact path={`${path}/makeadmin`}>
                        <AddNewAdmin></AddNewAdmin>
                    </Route>
                    <Route exact path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route exact path={`${path}/myorders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route exact path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;