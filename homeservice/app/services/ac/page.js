import Footer from "@/components/footer";
import Header from "@/components/header";
import "./ac.css";
import Image from "next/image";

export default function Service() {
    return (
        <div className="service-container">
            <Header />
            <section className="hero-section">
                <div className="hero-text">
                    <h1>Professional Air Conditioner Services</h1>
                    <p>We provide top-quality AC installation, repair, and maintenance services to ensure a cool and comfortable environment.</p>
                </div>
                <Image src="https://www.serviceonwheel.com/uploads/service/748141670401655.jpg" alt="AC Service" className="hero-image"  width={200} height={200}/>
            </section>

            {/* Service Details Section */}
            <section className="service-details">
                <h2>Why Choose Our AC Services?</h2>
                <div className="details-container">
                    <div className="detail-card">
                        <Image src="https://www.serviceonwheel.com/uploads/service/174691672041532.jpg" alt="Installation" width={200} height={150} />
                        <h3>AC Installation</h3>
                        <p>We offer professional AC installation services for homes and offices. Our expert technicians ensure a hassle-free setup.</p>
                    </div>

                    <div className="detail-card">
                        <Image src="https://149354076.v2.pressablecdn.com/wp-content/uploads/2020/02/AC-Repair-5.jpg" alt="Repair" width={200} height={150} />
                        <h3>AC Repair</h3>
                        <p>Is your AC not cooling? We diagnose and fix all types of AC issues, ensuring your unit runs efficiently.</p>
                    </div>

                    <div className="detail-card">
                        <Image src="https://www.qualityac.com/wp-content/uploads/2017/05/residential-ac-repair-florida.jpg" alt="Maintenance" width={200} height={150} />
                        <h3>AC Maintenance</h3>
                        <p>Regular maintenance extends the lifespan of your AC and improves performance. Book a service today!</p>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="pricing">
                <h2>Service Pricing</h2>
                <div className="pricing-container">
                    <div className="pricing-card">
                        <h3>Basic Repair</h3>
                        <p>₹499 - ₹999</p>
                        <span>Includes minor fixes, gas checkup, and general cleaning.</span>
                    </div>

                    <div className="pricing-card">
                        <h3>Standard Service</h3>
                        <p>₹1,499</p>
                        <span>Includes deep cleaning, refrigerant check, and filter replacement.</span>
                    </div>

                    <div className="pricing-card">
                        <h3>Full Maintenance</h3>
                        <p>₹2,999</p>
                        <span>Includes a full AC health check, gas refilling, and performance tuning.</span>
                    </div>
                </div>
            </section>

            {/* Booking CTA */}
            <section className="booking">
                <h2>Book Your AC Service Today!</h2>
                <p>Get hassle-free AC service at your doorstep. Fast, reliable, and affordable!</p>
                <button className="book-now">Book Now</button>
            </section>

            <Footer />
        </div>
    );
}
