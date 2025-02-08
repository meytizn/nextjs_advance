import Link from 'next/link';

async function Blog() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  let data = await response.json();
   data = data.slice(0, 10); // to use 10 posts

  return (
    <>
      <div className="w-[50%] m-auto">
        <ul>
          {data.map((item) => (
            <Link className='' key={item.id} href={`/blog/${item.id}`}>
              <li className="text-indigo-600 py-5">{item.id} - {item.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Blog;