"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";
import toast from "react-hot-toast";
import { categories } from "@/lib/data";
import { HiOutlinePhotograph } from "react-icons/hi";

function AddItemForm() {
  const { user } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    title: "",
    shortDescription: "",
    fullDescription: "",
    price: "",
    category: "Web Development",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!form.title.trim()) errs.title = "Title is required";
    if (!form.shortDescription.trim()) errs.shortDescription = "Short description is required";
    if (!form.fullDescription.trim()) errs.fullDescription = "Full description is required";
    if (!form.price || isNaN(form.price) || Number(form.price) <= 0) errs.price = "Enter a valid price";
    if (!form.category) errs.category = "Select a category";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      const newCourse = {
        id: "user_" + Date.now(),
        title: form.title,
        shortDescription: form.shortDescription,
        fullDescription: form.fullDescription,
        price: parseFloat(form.price),
        category: form.category,
        image: form.image || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
        instructor: user?.displayName || "Anonymous",
        rating: 0,
        students: 0,
        duration: "TBD",
        level: "Beginner",
        specifications: [],
        addedBy: user?.uid,
      };

      const stored = localStorage.getItem("skillforge_courses");
      const existing = stored ? JSON.parse(stored) : [];
      existing.push(newCourse);
      localStorage.setItem("skillforge_courses", JSON.stringify(existing));

      toast.success("Course added successfully!");
      router.push("/items/manage");
    } catch {
      toast.error("Failed to add course");
    } finally {
      setLoading(false);
    }
  };

  const getInputStyle = (field) => {
    return errors[field] ? { borderColor: "rgba(239, 68, 68, 0.5)" } : {};
  };

  return (
    <div className="section">
      <div className="container container-sm" style={{ maxWidth: "48rem" }}>
        <h1 style={{ fontSize: "1.875rem", fontWeight: 700, color: "white", marginBottom: "0.5rem" }}>Add New Course</h1>
        <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>Fill in the details to create a new course listing.</p>

        <form onSubmit={handleSubmit} className="form-card" style={{ maxWidth: "100%", padding: "2rem" }}>
          <div className="form-group">
            <label className="form-label">Course Title *</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g., Advanced JavaScript Patterns"
              className="form-input"
              style={getInputStyle("title")}
            />
            {errors.title && <p style={{ fontSize: "0.75rem", color: "var(--color-red)", marginTop: "0.25rem" }}>{errors.title}</p>}
          </div>

          <div className="form-group">
            <label className="form-label">Short Description *</label>
            <input
              type="text"
              name="shortDescription"
              value={form.shortDescription}
              onChange={handleChange}
              placeholder="A brief overview (1-2 lines)"
              className="form-input"
              style={getInputStyle("shortDescription")}
            />
            {errors.shortDescription && <p style={{ fontSize: "0.75rem", color: "var(--color-red)", marginTop: "0.25rem" }}>{errors.shortDescription}</p>}
          </div>

          <div className="form-group">
            <label className="form-label">Full Description *</label>
            <textarea
              name="fullDescription"
              value={form.fullDescription}
              onChange={handleChange}
              placeholder="Detailed course description..."
              rows={4}
              className="form-input"
              style={{ ...getInputStyle("fullDescription"), resize: "vertical", minHeight: "100px" }}
            />
            {errors.fullDescription && <p style={{ fontSize: "0.75rem", color: "var(--color-red)", marginTop: "0.25rem" }}>{errors.fullDescription}</p>}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "1.25rem" }}>
            <div>
              <label className="form-label">Price ($) *</label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="49.99"
                step="0.01"
                min="0"
                className="form-input"
                style={getInputStyle("price")}
              />
              {errors.price && <p style={{ fontSize: "0.75rem", color: "var(--color-red)", marginTop: "0.25rem" }}>{errors.price}</p>}
            </div>
            <div>
              <label className="form-label">Category *</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="form-input"
                style={{ ...getInputStyle("category"), appearance: "none", cursor: "pointer", backgroundImage: 'url("data:image/svg+xml,%3csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3e%3cpath stroke=\'%236b7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3e%3c/svg%3e")', backgroundPosition: "right 1rem center", backgroundRepeat: "no-repeat", backgroundSize: "1.25em 1.25em", paddingRight: "2.5rem" }}
              >
                {categories.filter((c) => c !== "All").map((cat) => (
                  <option key={cat} value={cat} style={{ background: "#141420" }}>{cat}</option>
                ))}
              </select>
              {errors.category && <p style={{ fontSize: "0.75rem", color: "var(--color-red)", marginTop: "0.25rem" }}>{errors.category}</p>}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
              <HiOutlinePhotograph size={16} /> Image URL (optional)
            </label>
            <input
              type="url"
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="form-input"
              style={getInputStyle("image")}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary"
            style={{ width: "100%", padding: "1rem", marginTop: "1rem", fontSize: "1rem" }}
          >
            {loading ? "Adding Course..." : "Add Course"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function AddItemPage() {
  return (
    <ProtectedRoute>
      <AddItemForm />
    </ProtectedRoute>
  );
}
