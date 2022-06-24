/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navigation">
      <nav className="nav">
        <Link to="/home" className="nav___link active">
          <span className="nav___text">Home</span>
        </Link>
        <Link to="/cek" className="nav___link">
          <span className="nav___text">Cek Cuaca</span>
        </Link>
      </nav>
    </div>

  );
}
