import React from 'react';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {
    const { user } = useAuth();
    return (
        <div>
            {console.log(user)}
            This is dashboard
        </div>
    );
};

export default Dashboard;