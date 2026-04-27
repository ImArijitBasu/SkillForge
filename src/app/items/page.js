"use client";

import { useState, useMemo } from "react";
import { courses, categories } from "@/lib/data";
import CourseCard from "@/components/CourseCard";
import { HiOutlineSearch, HiOutlineFilter, HiOutlineX } from "react-icons/hi";

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
    <div className="min-h-screen py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Explore Courses
          </h1>
          <p className="text-slate-400 text-lg">
            Discover {allCourses.length} courses to accelerate your career
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses by title or description..."
              className="w-full pl-12 pr-4 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/20 transition-all text-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <HiOutlineX className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Filters Row */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Category Filter */}
            <div className="flex-1">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm focus:outline-none focus:border-violet-500/50 cursor-pointer appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: "right 0.75rem center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "1.25em 1.25em",
                }}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat} className="bg-[#141420]">
                    {cat === "All" ? "All Categories" : cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div className="flex-1">
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white text-sm focus:outline-none focus:border-violet-500/50 cursor-pointer appearance-none"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: "right 0.75rem center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "1.25em 1.25em",
                }}
              >
                {priceRanges.map((range) => (
                  <option
                    key={range.value}
                    value={range.value}
                    className="bg-[#141420]"
                  >
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm font-medium hover:bg-red-500/20 transition-colors cursor-pointer flex items-center gap-2 justify-center"
              >
                <HiOutlineX className="w-4 h-4" />
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-slate-400">
            Showing{" "}
            <span className="text-white font-medium">
              {filteredCourses.length}
            </span>{" "}
            course{filteredCourses.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center mx-auto mb-5">
              <HiOutlineFilter className="w-8 h-8 text-slate-500" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              No courses found
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              Try adjusting your search or filters
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-2.5 text-sm font-medium text-white bg-violet-600 rounded-lg hover:bg-violet-500 transition-colors cursor-pointer"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
