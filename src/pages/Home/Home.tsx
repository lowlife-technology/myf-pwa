import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='items-center flex justify-center flex-1 h-screen '>
      {/* <p>Home</p>
      <Link to='/AutoPay'>AutoPay</Link> */}
      <Link to='/register'>
        <p>Go to Register</p>
      </Link>
    </div>
  );
}
