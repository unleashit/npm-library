import React from 'react';

interface ProfileBodyProps {
    navigateTab?: (val: string) => void;
}
function ProfileBody({navigateTab}: ProfileBodyProps): React.ReactElement {
  console.log(navigateTab ? navigateTab.toString() : '');
  return <div>profile body</div>;
}

export default ProfileBody;
