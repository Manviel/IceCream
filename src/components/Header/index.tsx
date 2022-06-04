import { JSX } from 'solid-js/jsx-runtime';
import { Link } from 'solid-app-router';

type HeaderType = {
  href?: string;
};

function Header({ href }: HeaderType): JSX.Element {
  return (
    <nav className='flex content-full justify-between'>
      <Link
        href={href ? href : '/'}
        className='link btn icon flex col'
        aria-label={href ? 'Go back' : 'Go home'}
      >
        <span className='line'></span>
        <span className='line'></span>
      </Link>

      <button className='btn'>Join Now</button>
    </nav>
  );
}

export default Header;
