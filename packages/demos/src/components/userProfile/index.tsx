import React, { Component } from 'react';
import UserProfile from '@unleashit/user-profile';

const userData = {
    userName: 'Quizblorg',
    firstName: 'Blarrrfengarr',
    lastName: 'Blarrfengarr',
    email: 'quizblorg@quiablorg.org',
    status: 'Looking for a team',
    bio: 'Lazy brogrammer lookin for werk',
    location: 'Portland, Or'
};

class UserProfileDemo extends Component {
    render() {
        return <UserProfile userProfileData={userData} />;
    }
}

export default UserProfileDemo;
