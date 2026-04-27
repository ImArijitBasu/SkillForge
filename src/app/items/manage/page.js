"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoute";
import toast from "react-hot-toast";
import { HiOutlineEye, HiOutlineTrash, HiOutlinePlusCircle } from "react-icons/hi";
import "./manage.css";

function ManageItemsContent() {
  const [courses, setCourses] = useState([]);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("skillforge_courses");
    if (stored) setCourses(JSON.parse(stored));
  }, []);

  const handleDelete = (id) => {
    const updated = courses.filter((c) => c.id !== id);
    setCourses(updated);
    localStorage.setItem("skillforge_courses", JSON.stringify(updated));
    toast.success("Course deleted");
    setDeleteId(null);
  };

  return (
    <div className="section">
      <div className="container container-sm" style={{ maxWidth: "64rem" }}>
        <div className="manage-header">
          <div>
            <h1 className="manage-title">Manage Courses</h1>
            <p className="manage-subtitle">{courses.length} course{courses.length !== 1 ? "s" : ""} added</p>
          </div>
          <Link href="/items/add" className="btn btn-primary" style={{ padding: "0.625rem 1.25rem", fontSize: "0.875rem" }}>
            <HiOutlinePlusCircle size={18} /> Add Course
          </Link>
        </div>

        {courses.length === 0 ? (
          <div className="empty-state" style={{ background: "var(--bg-surface)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-2xl)" }}>
            <div className="empty-icon-box">
              <HiOutlinePlusCircle size={32} />
            </div>
            <h3 className="empty-title">No courses yet</h3>
            <p className="empty-desc">Start by adding your first course.</p>
            <Link href="/items/add" className="btn btn-primary">
              Add Your First Course
            </Link>
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Course</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th style={{ textAlign: "right" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course) => (
                    <tr key={course.id}>
                      <td>
                        <div className="course-cell">
                          <img src={course.image} alt="" className="course-cell-img" />
                          <div>
                            <p className="course-cell-title">{course.title}</p>
                            <p className="course-cell-desc">{course.shortDescription}</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className="badge-glass badge-glass-violet" style={{ border: "none" }}>{course.category}</span>
                      </td>
                      <td style={{ fontSize: "0.875rem", color: "white" }}>${course.price}</td>
                      <td>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "0.5rem" }}>
                          <Link href={`/items/${course.id}`} className="action-btn" title="View">
                            <HiOutlineEye size={16} />
                          </Link>
                          <button onClick={() => setDeleteId(course.id)} className="action-btn danger" title="Delete">
                            <HiOutlineTrash size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="mobile-cards">
              {courses.map((course) => (
                <div key={course.id} className="mobile-card">
                  <div className="mobile-card-header">
                    <img src={course.image} alt="" className="mobile-card-img" />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p className="course-cell-title" style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{course.title}</p>
                      <p className="course-cell-desc">{course.category}</p>
                      <p className="mobile-card-price">${course.price}</p>
                    </div>
                  </div>
                  <div className="mobile-card-actions">
                    <Link href={`/items/${course.id}`} className="btn btn-secondary" style={{ flex: 1, fontSize: "0.75rem", padding: "0.5rem" }}>
                      View
                    </Link>
                    <button onClick={() => setDeleteId(course.id)} className="btn" style={{ flex: 1, fontSize: "0.75rem", padding: "0.5rem", background: "rgba(239, 68, 68, 0.06)", border: "1px solid rgba(239, 68, 68, 0.1)", color: "var(--color-red)" }}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Delete Confirmation Modal */}
        {deleteId && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3 className="modal-title">Delete Course?</h3>
              <p className="modal-desc">This action cannot be undone.</p>
              <div className="modal-actions">
                <button onClick={() => setDeleteId(null)} className="btn btn-secondary" style={{ flex: 1 }}>
                  Cancel
                </button>
                <button onClick={() => handleDelete(deleteId)} className="btn" style={{ flex: 1, background: "var(--color-red)", color: "white" }}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ManageItemsPage() {
  return (
    <ProtectedRoute>
      <ManageItemsContent />
    </ProtectedRoute>
  );
}
