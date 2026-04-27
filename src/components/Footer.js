import Link from "next/link";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Platform: [
      { label: "Browse Courses", href: "/items" },
      { label: "About Us", href: "/about" },
      { label: "Pricing", href: "#" },
      { label: "FAQ", href: "#" },
    ],
    Resources: [
      { label: "Blog", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Community", href: "#" },
      { label: "Tutorials", href: "#" },
    ],
    Company: [
      { label: "Careers", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: FaGithub, href: "#", label: "GitHub" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          {/* Brand Column */}
          <div className="footer-brand" style={{ gridColumn: "span 2" }}>
            <Link href="/" className="nav-brand" style={{ marginBottom: "1rem" }}>
              <div className="nav-logo-box">S</div>
              <span className="nav-brand-text">SkillForge</span>
            </Link>
            <p className="footer-desc">
              Empowering learners worldwide with expert-led courses. Build
              real-world skills and advance your career with our curated
              learning paths.
            </p>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <HiOutlineMail color="var(--color-violet)" size={18} />
                <span>hello@skillforge.dev</span>
              </div>
              <div className="footer-contact-item">
                <HiOutlinePhone color="var(--color-violet)" size={18} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="footer-contact-item">
                <HiOutlineLocationMarker color="var(--color-violet)" size={18} />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '2rem', gridColumn: 'span 3' }}>
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="footer-col-title">{title}</h4>
                <ul className="footer-link-list">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="footer-link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom" style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <p className="footer-copyright">
            &copy; {currentYear} SkillForge. All rights reserved.
          </p>
          <div className="footer-socials">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="footer-social-link"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
