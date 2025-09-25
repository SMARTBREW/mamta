import Image from 'next/image';

interface BlogItem {
  id: string;
  title: string;
  date: string;
  author: string;
  image: string;
  href: string;
}

const blogs: BlogItem[] = [
  {
    id: '1',
    title: 'My Perspective on Banning or Not Banning Access to Social…',
    date: 'September 16, 2024',
    author: 'Dr. Ranjana Kumari',
    image: '/images/hero/mamta7.jpg',
    href: '#',
  },
  {
    id: '2',
    title: '“Supporting Women’s Empowerment: A Call to Action…”',
    date: 'July 08, 2024',
    author: 'Dr. Ranjana Kumari',
    image: '/images/hero/mamta3.jpg',
    href: '#',
  },
  {
    id: '3',
    title: 'Addressing Image‑Based Sexual Abuse in the Global…',
    date: 'January 31, 2022',
    author: 'PM IST',
    image: '/images/hero/mamta2.jpg',
    href: '#',
  },
];

export default function OurBlogs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Our Blogs</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 bg-gray-50 p-6 rounded-lg">
          {blogs.map((blog) => (
            <article key={blog.id} className="flex flex-col items-center text-center">
              <div className="relative w-full h-56 rounded-sm overflow-hidden mb-4">
                <Image src={blog.image} alt={blog.title} fill className="object-cover" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2 max-w-xs">{blog.title}</h3>
              <p className="text-xs text-gray-500 mb-4">{blog.date}; By {blog.author}</p>
              <a
                href={blog.href}
                className="px-4 py-2 rounded text-sm"
                style={{ backgroundColor: '#f5cd4c', color: '#000000' }}
              >
                Read More
              </a>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="px-6 py-3 rounded shadow text-sm"
            style={{ backgroundColor: '#e5e7eb', color: '#111827' }}
          >
            Read all our blogs
          </a>
        </div>
      </div>
    </section>
  );
}
