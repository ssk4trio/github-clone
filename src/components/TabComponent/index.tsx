import React from 'react';
import { RepoIcon } from './styles';

function TabContent() {
  return (
    <div className="content">
      <RepoIcon />
      <span className="label"> Repositories</span>
      <span className="number">12</span>
    </div>
  );
}
export default TabContent;
