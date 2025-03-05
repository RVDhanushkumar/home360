"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function AuthPage() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="container">
      {/* Branding Section */}
      <div className="company">
        <h1>Home360</h1>
        <p>Ensuring safe and best services for your home.</p>
      </div>

      {/* Login/Signup Flip Card */}
      <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
        {/* LOGIN FORM */}
        <div className="flip-card-front">
          <h2>Login</h2>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Login</button>
          <p>
            Dont have an account?{"&apos"}
            <span onClick={() => setIsFlipped(!isFlipped)}>Sign Up</span>
          </p>

          {/* Social Login */}
          <div className="social-icons">
            <FontAwesomeIcon icon={faGoogle} className="icon google" />
            <FontAwesomeIcon icon={faFacebook} className="icon facebook" />
            <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
          </div>
        </div>

        {/* SIGNUP FORM */}
        <div className="flip-card-back">
          <h2>Sign Up</h2>
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
          <p>
            Already have an account?{" "}
            <span onClick={() => setIsFlipped(!isFlipped)}>Login</span>
          </p>

          {/* Social Login */}
          <div className="social-icons">
            <FontAwesomeIcon icon={faGoogle} className="icon google" />
            <FontAwesomeIcon icon={faFacebook} className="icon facebook" />
            <FontAwesomeIcon icon={faLinkedin} className="icon linkedin" />
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        /* General Reset */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        /* Body - Center Everything */
        body {
          font-family: 'Poppins', sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background:rgb(20, 41, 74);
          margin: 0;
        }

        /* Container */
        .container {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          width: 90%;
          max-width: 900px;
          height: 500px;
          background: #2c3e50;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(4, 4, 4, 0.15);
          overflow: hidden;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        /* Left Side - Company Info */
        .company {
          width: 40%;
          background: #2c3e50;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 30px;
          text-align: center;
        }

        h1 {
          font-size: 26px;
          font-weight: bold;
          color:rgb(233, 192, 60);
        }

        p {
          font-size: 14px;
          margin-top: 10px;
          opacity: 0.8;
        }

        /* Flip Card */
        .flip-card {
          width: 60%;
          height: 100%;
          position: relative;
          perspective: 1000px;
        }
          .flip-card-front,
        .flip-card-back {
          width: 100%;
          height: 100%;
          position: absolute;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 30px;
          color: rgb(233, 192, 60);
          transition: transform 0.5s ease-in-out;
        }

        .flip-card-front {
          background: black;
        }

        .flip-card-back {
          background: black;
          transform: rotateY(180deg);
        }

        /* Flip Animation */
        .flipped .flip-card-front {
          transform: rotateY(180deg);
        }

        .flipped .flip-card-back {
          transform: rotateY(0);
        }

        /* Input Fields */
        input {
          width: 80%;
          padding: 12px;
          margin: 8px 0;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 14px;
        }

        /* Button */
        button {
          width: 80%;
          padding: 12px;
          background: #2980b9;
          border: none;
          border-radius: 6px;
          color: white;
          font-size: 16px;
          cursor: pointer;
          font-weight: bold;
          transition: 0.3s ease-in-out;
          margin-top: 12px;
        }

        button:hover {
          background: #3498db;
        }

        /* Text Links */
        span {
          color: #2980b9;
          cursor: pointer;
          font-weight: bold;
        }

        /* Social Login Icons */
        .social-icons {
          display: flex;
          gap: 20px;
          margin-top: 12px;
        }

        .icon {
          font-size: 28px;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .icon:hover {
          transform: scale(1.15);
        }

        .google {
          color: #DB4437;
        }

        .facebook {
          color: #1877F2;
        }

        .linkedin {
          color: #0077B5;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .container {
            flex-direction: column;
            height: auto;
          }

          .company {
            width: 100%;
            padding: 40px;
          }

          .flip-card {
            width: 100%;
          }

          input, button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}