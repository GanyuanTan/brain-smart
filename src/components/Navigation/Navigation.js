import React from 'react';

const Navigation = ( {onRouteChange, isSignedIn}) => {
        if (isSignedIn) {
            return (
                <nav style = {{display: 'flex', justifyContent: 'flex-end'}}>
                    <p onClick={() => onRouteChange('signout')} className="underline f3 link dim black pa3 pointer">Sign Out</p>
                </nav>
            );
        } else {
            return (
                <nav style = {{display: 'flex', justifyContent: 'flex-end'}}>
                    <p onClick={() => onRouteChange('signin')} className="underline f3 link dim black pa3 pointer">Sign In</p>
                    <p onClick={() => onRouteChange('register')} className="underline f3 link dim black pa3 pointer">Register</p>
                </nav>
            );
        }
}

export default Navigation;