import Link from "next/link";
import {
  HiOutlineAcademicCap,
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
    <footer className="bg-[#06060a] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                SkillForge
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              Empowering learners worldwide with expert-led courses. Build
              real-world skills and advance your career with our curated
              learning paths.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <HiOutlineMail className="w-4 h-4 text-violet-400" />
                <span>hello@skillforge.dev</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <HiOutlinePhone className="w-4 h-4 text-violet-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <HiOutlineLocationMarker className="w-4 h-4 text-violet-400" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} SkillForge. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-slate-400 hover:text-white hover:border-white/[0.12] hover:bg-white/[0.08] transition-all duration-200"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
