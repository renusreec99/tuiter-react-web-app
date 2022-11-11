import Tuiter from "./explore";

import {Routes, Route} from "react-router";
import HomeScreen from "./home";
import ProfileScreen from "./Profile";
import whoReducer from "./reducers/who-reducer";
import { configureStore } from '@reduxjs/toolkit';
import tuitsReducer from "./tuits/tuits-reducer";
import homeReducer from "./tuits/home-reducer";
import {Provider} from "react-redux";
import profileReducer from "./reducers/profile-reducer";
import EditProfile from "./EditProfile";

const store = configureStore(
  {reducer: {who: whoReducer, posts: tuitsReducer, tuits:homeReducer, profile: profileReducer }});

function TuiterPage() {
 return (
  <Provider store={store}>
<Routes>
<Route index element={<HomeScreen/>}/>
<Route path="home"    element={<HomeScreen/>}/>
<Route path="explore" element={<Tuiter/>}/>
<Route path="Profile" element={<ProfileScreen/>}/>
<Route path="edit" element={<EditProfile/>}/>
</Routes>
</Provider>
 );
}

export default TuiterPage
