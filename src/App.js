import styled from 'styled-components';

import TitleCard from './components/TitleCard';
import FilterCard from './components/FilterCard';
import RoadmapCard from './components/RoadmapCard';
import FeedbackControlPanel from './components/FeedbackControlPanel';
import FeedbackCard from './components/FeedbackCard';

function App() {
  return (
    <Container>
      <Aside>
        <TitleCard />
        <FilterCard />
        <RoadmapCard />
      </Aside>
      <Main>
        <FeedbackControlPanel />
        <FeedbackCard />
      </Main>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;
