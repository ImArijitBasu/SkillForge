"use client";

import { useState, useMemo } from "react";
import { courses, categories } from "@/lib/data";
import CourseCard from "@/components/CourseCard";
import { HiOutlineSearch, HiOutlineFilter, HiOutlineX } from "react-icons/hi";
import "./items.css";

export default function ItemsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState("All");

  // Get user-added courses from localStorage
  const [userCourses, setUserCourses] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("skillforge_courses");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  const allCourses = [...courses, ...userCourses];

  const priceRanges = [
    { label: "All Prices", value: "All" },
    { label: "Under $50", value: "0-50" },
    { label: "$50 - $100", value: "50-100" },
    { label: "$100 - $150", value: "100-150" },
    { label: "Above $150", value: "150+" },
  ];

  const filteredCourses = useMemo(() => {
    return allCourses.filter((course) => {
      // Search filter
      const matchesSearch =
        searchQuery === "" ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

      // Category filter
      const matchesCategory =
        selectedCategory === "All" || course.category === selectedCategory;

      // Price filter
      let matchesPrice = true;
      if (priceRange !== "All") {
        const price = course.price;
        switch (priceRange) {
          case "0-50":
            matchesPrice = price < 50;
            break;
          case "50-100":
            matchesPrice = price >= 50 && price <= 100;
            break;
          case "100-150":
            matchesPrice = price > 100 && price <= 150;
            break;
          case "150+":
            matchesPrice = price > 150;
            break;
        }
      }

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchQuery, selectedCategory, priceRange, allCourses]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setPriceRange("All");
  };

  const hasActiveFilters =
    searchQuery || selectedCategory !== "All" || priceRange !== "All";

  return (
    <div className="section">
      <div className="container">
        {/* Header */}
        <div className="catalog-header">
          <h1 className="catalog-title">Explore Courses</h1>
          <p className="catalog-subtitle">
            Discover {allCourses.length} courses to accelerate your career
          </p>
        </div>

        {/* Search & Filters */}
        <div className="filters-section">
          {/* Search Bar */}
          <div className="search-bar-wrapper">
            <HiOutlineSearch className="search-icon" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses by title or description..."
              className="search-input"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="clear-search-btn">
                <HiOutlineX size={20} />
              </button>
            )}
          </div>

          {/* Filters Row */}
            <div className="filters-row">
            {/* Category Filter */}
            <div style={{ flex: 1 }}>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-select"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "All" ? "All Categories" : cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div style={{ flex: 1 }}>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="filter-select"
              >
                {priceRanges.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button onClick={clearFilters} className="btn-clear-filters">
                <HiOutlineX size={16} />
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="results-count">
          Showing <span>{filteredCourses.length}</span> course{filteredCourses.length !== 1 ? "s" : ""}
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="course-grid">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon-box">
              <HiOutlineFilter size={32} />
            </div>
            <h3 className="empty-title">No courses found</h3>
            <p className="empty-desc">Try adjusting your search or filters</p>
            <button onClick={clearFilters} className="btn btn-primary">
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
