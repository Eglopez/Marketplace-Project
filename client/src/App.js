import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import './App.css';

import LandigPage from './views/LandingpageView';
import Login from './views/LoginView';
import SignUp from './views/SignUpView';
import Home from './views/HomeView';
import UserProfile from './views/UserProfileView';
import NewAnnouncement from './views/NewAnnouncementView';
import AnnouncementInfo from './views/PublicationInfo';
import AnnouncementViewUser from './components/Publication-info';
import Review from './views/UserReviews'
import AProfile from './views/AnnouncementProfile'
import Complaint from './views/Complaints'
import UserReview from './views/UserProfileReviews';
import WishList from './views/WishList';
import AdminOptions from './views/AdminOptions';
import AdminReports from './components/Admin-options/Admin-reports-view';
import AdminUsers from './components/Admin-options/Admin-users-view';
import AdminDenunciation from './components/Admin-options/Admin-denunciation-view';
import AdminCategory from './components/Admin-options/Admin-category-view';
import AdminAnnouncement from './components/Admin-options/Admin-announcement-view';



function App() {
  return(
  <>
    <Router>

      <Route path="/" exact component={LandigPage}/>
      <Route path="/login" exact component={Login}/>
      <Route path="/signup" exact component={SignUp}/>
      <Route path="/home" exact component={Home}/>
      <Route path="/user-profile" exact component={UserProfile}/>
      <Route path="/new-announcement" exact component={NewAnnouncement}/>
      <Route path="/announcement-info" exact component={AnnouncementViewUser}/>
      <Route path="/user-reviews" exact component={Review}/>
      <Route path="/announcement-user-profile" exact component={AProfile}/>
      <Route path="/complaint" exact component={Complaint}/>
      <Route path="/user-profile-reviews" exact component={UserReview}/>
      <Route path="/wishlist" exact component={WishList}/>
      <Route path="/admin-options" exact component={AdminReports}/>
      <Route path="/admin-users" exact component={AdminUsers}/>
      <Route path="/admin-categories" exact component={AdminCategory}/>
      <Route path="/admin-denunciation" exact component={AdminDenunciation}/>
      <Route path="/admin-announcements" exact component={AdminAnnouncement}/>


    </Router>
  </>
  );
}

export default App;
