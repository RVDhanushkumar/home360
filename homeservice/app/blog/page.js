import Head from "next/head";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "./blog.css";

export default function Blog() {
    const blogSections = [
        {
            title: "🏡 Home Maintenance Tips",
            posts: [
                { video: "https://www.youtube.com/embed/0pZBJ7aJNy0?si=hJ5LFNAe8rwzCR44", title: "DIY Home Fixes", desc: "Easy home repair tips for beginners." },
                { video: "https://www.youtube.com/embed/ewlO3A97mqU?si=RC9qyFfTbz6vVTas", title: "Plumbing Hacks", desc: "Fix minor plumbing issues without a plumber!" },
                { video: "https://www.youtube.com/embed/aojrGm7HfBs?si=5KsdDFwM8HY0AlAC", title: "Pest Control Guide", desc: "Keep your home pest-free effectively." }
            ]
        },
        {
            title: "🧹 Cleaning & Organization",
            posts: [
                { video: "https://www.youtube.com/embed/IJCEpbIHTa8?si=1z9he9KlfWMXu2JB", title: "Deep Cleaning Hacks", desc: "Best ways to deep clean your home." },
                { video: "https://www.youtube.com/embed/Ad7mZ16ACB0?si=-v1RaNite5qoT26_", title: "Decluttering Tips", desc: "Organize your space like a pro!" },
                { video: "https://www.youtube.com/embed/d0e_ldZSfds?si=hXDB2DUoC-aCqAbw", title: "Eco-Friendly Cleaning", desc: "Green cleaning methods for your home." }
            ]
        },
        {
            title: "🔌 Smart Home & Security",
            posts: [
                { video: "https://www.youtube.com/embed/WHXYlEB_QmY?si=oaOEUHCwebwuH-ob", title: "Best Smart Devices", desc: "Must-have smart gadgets for home." },
                { video: "https://www.youtube.com/embed/FcsF0pOBeaY?si=P0-7QU0cwoVsV-I1", title: "Home Security Setup", desc: "Improve home safety with tech." },
                { video: "https://www.youtube.com/embed/U5gqOwQROTg?si=FbkWK8WwDCF8xbJp", title: "Energy Efficiency Tips", desc: "Reduce electricity bills easily!" }
            ]
        }
    ];

    return (
        <div>
            <Head>
                <title>Home Services Blog | Tips & Tricks</title>
                <meta name="description" content="Discover expert home maintenance, cleaning, and smart home security tips on our blog. Learn how to keep your home in top condition!" />
                <meta name="keywords" content="home maintenance, cleaning tips, smart home, security, DIY home fixes, eco-friendly cleaning, home improvement" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <main className="blog-container">
                <h1 className="blog-title">Explore Our Home Services Blog</h1>

                {blogSections.map((section, index) => (
                    <article key={index} className="blog-section">
                        <h2 className="section-title">{section.title}</h2>
                        <div className="blog-grid">
                            {section.posts.map((post, idx) => (
                                <BlogCard key={idx} videoSrc={post.video} title={post.title} description={post.desc} />
                            ))}
                        </div>
                    </article>
                ))}
            </main>
            <Footer />
        </div>
    );
}

function BlogCard({ videoSrc, title, description }) {
    return (
        <div className="blog-card">
            <iframe 
                src={videoSrc} 
                title={title} 
                frameBorder="0" 
                allowFullScreen 
                loading="lazy">
            </iframe>
            <h3>{title}</h3>
            <p>{description}</p>
            <button className="read-more" aria-label={`Read more about ${title}`}>Read More</button>
        </div>
    );
}
