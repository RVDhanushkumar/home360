import Head from "next/head";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import pic1 from "../assets/image.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Home 360 - Professional Home Services | AC, Plumbing, Electricians &
          More
        </title>
        <meta
          name="description"
          content="Home 360 offers professional home services, including AC repair, plumbing, electricians, water purifier services, and more. Book online now!"
        />
        <meta
          name="keywords"
          content="Home Services, AC Repair, Plumbing, Electricians, Water Purifier, Home Maintenance, Home Cleaning, Driver on Demand, Washing Machine Repair, Refrigerator Repair, Service Providers"
        />
        <meta name="author" content="Home 360" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Home 360 - Professional Home Services"
        />
        <meta
          property="og:description"
          content="Where Luxury Meets Convenience - Your Home, Our Priority. Get top-notch home services at your doorstep."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://porfolio-dk13.vercel.app/" />
        <meta
          property="og:image"
          content="https://yourwebsite.com/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Home 360 - Professional Home Services"
        />
        <meta
          name="twitter:description"
          content="Get reliable and professional home services at your convenience. AC repair, plumbing, electricians, and more."
        />
        <meta
          name="twitter:image"
          content="https://yourwebsite.com/twitter-image.jpg"
        />
        <link rel="canonical" href="https://yourwebsite.com" />
      </Head>
      <Header />
      <div className="firstsection">
        <div className="mainhead">
          <h1>Home 360</h1>
          <p>Where Luxury Meets Convenience - Your Home, Our Priority.</p>
          <Link href="contact">
            <div className="btn">
              <div className="contactbtn">Contact us</div>
            </div>
          </Link>
        </div>
        <div className="mainimg">
          <Image
            src="https://www.serviceonwheel.com/images/banner-clean.png"
            height={400}
            width={300}
            alt="mainpic"
          ></Image>
        </div>
      </div>
      <div className="searchbar">
        <div className="sel">
          <select defaultValue="">
            <option value="">Choose a Category</option>
            <option value="home-services">Home Services</option>
            <option value="cleaning">Cleaning</option>
            <option value="plumbing">Plumbing</option>
            <option value="security">Security</option>
          </select>
        </div>
        <div className="inp">
          <input type="text" placeholder="Enter location..." />
        </div>
        <button className="search-btn">Search</button>
      </div>

      <div className="sensection">
        <div
          style={{ display: "grid", placeContent: "center", margin: "60px" }}
        >
          <h2>Types of services</h2>
        </div>
        <div className="typesofservice">
          <Link href="/services/ac">
            <div className="serv">
              <Image
                src="https://www.serviceonwheel.com/uploads/service/530771670303201.png"
                width={100}
                height={100}
                alt="pic"
              ></Image>
              <p>Air Conditioner</p>
            </div>
          </Link>
          <Link href="/services/waterpurifier">
            <div className="serv">
              <Image
                src="https://www.serviceonwheel.com/uploads/service/578261670309501.png"
                width={100}
                height={100}
                alt="pic"
              ></Image>
              <p>Water purifier</p>
            </div>
          </Link>
          <Link href="/services/plumber">
            <div className="serv">
              <Image
                src="https://www.serviceonwheel.com/uploads/service/463041670415979.png"
                width={100}
                height={100}
                alt="pic"
              ></Image>
              <p>Plumber</p>
            </div>
          </Link>
          <Link href="/services/driver">
            <div className="serv">
              <Image
                src="https://www.serviceonwheel.com/uploads/service/305571670412648.png"
                width={100}
                height={100}
                alt="pic"
              ></Image>
              <p>Driver on Demand</p>
            </div>
          </Link>
          <Link href="/services/refrig">
            <div className="serv">
              <Image
                src="https://www.serviceonwheel.com/uploads/service/793741670309606.png"
                width={100}
                height={100}
                alt="pic"
              ></Image>
              <p>Refrigerator</p>
            </div>
          </Link>
          <Link href="/services/washing">
            <div className="serv">
              <Image
                src="https://www.serviceonwheel.com/uploads/service/251981670309575.png"
                width={100}
                height={100}
                alt="pic"
              ></Image>
              <p>Washing Machine</p>
            </div>
          </Link>
        </div>
        <div
          style={{ display: "grid", placeContent: "center", margin: "60px" }}
        >
          <h2>How to Use?</h2>
        </div>
        <div className="howitworks">
          <div className="hiw">
            <Image
              src="https://www.serviceonwheel.com/images/hstep1.png"
              width={100}
              height={100}
              alt="pic"
            ></Image>
            <div className="hiwmini">
              <h3>Step 1</h3>
              <p>Book Online or Phone</p>
            </div>
          </div>
          <div className="hiw">
            <Image
              src="https://www.serviceonwheel.com/images/hstep2.png"
              width={100}
              height={100}
              alt="pic"
            ></Image>
            <div className="hiwmini">
              <h3>Step 2</h3>
              <p>Get Booking Details Via SMS</p>
            </div>
          </div>
          <div className="hiw">
            <Image
              src="https://www.serviceonwheel.com/images/hstep3.png"
              width={100}
              height={100}
              alt="pic"
            ></Image>
            <div className="hiwmini">
              <h3>Step 3</h3>
              <p>Pay After Work is Done</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", placeContent: "center", height: "90vh" }}>
        <div
          style={{
            display: "grid",
            placeContent: "center",
            marginBottom: "30px",
          }}
        >
          <h2>Testimonials</h2>
        </div>
        <div className="testimonials">
          <div className="testi">
            <div className="info">
              <Image
                src="https://www.serviceonwheel.com/uploads/homereview/399411671172940.jpg"
                height={100}
                width={100}
                alt="pic"
                style={{ borderRadius: "50%" }}
              ></Image>
              <div style={{ padding: "20px" }}>
                <h2>Sneha</h2>
                <p>Service Rated⭐5.0</p>
              </div>
            </div>
            <div className="desc">
              <p>
                I purchased Lg split air conditioner from a local shop but not
                getting timely air conditioning installation service.searched
                air conditioning companies.and called Service on wheel
                technician.they offered and completed Ac installation service at
                reasonable cost.
              </p>
            </div>
          </div>
          <div className="testi">
            <div className="info">
              <Image
                src="https://www.serviceonwheel.com/uploads/homereview/467301671172983.jpg"
                height={100}
                width={100}
                alt="pic"
                style={{ borderRadius: "50%" }}
              ></Image>
              <div style={{ padding: "20px" }}>
                <h2>Ram </h2>
                <p>Service Rated⭐5.0</p>
              </div>
            </div>
            <div className="desc">
              <p>
                Only 5 stars?! if I could give Service on wheel 10 stars I
                would. My new home had some real issues, and local electricians
                in Ahmedabad. went above-and-beyond to resolve them all. He was
                generous with his time and knowledge. I found him to be honest
                and trustworthy, and Im very pleased with his work. Will
                definitely use him again if needed.
              </p>
            </div>
          </div>
          <div className="testi">
            <div className="info">
              <Image
                src="https://www.serviceonwheel.com/uploads/homereview/319051671173434.jpg"
                height={100}
                width={100}
                alt="pic"
                style={{ borderRadius: "50%" }}
              ></Image>
              <div style={{ padding: "20px" }}>
                <h2>Anjali</h2>
                <p>Service Rated⭐4.9</p>
              </div>
            </div>
            <div className="desc">
              <p>
                I had a wonderful experience of beauty salon service at home in
                Bhopal. Service quality is comparable to top salons in metros.
                Key thing is the personal attention from the owners. Nisha
                really understands your needs. Nice and good experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="location">
        <div
          style={{ display: "grid", placeContent: "center", margin: "20px" }}
        >
          <h2>Our Location</h2>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33328.08404962139!2d83.42606439640673!3d17.922545719129158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3957d4fa6ccb81%3A0x7a22fff24f2a6120!2sArise%20Companies%20Pest%20and%20Home%20care!5e0!3m2!1sen!2sin!4v1741114298931!5m2!1sen!2sin"
          width="750"
          height="400"
          style={{ border: "0", borderRadius: "10px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="animation">
        <h2>Home 360</h2>
      </div>
      <div
        style={{
          opacity: 0,
          position: "absolute",
          bottom: "0",
          zIndex: "-100",
        }}
      >
        <h2>Wikipedia Links</h2>
        <ul>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/Next.js"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </a>
          </li>
          <li>
            <a
              href="https://en.wikipedia.org/wiki/React_(software)"
              target="_blank"
              rel="noopener noreferrer"
            >
              React.js
            </a>
          </li>
          
          <li>
            <Link href="/services/web-development">Web Development</Link>
          </li>
          <li>
            <Link href="/services/mobile-apps">Mobile Apps</Link>
          </li>
          <li>
            <Link href="/services/seo">SEO Optimization</Link>
          </li>
          <li>
            <Link href="/services/cloud-computing">Cloud Computing</Link>
          </li>
          <li>
            <Link href="/services/ui-ux">UI/UX Design</Link>
          </li>
          <li>
            <Link href="/services/data-science">Data Science</Link>
          </li>
          <li>
            <Link href="/services/machine-learning">Machine Learning</Link>
          </li>
          <li>
            <Link href="/services/artificial-intelligence">
              Artificial Intelligence
            </Link>
          </li>
          <li>
            <Link href="/services/blockchain">Blockchain Development</Link>
          </li>
          <li>
            <Link href="/services/devops">DevOps</Link>
          </li>
          <li>
            <Link href="/services/qa-testing">QA & Testing</Link>
          </li>
          <li>
            <Link href="/services/database-management">
              Database Management
            </Link>
          </li>
          <li>
            <Link href="/services/game-development">Game Development</Link>
          </li>
          <li>
            <Link href="/services/digital-marketing">Digital Marketing</Link>
          </li>
          <li>
            <Link href="/services/iot">Internet of Things (IoT)</Link>
          </li>
          <li>
            <Link href="/services/cyber-security">Cyber Security</Link>
          </li>
          <li>
            <Link href="/services/cloud-security">Cloud Security</Link>
          </li>
          <li>
            <Link href="/services/ar-vr">AR & VR Solutions</Link>
          </li>
          <li>
            <Link href="/services/software-development">
              Software Development
            </Link>
          </li>
          <li>
            <Link href="/services/consulting">IT Consulting</Link>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
