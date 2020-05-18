import * as React from 'react';
import { isCSSModule } from '@unleashit/common';
import ProfileBody from './ProfileBody';
import ProfileNav from './ProfileNav';
import { UserProfileData } from './defaults/userProfileDefaults';

interface Props {
  cssModuleStyles?: { [key: string]: string };
  userProfileData?: UserProfileData;
  customLinks?: string[];
}

export const UserProfile = ({
  cssModuleStyles: theme = {},
  userProfileData: UserData = {},
  customLinks: CustomLinks = []
} : Props): React.ReactElement => {

  const [tabState, setTabState] = React.useState('Home');

  const navigateTab = (newTab: string): void  => {
    setTabState(newTab);
  }

  return (
    <div className={isCSSModule(theme.userProfileContainer, 'unl-profile__container')}>
      <h3>profile</h3>
      <ProfileNav navigateTab={navigateTab} customLinks={CustomLinks} />
      <ProfileBody tabState={tabState} userProfileData={UserData} />
      <p>footer goes here</p>
    </div>
  );
};

export default UserProfile;
