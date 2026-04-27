"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import toast from "react-hot-toast";
import {
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineChevronDown,
  HiOutlineLogout,
  HiOutlinePlusCircle,
  HiOutlineCollection,
} from "react-icons/hi";

export default function Navbar() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/items", label: "Courses" },
    { href: "/about", label: "About" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully");
      router.push("/");
    } catch {
      toast.error("Failed to logout");
    }
  };

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-inner">
          <Link href="/" className="nav-brand">
            <div className="nav-logo-box">S</div>
            <span className="nav-brand-text">SkillForge</span>
          </Link>

          <div className="nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive(link.href) ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="nav-auth">
            {user ? (
              <div className="nav-user-dropdown" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="nav-user-btn"
                >
                  <div className="nav-user-avatar">
                    {user.displayName?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase() || "U"}
                  </div>
                  <span className="nav-user-name">
                    {user.displayName || user.email?.split("@")[0]}
                  </span>
                  <HiOutlineChevronDown style={{ transform: dropdownOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                </button>

                {dropdownOpen && (
                  <div className="nav-dropdown-menu">
                    <div className="nav-dropdown-header">
                      <p style={{ fontWeight: 500, color: "var(--text-primary)", fontSize: "0.875rem" }}>
                        {user.displayName || "User"}
                      </p>
                      <p style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
                        {user.email}
                      </p>
                    </div>
                    <div style={{ padding: "0.5rem 0" }}>
                      <Link href="/items/add" className="nav-dropdown-item">
                        <HiOutlinePlusCircle size={18} /> Add Course
                      </Link>
                      <Link href="/items/manage" className="nav-dropdown-item">
                        <HiOutlineCollection size={18} /> Manage Courses
                      </Link>
                    </div>
                    <div style={{ borderTop: "1px solid var(--border-subtle)", padding: "0.5rem 0" }}>
                      <button onClick={handleLogout} className="nav-dropdown-item danger" style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer' }}>
                        <HiOutlineLogout size={18} /> Log Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/login" className="nav-link" style={{ display: 'none' }}>Log In</Link>
                <Link href="/login" className="nav-link">Log In</Link>
                <Link href="/register" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>Sign Up</Link>
              </>
            )}
          </div>
          
          <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-menu-btn">
            {mobileOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobile-menu" style={{ display: 'block', padding: '1rem', position: 'absolute', top: '100%', left: 0, right: 0 }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${isActive(link.href) ? "active" : ""}`}
              style={{ display: 'block', margin: '0.25rem 0' }}
            >
              {link.label}
            </Link>
          ))}
          {user ? (
            <div style={{ borderTop: '1px solid var(--border-subtle)', marginTop: '0.5rem', paddingTop: '0.5rem' }}>
              <Link href="/items/add" className="nav-link" style={{ display: 'block', margin: '0.25rem 0' }}>Add Course</Link>
              <Link href="/items/manage" className="nav-link" style={{ display: 'block', margin: '0.25rem 0' }}>Manage Courses</Link>
              <button onClick={handleLogout} className="nav-link" style={{ display: 'block', margin: '0.25rem 0', width: '100%', textAlign: 'left', color: 'var(--color-red)' }}>Log Out</button>
            </div>
          ) : (
            <div style={{ borderTop: '1px solid var(--border-subtle)', marginTop: '0.5rem', paddingTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
               <Link href="/login" className="btn btn-secondary">Log In</Link>
               <Link href="/register" className="btn btn-primary">Sign Up</Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
