import { Link } from 'react-router-dom';

export const Header = () => {

  return (
    <header>
      <nav>
        <Link to="/home">
         HomePage
        </Link>
        <Link to="/teachers">
          Teachers
        </Link>
        <Link to="/favorites">
          Favorites
        </Link>
      </nav>
    </header>
  );
};
