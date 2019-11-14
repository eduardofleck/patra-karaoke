import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import RoomPicker from "./RoomPicker";
import App from "./App";
import NotFound from "./NotFound";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={RoomPicker} />
            <Route path="/room/:roomId" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;