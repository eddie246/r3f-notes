import { Routes, Route, Navigate, Link } from 'react-router-dom';

import { Button, RootSection } from '../../components';
import OrbitControls from './1-OrbitControls';
import TransformControls from './2-TransformControls';
import PivotControlsDrei from './3-PivotControls';
import HtmlDrei from './4-Html';
import TextDrei from './5-Text';
import FloatDrei from './6-Float';
import MeshReflectorMaterialDrei from './7-MeshReflectorMaterial';

export default function Intro() {
  return (
    <>
      <Routes>
        <Route path='*' element={<Navigate to='./' />} />
        <Route path='/' element={<Root />} />
        <Route path='/orbit-controls' element={<OrbitControls />} />
        <Route path='/transform-controls' element={<TransformControls />} />
        <Route path='/pivot-controls' element={<PivotControlsDrei />} />
        <Route path='/html' element={<HtmlDrei />} />
        <Route path='/text' element={<TextDrei />} />
        <Route path='/float' element={<FloatDrei />} />
        <Route
          path='/mesh-reflector-material'
          element={<MeshReflectorMaterialDrei />}
        />
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

        {[
          'orbit-controls',
          'transform-controls',
          'pivot-controls',
          'html',
          'text',
          'float',
          'mesh-reflector-material',
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
