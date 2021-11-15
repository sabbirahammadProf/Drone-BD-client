import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from 'react';
import initAuth from '../Firebase/firebase.init';

initAuth();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const createAnNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInAnUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        signOut(auth)
            .then(res => {
                setUser(null);
            })
    }

    return {
        user,
        createAnNewUser,
        signInAnUser,
        setUser,
        logOut,
        error,
        setError,
        isLoading,
        setIsLoading,
        auth
    }
}

export default useFirebase;