import React from 'react';

interface ProfileBodyProps {
  navigateTab: (val: string) => void;
  customLinks?: string[];
}

function ProfileNav({ navigateTab, customLinks = [] }: ProfileBodyProps): React.ReactElement {
  const navigationItems = ['Profile', 'Account', 'Password Reset', ...customLinks];

  return (
    <div>
      <nav className="main-navigation">
        <ul className="main-navigation__ul">
          {
            navigationItems.map((item: string): JSX.Element => {
              return (
                <li key={item}>
                  <button
                    onClick={():void => navigateTab(item)}
                    className="main-navigation__link"
                    type="button"
                  >
                    {item}
                  </button>
                </li>
              );
            })
          }
        </ul>
      </nav>
    </div>
  );
}

export default ProfileNav;
