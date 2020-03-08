import * as React from 'react';
import { isCSSModule } from '@unleashit/common';
// import {
//   UserDefault,
//   UserProfileComponentProps,
//   UserProfileDefault,
//   UserAccountDefault,
//   PasswordResetDefault
// } from './defaults/components';
import ProfileBody from './ProfileBody';
import ProfileNav from './ProfileNav';

// interface ChildItem {
//   title: string;
//   item: React.ReactNode;
//   props?: [];
// }

interface UserProfileData {
  userId?: number | string;
  userName?: number | string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  email?: string;
  bio?: string;
  website?: string;
  socialLinks?: string[];
}

interface Props {
  cssModuleStyles?: { [key: string]: string };
  // profileComponent: React.FC<UserProfileComponentProps>;
  // account: React.FC<UserProfileComponentProps>;
  // passwordReset: React.FC<UserProfileComponentProps>;
  userProfileData?: UserProfileData;
}

// const renderNavigationItems = (items: JSX.Element[], children: ChildItem[], setDisplayedItem: Function) => {
//   const handleClick = (e: React.MouseEvent, item:JSX.Element | React.ReactNode | undefined) => {
//     e.preventDefault();
//     setDisplayedItem(item);
//   };

//   return (
//     <nav className="main-navigation">
//       <ul className="main-navigation__ul">
//         <li>
//           <a href="" onClick={(e) => handleClick(e, items[0])} className="main-navigation__link">
//             Profile
//           </a>
//           <a href="" onClick={(e) => handleClick(e, items[1])} className="main-navigation__link">
//             Account
//           </a>
//           <a href="" onClick={(e) => handleClick(e, items[2])} className="main-navigation__link">
//             Password Reset
//           </a>
//           {
//             children.map((item: ChildItem) => {
//               return (
//                 <a href="" onClick={(e) => handleClick(e, item.item)} className="main-navigation__link">
//                   {item.title}
//                 </a>
//               )
//             })
//           }
//         </li>
//       </ul>
//     </nav>
//   )
// };

// function UserAccount(items: JSX.Element[], children: any) {
//   const [displayedItem, setDisplayedItem] = React.useState([items[0]]);

//   React.useEffect(() => {
//   }, [displayedItem])

//   return (
//     <div>
//       { renderNavigationItems(items, children, setDisplayedItem) }
//       { displayedItem }
//     </div>
//   );
// }

// class ProfileNavigation extends React.Component {
//   state = {
//     displayedComponent: null
//   };

//   handleClick = (e: React.MouseEvent, item:JSX.Element | React.ReactNode | undefined) => {
//     e.preventDefault();
//     this.setState({ displayedComponent: item })
//   };

//   render() {
//     return (
//       <div>
//         <nav className="main-navigation">
//           <ul className="main-navigation__ul">
//             <li>
//               <a href="" onClick={(e) => this.handleClick(e, items[0])} className="main-navigation__link">
//                 Profile
//               </a>
//               <a href="" onClick={(e) => this.handleClick(e, items[1])} className="main-navigation__link">
//                 Account
//               </a>
//               <a href="" onClick={(e) => this.handleClick(e, items[2])} className="main-navigation__link">
//                 Password Reset
//               </a>
//               {
//                 children.map((item: ChildItem) => {
//                   return (
//                     <a href="" onClick={(e) => handleClick(e, item.item)} className="main-navigation__link">
//                       {item.title}
//                     </a>
//                   )
//                 })
//               }
//             </li>
//           </ul>
//         </nav>
//       </div>
//     );
//   }
// }

export const UserProfile = ({
  cssModuleStyles: theme = {},
  // userProfileData = UserDefault,
  // profile = UserProfileDefault,
  // account = UserAccountDefault,
  // passwordReset = PasswordResetDefault,
} : Props): React.ReactElement => {

  const [tabState, setTabState] = React.useState('home');

  const navigateTab = (newTab: string): void  => {
    setTabState(newTab);
  }
  console.log(tabState);
  return (
    <div className={isCSSModule(theme.userProfileContainer, 'unl-profile__container')}>
      <h3>profile</h3>
      <ProfileNav />
      <ProfileBody navigateTab={navigateTab} />
      <p>footer goes here</p>
          
      {/* { UserAccount(
            [
              <Profile theme={theme} user={user}/>,
              <Account theme={theme} user={user}/>,
              <PasswordReset theme={theme} user={user}/>
            ],
            children
          )} */}
    </div>
  );
};

export default UserProfile;
