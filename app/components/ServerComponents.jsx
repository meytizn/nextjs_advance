import Link from 'next/link';
import Basket from './ClientComponent';

async function ApiStore() {
  const response = await fetch('https://fakestoreapi.com/products');
  let data = await response.json();
  // data = data.slice(0, 50); // to use 10 posts
  return (
    <>
    <div className="w-[100%] m-auto text-center bg-yellow-300 h-[60px] text-[30px]">Server Component - Product</div>
      <div className="w-[100%] md:w-[50%] m-auto ">
        <ul>
          {data.map((item) => (
            <Link key={item.id} href={`/blog/${item.id}`}>
              <li className="m-auto">{item.id} - {item.title}    &nbsp;<span className='text-green-500 pl-[30px]'>${item.price}</span> </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ApiStore;