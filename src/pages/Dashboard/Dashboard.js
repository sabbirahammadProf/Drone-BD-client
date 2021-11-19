import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import AddNewAdmin from './AddNewAdmin/AddNewAdmin';
import AddProduct from './AddProduct/AddProduct';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import ManageProducts from './ManageProducts/ManageProducts';
import MyOrders from './MyOrders/MyOrders';
import Pay from './Pay/Pay';
import Review from './Review/Review';

const Dashboard = () => {
    const [numberOfDrone, setNumberOfDrone] = useState(0);
    const [numberOfOrder, setNumberOfOrder] = useState(0);
    const [numberOfUsers, setNumberOfUsers] = useState(0);
    const [numberOfRating, setNumberOfRating] = useState(0);
    const [myOrder, setMyOrder] = useState(0);
    const { path, url } = useRouteMatch();
    const { logOut, user } = useAuth();
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        fetch('https://fathomless-plateau-47154.herokuapp.com/allDrones')
            .then(res => res.json())
            .then(data => setNumberOfDrone(data.length));

        fetch('https://fathomless-plateau-47154.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setNumberOfOrder(data.length));

        fetch('https://fathomless-plateau-47154.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setNumberOfUsers(data.length));

        fetch('https://fathomless-plateau-47154.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setNumberOfRating(data.length));

        fetch(`https://fathomless-plateau-47154.herokuapp.com/myorders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data.length));
    }, []);


    useEffect(() => {
        fetch(`https://fathomless-plateau-47154.herokuapp.com/user?email=${user?.email}`)
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
        <div className="container responsive-grid py-8">
            <div className="bg-secondary rounded text-center col-span-1">
                <h3 className="text-xl py-4 px-2 text-white bg-black rounded mb-2">Dashboard of Sabbir Ahammad</h3>
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
            <div className="col-span-2">
                <Switch>
                    <Route exact path={`${path}`}>
                        <div className="grid w-full items-center h-full">
                            {admin ? <div className="responsive-grid-2col">
                                <div className="bg-primary text-white py-4 px-6 rounded text-xl">
                                    Total products: {numberOfDrone}
                                </div>
                                <div className="bg-secondary text-white py-4 px-6 rounded text-xl">
                                    Total orders: {numberOfOrder}
                                </div>
                                <div className="bg-success text-white py-4 px-6 rounded text-xl">
                                    Total users: {numberOfUsers}
                                </div>
                                <div className="bg-yellow text-black py-4 px-6 rounded text-xl">
                                    Number of Rating: {numberOfRating}
                                </div>
                            </div> : <div className="responsive-grid-2col w-full items-center h-full"><div className="bg-success text-white py-4 px-6 rounded text-xl">
                                Your total order: {myOrder}
                            </div></div>}
                        </div>
                    </Route>
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