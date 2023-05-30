import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1>R3F Notes Home Page</h1>

      <button>
        <Link to='/intro'>INTRO</Link>
      </button>

      <button>
        <Link to='/drei'>DREI</Link>
      </button>
    </>
  );
}
