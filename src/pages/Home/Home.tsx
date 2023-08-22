import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='bg-red-500 '>
      <p>Home</p>
      <Link to='/register'>
        <p>Go to Register</p>
      </Link>
    </div>
  );
}
