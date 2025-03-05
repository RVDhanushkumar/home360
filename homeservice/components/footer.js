import styles from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.downloadButtons}>
          <button>
            <Image src="https://www.serviceonwheel.com/images/img-gplay.png" alt="Google Play" width={150} height={55} />
          </button>
          <button>
            <Image src="https://www.serviceonwheel.com/images/img-appstore.png" alt="App Store" width={150} height={55} />
          </button>
        </div>
        <div className={styles.newsletter}>
          <label>Subscribe To Our Newsletter</label>
          <div>
            <input type="text" placeholder="Enter Mobile Number" />
            <button>SUBMIT</button>
          </div>
        </div>
      </div>
      <div className={styles.mainSection}>
        <div className={styles.companyInfo}>
          <h3>SERWHEE FACILITY MANAGMENT PRIVATE LIMITED</h3>
          <p>
            Service on wheel has a vision of creating happy households. Want things fixed? Just tap and relax. Service on wheel will manage it all. Solution to all your household problems is now a lot more convenient, fast and reliable.
          </p>
          <h4>Partner With Us</h4>
          <button>Join Now</button>
        </div>
        <div className={styles.links}>
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Complaints</li>
            <li>Career</li>
            <li>Privacy Policy</li>
            <li>Franchisee offer all India</li>
            <li>JOIN US AS PRIME VENDOR</li>
            <li>Terms Of Services</li>
            <li>Payment</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className={styles.cities}>
          <h4>Cities</h4>
          <p>Bettiah, Dhule, Rohtak, Bagaha, Madhyamgram, Shimla, Bhind, Pimpri-Chinchwad, Anand, Karimnagar, Amritsar, Powai Mumbai, Malegaon, Vadodara, Patna, Rourkela, Dudhrei, Thrissur</p>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.socials}>
          <h4>Follow us on</h4>
          <div>
            <span>Facebook</span>
            <span>Twitter</span>
            <span>Google+</span>
            <span>Instagram</span>
            <span>LinkedIn</span>
          </div>
        </div>
        <div className={styles.support}>
          <h4>Customer Support</h4>
          <p>8087611222</p>
        </div>
        <div className={styles.paymentOptions}>
          <h4>Payment Options</h4>
          <p>Visa, UPI, RuPay, Maestro, MasterCard, American Express</p>
        </div>
      </div>
    </footer>
  );
}