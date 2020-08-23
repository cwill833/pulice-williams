import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../../pages/Home/HomePage'

const Content = () => {
    return (

        // this will be a switch statement 
        <Switch>
            {/* template route */}
            <Route exact path="/" component={Homepage} />
            {/* / = homepage
            /bio = about us
            /press = previous work
            /clientlist = previous clients
            /contact = contact us page */}
            {/* footer pages
                /restaurants
	                -sub cats
                /offices
	                -sub cats
                /residential
	                -sub cats
                /retail
                    -sub cats
                /current
                    -sub cats */}
        </Switch>

    )
}

export default Content;