import Layouts from "../../layouts/Layouts";
import PageBanner from "../../components/PageBanner";
import { getSortedPostsData } from "../../lib/posts";

export const metadata = {
  title: 'Blog - SKYXHUB',
  description: 'Read the latest articles and insights from SKYXHUB about technology, development, and innovation.',
};

// Server Component - Pure Next.js 15 App Router
export default function BlogPage() {
  // Fetch data directly in the server component
  const posts = getSortedPostsData();

  return (
    <Layouts>
      <PageBanner pageName="Blog" pageTitle="Latest Articles" />
      
      <section className="mil-p-120-60">
        <div className="container">
          <div className="row">
            {posts.map((post) => (
              <div key={post.id} className="col-lg-6 col-xl-4">
                {/* Theme post card. Not a link yet: there is no /blog/[id] route. */}
                <div className="mil-card mil-mb-60">
                  <div className="mil-cover-frame">
                    <img src={`/${post.image.replace(/^\//, "")}`} alt={post.title} />
                  </div>
                  <div className="mil-description">
                    <div className="mil-fw-descr">
                      <h4 className="mil-mb-15">{post.title}</h4>
                      <h6 className="mil-mb-15">
                        {new Date(post.date).toLocaleDateString("en", { day: "numeric", month: "short", year: "numeric" })}
                        {post.author && (
                          <>
                            {" · by "}
                            <span className="mil-accent-2">{post.author}</span>
                          </>
                        )}
                      </h6>
                      <p>{post.short}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layouts>
  );
}
