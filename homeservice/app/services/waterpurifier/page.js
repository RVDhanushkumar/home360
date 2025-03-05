import Footer from "@/components/footer";
import Header from "@/components/header";
import "../ac/ac.css";
import Image from "next/image";

export default function WaterPurifier() {
    return (
        <div className="service-container">
            <Header />
            <section className="hero-section">
                <div className="hero-text">
                    <h1>Professional Water Purifier Services</h1>
                    <p>Get expert installation, repair, and maintenance services for all types of water purifiers.</p>
                </div>
                <Image src="https://www.serviceonwheel.com/uploads/service/701241584075356.jpg" alt="Water Purifier Service" className="hero-image" style={{height:200,width:"auto"}} width={200} height={200}/>
            </section>

            {/* Service Details Section */}
            <section className="service-details">
                <h2>Why Choose Our Water Purifier Services?</h2>
                <div className="details-container">
                    <div className="detail-card">
                        <Image src="https://th.bing.com/th/id/OIP.OS_ip5mYPU6CzUGYAPrcwAHaE8?rs=1&pid=ImgDetMain" alt="Installation" loading="lazy" width={200} height={200}/>
                        <h3>Installation</h3>
                        <p>We install all types of water purifiers with professional setup and guidance.</p>
                    </div>

                    <div className="detail-card">
                        <Image src="https://th.bing.com/th/id/OIP.aZP1kZJb9S07eDfmVbl7LwHaE8?rs=1&pid=ImgDetMain" alt="Repair" loading="lazy" width={200} height={200}/>
                        <h3>Repair</h3>
                        <p>Facing issues with your purifier? Our experts diagnose and fix all problems efficiently.</p>
                    </div>

                    <div className="detail-card">
                        <Image src="https://i.ytimg.com/vi/YLGGBxLITtw/maxresdefault.jpg" alt="Maintenance" loading="lazy" width={200} height={200}/>
                        <h3>Maintenance</h3>
                        <p>Ensure clean and safe drinking water with our regular maintenance services.</p>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="pricing">
                <h2>Service Pricing</h2>
                <div className="pricing-container">
                    <div className="pricing-card">
                        <h3>Basic Service</h3>
                        <p>₹499</p>
                        <span>Filter cleaning, minor leak fixes.</span>
                    </div>

                    <div className="pricing-card">
                        <h3>Comprehensive Service</h3>
                        <p>₹999</p>
                        <span>Complete purification check, filter replacement.</span>
                    </div>

                    <div className="pricing-card">
                        <h3>Annual Maintenance</h3>
                        <p>₹2,499</p>
                        <span>Includes 3 periodic services & spare parts replacement.</span>
                    </div>
                </div>
            </section>

            {/* Booking CTA */}
            <section className="booking">
                <h2>Book Your Water Purifier Service Today!</h2>
                <button className="book-now">Book Now</button>
            </section>

            <Footer />
        </div>
    );
}
