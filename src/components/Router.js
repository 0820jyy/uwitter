import { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from '../routes/Auth';
import Home from '../routes/Home';

const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <Router>
            <Route path='/' element={<Home/>}/>
            <Route path='/' element={<Auth/>}/>
        </Router>
    );
};

export default AppRouter;