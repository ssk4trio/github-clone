/* eslint-disable react/function-component-definition */
import React from 'react';
import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  Tab,
} from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';
import TabContent from '../../components/TabComponent';

function Profile() {
  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />

          <TabContent />
        </div>
        <span className="line" />
      </Tab>

      <Main>
        <LeftSide>
          <ProfileData
            username="ssk4trio"
            name="Keven de Sousa Silva"
            avatarUrl="https://avatars.githubusercontent.com/u/48361908?v=4"
            followers={213}
            following={122}
            company="Bagy"
            location="Parnaiba, Piauí, Brasil "
            email="keven.sousa@bagy.com.br"
            blog="https://www.linkedin.com/in/keven-de-sousa-silva-00bb85201/"
          />
        </LeftSide>
        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>
          <Repos>
            <h2>Random Repos</h2>
            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username="ssk4trio"
                  reponame="github-clone"
                  description="Clone do Github"
                  language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                  stars={12}
                  forks={12}
                />
              ))}
            </div>
          </Repos>
          <CalendarHeading>
            Random calendar (do not represent actual data)
          </CalendarHeading>
          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;
