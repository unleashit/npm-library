import React from 'react';
import {
  UserProfileData,
  renderDefaultProfile,
  renderAccountDetails,
  renderPasswordReset
} from './defaults/userProfileDefaults';

interface ProfileBodyProps {
  tabState?: string;
  userProfileData?: UserProfileData;
}

// const routes = (tabstate) => {
//   const defaults = [['home', <ProfileHome />], ['profile', <Profile />], ['account', <ProfileAccount />], ['passwordReset', <ProfilePasswordreset />]];

  
// }

function ProfileBody({ tabState, userProfileData }: ProfileBodyProps): React.ReactElement {
  const mapOfTabsToDisplay: { [key: string]: Function; } = {
    'Home': (): JSX.Element => <div>Main Profile Body</div>,
    'Profile': (): JSX.Element => renderDefaultProfile(userProfileData || {}),
    'Account': (): JSX.Element => renderAccountDetails(userProfileData || {}),
    'Password Reset': (): JSX.Element => renderPasswordReset()
  };

  return tabState ? mapOfTabsToDisplay[tabState]() : mapOfTabsToDisplay.Home;
}

export default ProfileBody;
