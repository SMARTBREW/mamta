import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { BLOGS } from '@/lib/constants';
import ErrorBoundary from '@/components/ui/error-boundary';

export default function OurBlogs() {
  return (
    <ErrorBoundary>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-roboto font-bold text-gray-900 mb-4">Our Blogs</h2>
          <div className="w-24 h-1 bg-mamta-primary mx-auto mb-6" />
        </div>

        
        <div className="grid md:grid-cols-3 gap-8 bg-gray-50 p-6 rounded-lg">
          {BLOGS.map((blog) => (
            <article key={blog.id} className="flex flex-col items-center text-center">
              <div className="relative w-full h-56 rounded-sm overflow-hidden mb-4">
                <Image src={blog.image} alt={blog.title} fill className="object-cover" />
              </div>
              <h3 className="text-lg font-roboto font-medium text-gray-900 mb-2 max-w-xs">{blog.title}</h3>
              <p className="text-xs font-arial text-gray-500 mb-4">{blog.date}; By {blog.author}</p>
              <Button
                onClick={() => window.open(blog.href, '_blank')}
                className="bg-mamta-primary text-white hover:bg-mamta-secondary transition-colors duration-200"
              >
                Read More
              </Button>
            </article>
          ))}
        </div>

        
        <div className="text-center mt-10">
          <Button
            onClick={() => window.open('#', '_blank')}
            className="bg-mamta-primary text-white hover:bg-mamta-secondary transition-colors duration-200"
          >
            Read all our blogs
          </Button>
        </div>
      </div>
    </section>
    </ErrorBoundary>
  );
}
