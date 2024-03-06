// pages/index.js
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Next.js App</h1>
      <nav>
        <ul>
          <li>
            <Link href="/items">
              <a>Music Accessories</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
