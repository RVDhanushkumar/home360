import Footer from "@/components/footer";
import Header from "@/components/header";
import "../ac/ac.css";

export default function Plumber() {
    return (
        <div className="service-container">
            <Header />
            <section className="hero-section">
                <div className="hero-text">
                    <h1>Reliable Plumbing Services</h1>
                    <p>Expert plumbing solutions for leak repairs, pipe installations, and more.</p>
                </div>
                <img src="https://wallpaperaccess.com/full/2491129.jpg" alt="Plumbing Service" className="hero-image" />
            </section>

            <section className="service-details">
                <h2>Why Choose Our Plumbing Services?</h2>
                <div className="details-container">
                    <div className="detail-card">
                        <img src="https://th.bing.com/th/id/OIP.7FkXUfhHfhXP8yh2aBgrawHaEK?rs=1&pid=ImgDetMain" alt="Pipe Installation" />
                        <h3>Pipe Installation</h3>
                        <p>Get new pipes installed professionally for long-lasting durability.</p>
                    </div>

                    <div className="detail-card">
                        <img src="https://th.bing.com/th/id/OIP.RZDVDe_o6WsWWHl18gemkAHaE7?rs=1&pid=ImgDetMain" alt="Leak Repair" />
                        <h3>Leak Repair</h3>
                        <p>Fix leaky taps, pipes, and other plumbing issues with our quick repair service.</p>
                    </div>

                    <div className="detail-card">
                        <img src="https://th.bing.com/th/id/OIP.Q5cGUWcVWsjc3BVUtQVu9AHaEK?rs=1&pid=ImgDetMain" alt="Bathroom Repair" />
                        <h3>Bathroom & Kitchen Repairs</h3>
                        <p>We fix clogged drains, water pressure issues, and plumbing-related faults.</p>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="pricing">
                <h2>Service Pricing</h2>
                <div className="pricing-container">
                    <div className="pricing-card">
                        <h3>Basic Repair</h3>
                        <p>₹299 - ₹799</p>
                        <span>Leak fixes, minor pipe repairs.</span>
                    </div>

                    <div className="pricing-card">
                        <h3>Advanced Repair</h3>
                        <p>₹1,499</p>
                        <span>Drain cleaning, complete plumbing inspection.</span>
                    </div>

                    <div className="pricing-card">
                        <h3>Full Renovation</h3>
                        <p>₹4,999</p>
                        <span>Complete bathroom & kitchen plumbing overhaul.</span>
                    </div>
                </div>
            </section>

            {/* Booking CTA */}
            <section className="booking">
                <h2>Need Plumbing Help? Book Now!</h2>
                <button className="book-now">Get a Plumber</button>
            </section>

            <Footer />
        </div>
    );
}
