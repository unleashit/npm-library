import React from 'react';

export interface UserProfileData {
  userId?: number | string;
  userName?: number | string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  email?: string;
  bio?: string;
  website?: string;
  status?: string;
  location?: string;
  socialLinks?: string[];
};

export const renderPasswordReset = (): JSX.Element  => {
  return (
    <div>
      <h2>Password Reset</h2>
      <form>
        <div>
          <input type="password" placeholder="Current password" />
        </div>
        <div>
          <input type="password" placeholder="New password" />
        </div>
        <div>
          <button type="submit" className="unl-user-profile_button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export const renderAccountDetails = (userData: UserProfileData): JSX.Element  => {
  return (
    <div>
      <h2>Account Settings</h2>
      <div className="unl-user-profile_user-account-details">
        <h3>Status</h3>
        <input type="text" defaultValue={userData.status} />
        <button type="button">Update</button>
        <p>Set your current status for others to know</p>
      </div>
      <div className="unl-user-profile_user-account-details">
        <h3>Export Profile Data</h3>
        <button type="button">Export Data</button>
      </div>
      <div className="unl-user-profile_user-account-details">
        <h3>Delete your account.</h3>
        <button type="submit">Delete</button>
        <p>This action cannot be undone.</p>
      </div>
    </div>
  );
}

export const renderDefaultProfile = (userData: UserProfileData): JSX.Element  => {
  const { userName, email, website, location, bio } = userData;
  return (
    <div>
      <h2>User Profile</h2>
      <form>
        <div>
          <div className="unl-user-profile-user-details">Name</div>
          <input type="text" defaultValue={userName} placeholder="Name" />
          <p>
            Your name as it appears where you contribute or are mentioned. You can remove it
            at any time.
          </p>
        </div>
        <div className="unl-user-profile_user-details">
          <div>Email</div>
          <input type="text" defaultValue={email} placeholder="Name" />
        </div>
        <div className="unl-user-profile_user-details">
          <div>About Me</div>
          <textarea
            placeholder="Here's a chance to tell others about yourself"
            defaultValue={bio}
            cols="110"
          />
        </div>
        <div className="unl-user-profile_user-details">
          <div>Personal URL</div>
          <input type="text" defaultValue={website} />
        </div>
        <div className="unl-user-profile_user-details">
          <div>Location</div>
          <input type="text" defaultValue={location} />
        </div>
        <div className="unl-user-profile_user-details">
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
}
