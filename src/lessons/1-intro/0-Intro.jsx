import { Routes, Route, Navigate, Link } from 'react-router-dom';

import { Button, RootSection } from '../../components';

import FirstScene from './1- FirstScene';
import Animate from './2-Animate';
import OrbitControlsManual from './3-OrbitControlsManual';
import LightsIntro from './4-LightsIntro';
import CustomGeometry from './5-CustomGeometry';
import CanvasSettings from './6-CanvasSettings';

export default function Intro() {
  return (
    <>
      <Routes>
        <Route path='*' element={<Navigate to='./' />} />
        <Route path='/' element={<Root />}></Route>
        <Route path='/first-scene' element={<FirstScene />} />
        <Route path='/animate' element={<Animate />} />
        <Route
          path='/orbit-controls-manual'
          element={<OrbitControlsManual />}
        />
        <Route path='/lights-intro' element={<LightsIntro />} />
        <Route path='/custom-geometry' element={<CustomGeometry />} />
        <Route path='/canvas-settings' element={<CanvasSettings />} />
      </Routes>
    </>
  );
}

function Root() {
  return (
    <>
      <h2>Introduction to React Three Fiber</h2>

      <RootSection>
        <Button>
          <Link to='/'>Return to Home</Link>
        </Button>
        <h4>Sections:</h4>

        {[
          'first-scene',
          'animate',
          'orbit-controls-manual',
          'lights-intro',
          'custom-geometry',
          'canvas-settings',
        ].map((el) => (
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
