import React from "react";
import "./styles.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const HomePage = () => {
  return (
    <div className="container">
        <Header />
      <section className="about-us">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            At <strong>HOME360</strong>, we bring professional and reliable home services right to your doorstep.
            Whether you need plumbing, electrical repairs, appliance maintenance, or deep cleaning, our skilled
            experts are ready to help.
            <br /><br />
            Trust <b>HOME360</b> to keep your home running smoothly—because your comfort is our priority.
          </p>
        </div>
        <div className="about-image">
          <img src="https://image.shutterstock.com/image-vector/team-workers-building-house-foreman-260nw-528760327.jpg" alt="Home Services" />
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-card"><h2><br></br>🚰Plumbing</h2><br></br>Leak repairs, pipe fittings, faucet installations, and drainage solutions.</div>
          <div className="service-card"><h2>💡Electrical Work</h2><br></br>Wiring, switchboard repairs, lighting installation, and electrical troubleshooting.</div>
          <div className="service-card"><h2>🧹Home Cleaning</h2><br></br>Deep cleaning, sofa/carpet cleaning, kitchen & bathroom sanitation.</div>
          <div className="service-card"><h2>🛠Handyman Services</h2><br></br>Minor home repairs, furniture assembly, and general maintenance.</div>
          <div className="service-card"><h2><br></br>🎨Painting</h2><br></br>Wall painting, texture design, waterproof coatings, and touch-ups</div>
          <div className="service-card"><h2>❄️AC Repair</h2><br></br>AC servicing, gas refilling, cooling issues, and filter cleaning.</div>
          <div className="service-card"><h2>🚪Carpentry</h2><br></br>Custom furniture, door/window repairs, and modular kitchen installation.</div>
          <div className="service-card"><h2>🔧Appliance Repair</h2><br></br>Washing machines, refrigerators, microwaves, and home appliance fixes.</div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        
        <div className="choose">
        
        <div className="reason">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔️ Verified & Trained Professionals</li>
          <li>✔️ 24/7 Customer Support</li>
          <li>✔️ Transparent Pricing</li>
          <li>✔️ Quick & Hassle-Free Booking</li>
          <li>✔️ 100% Customer Satisfaction Guarantee</li>
        </ul>
        </div>
        <div>
          <img id="choose-img" src="https://thumbs.dreamstime.com/b/construction-workers-uniforms-indoors-home-repair-service-147554128.jpg" alt="bgimg"></img>
        </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Get in Touch</h2>
        <p>📞 Call Us: <strong>9876543210</strong></p>
        <p>📧 Email: <strong>support@home360.com</strong></p>
        <button className="contact-btn">Book a Service</button>
      </section>
      {/* Floating Buttons */}
      <button className="chat-btn">Chat With Us</button>
      <button className="help-btn">❓ Help</button>
      <Footer />
    </div>
  );
};

export default HomePage;