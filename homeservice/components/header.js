import Image from "next/image";
import "./header.css";
import Link from "next/link";


export default function Header(){
    return(
        <div className="headerMain">
            <div className="logo"><Image src="https://static.vecteezy.com/system/resources/previews/000/390/524/original/modern-company-logo-design-vector.jpg"
            alt="Description of the image for SEO"
            width={100}
            height={20}
            className="logopic"
            priority></Image></div>
            <div className="options">
                <Link href="/about"><div className="op">About us</div></Link>
                <Link href="/services"><div className="op">Services</div></Link>
                <Link href="/blog"><div className="op">Blog</div></Link>
                <Link href="/contact"><div className="op">Contact</div></Link>
                <Link href="/login"><div className="login">login</div></Link>
            </div>
        </div>
    )
}