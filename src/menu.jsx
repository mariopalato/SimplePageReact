import React from 'react';
import { BrowserRouter, Link, Route, Routes} from "react-router-dom";
import GetPost from './GetPost';

class NavBar extends React.Component{
    render(){
        <div>Demo Amplify + Fargate</div>
        return(
            <Route exact path="/getPost"  element={<GetPost/>}/>
        );
    }
}
export default NavBar;