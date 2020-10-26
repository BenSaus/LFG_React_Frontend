import React from "react"
import "./App.css"

import { ApolloProvider } from "@apollo/client"
import client from "./apollo-setup"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Layout from "./components/Layout/Layout"
import Login from "./containers/Login/Login"
import FrontPage from "./containers/FrontPage/FrontPage"
import GroupInfo from "./containers/GroupInfo/GroupInfo"
import UserInfo from "./containers/UserInfo/UserInfo"
import Apply from "./containers/Apply/Apply"
import MyApps from "./containers/MyApps/MyApps"
import MyGroups from "./containers/MyGroups/MyGroups"
import MyInvites from "./containers/MyInvites/MyInvites"
import CreateGroup from "./containers/CreateGroup/CreateGroup"
import ManageGroup from "./containers/ManageGroup/ManageGroup"
import NotFound404 from "./containers/404NotFound/NotFound404"
import LandingPage from "./containers/LandingPage/LandingPage"

function App() {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <div className="App">
                    <Layout>
                        <Switch>
                            <Route path="/" exact component={LandingPage} />
                            <Route path="/login" exact component={Login} />
                            <Route path="/frontpage" exact component={FrontPage} />
                            <Route
                                path="/user/:id"
                                exact
                                component={UserInfo}
                            />
                            <Route
                                path="/group/create"
                                exact
                                component={CreateGroup}
                            />
                            <Route
                                path="/group/manage/:id"
                                exact
                                component={ManageGroup}
                            />
                            <Route
                                path="/group/:id"
                                exact
                                component={GroupInfo}
                            />

                            {/* Maybe this should be /group/id/apply? */}
                            <Route path="/apply/:id" exact component={Apply} />
                            <Route path="/myApps" exact component={MyApps} />
                            <Route
                                path="/myGroups"
                                exact
                                component={MyGroups}
                            />
                            <Route
                                path="/myInvites"
                                exact
                                component={MyInvites}
                            />
                            <Route path="*" component={NotFound404} />
                        </Switch>
                    </Layout>
                </div>
            </BrowserRouter>
        </ApolloProvider>
    )
}

export default App
