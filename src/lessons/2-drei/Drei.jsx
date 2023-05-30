import { Routes, Route, Navigate, Link } from 'react-router-dom';

import { Button, RootSection } from '../../components';

export default function Intro() {
  return (
    <>
      <Routes>
        <Route path='*' element={<Navigate to='./' />} />
        <Route path='/' element={<Root />}></Route>
      </Routes>
    </>
  );
}

function Root() {
  return (
    <>
      <h2>React Three Drei Library</h2>

      <RootSection>
        <Button>
          <Link to='/'>Return to Home</Link>
        </Button>
        <h4>Sections:</h4>

        {[].map((el) => (
          <Button key={el}>
            <Link style={{ textTransform: 'capitalize' }} to={'./' + el}>
              {el.split('-').join(' ')}
            </Link>
          </Button>
        ))}
      </RootSection>
    </>
  );
}
