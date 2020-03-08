// import * as React from 'react';
// import { isCSSModule } from '@unleashit/common';

// interface CSSModule {
//   [key: string]: string;
// }

// interface UserType {
//   email: string;
//   name: string;
//   url: string;
//   location: string;
// }

// export interface UserProfileComponentProps {
//   theme: CSSModule;
//   user: UserType;
// }

// export const UserDefault = {
//   email: 'quizblorg@quizblorg.org',
//   name: 'Quizblorg',
//   url: 'www.quizblorg.org',
//   location: 'Portland, Or',
// };

// export const UserProfileDefault: React.FC<UserProfileComponentProps> = ({
//   theme,
//   user,
// }): JSX.Element => (
//   <div className={isCSSModule(theme.loader, 'unl-user-profile__profile')}>
//     <h2>User Profile</h2>
//     <div>
//       <div>
//         <div className="unl-user-profile-user-details">Name</div>
//         <input type="text" defaultValue={user.name} placeholder="Name" />
//         <div>
//           Your name as it appears where you contribute or are mentioned. You can remove it
//           at any time.
//         </div>
//       </div>
//       <div className="unl-user-profile_user-details">
//         <div>Email</div>
//         <input type="text" defaultValue={user.email} placeholder="Name" />
//       </div>
//       <div className="unl-user-profile_user-details">
//         <div>About Me</div>
//         <textarea
//           placeholder="Here's a chance to tell others about yourself"
//           cols="110"
//         />
//       </div>
//       <div className="unl-user-profile_user-details">
//         <div>Personal URL</div>
//         <input type="text" defaultValue={user.url} />
//       </div>
//       <div className="unl-user-profile_user-details">
//         <div>Location</div>
//         <input type="text" defaultValue={user.location} />
//       </div>
//       <div className="unl-user-profile_user-details">
//         <button>Update</button>
//       </div>
//     </div>
//   </div>
// );

// export const UserAccountDefault: React.FC<UserProfileComponentProps> = ({
//   theme,
// }): JSX.Element => (
//   <div className={isCSSModule(theme.loader, 'unl-user-profile__account')}>
//     <h2>User Account</h2>
//     <div>
//       <div className="unl-user-profile_user-account-details">
//         <div>Status</div>
//         <p>Set your current status for others to know</p>
//       </div>
//       <div className="unl-user-profile_user-account-details">
//         <div>Notifications</div>
//         <p>Customize how you receive notifications.</p>
//         <div></div>
//       </div>
//       <div className="unl-user-profile_user-account-details">
//         <div>Export Profile Data</div>
//       </div>
//       <div className="unl-user-profile_user-account-details">
//         <button>Delete Account</button>
//         <div>Delete your account. This action cannot be undone.</div>
//       </div>
//     </div>
//   </div>
// );

// export const PasswordResetDefault: React.FC<UserProfileComponentProps> = ({
//   theme,
// }): JSX.Element => (

// lassName={isCSSModule(theme.loader, 'unl-user-profile__password-reset')}>
//     <h2>Password Reset</h2>
//     <div className={isCSSModule(theme.loader, 'unl-user-profile__password-reset_field')}>
//       <input type="password" placeholder="Current password"></input>
//     </div>
//     <div className={isCSSModule(theme.loader, 'unl-user-profile__password-reset_field')}>
//       <input type="password" placeholder="New password"></input>
//     </div>
//     <div className={isCSSModule(theme.loader, 'unl-user-profile__password-reset_field')}>
//       <button className="unl-user-profile_button">Submit</button>
//     </div>
//   </div>
// );
