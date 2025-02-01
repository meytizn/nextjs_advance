import Link from 'next/link';

async function Blog() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  let data = await response.json();
  // data = data.slice(0, 50); // to use 10 posts
  return (
    <>
      <div className="my-[100px] m-auto">
        <ul>
          {data.map((item) => (
            <Link key={item.id} href={`/blog/${item.id}`}>
              <li className="m-auto">{item.id} - {item.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Blog;