import React from 'react';
import { useParams } from 'react-router';

const SingleItem = () => {
    const { droneId } = useParams();
    return (
        <div>
            {droneId}
        </div>
    );
};

export default SingleItem;