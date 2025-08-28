import React, { useEffect, useState } from "react";

export default function Feedback() {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem("cl_feedback");
    if (raw) setEntries(JSON.parse(raw));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    if (!name || !email || !message)
      return alert("⚠️ Please complete the form.");
    setBusy(true);
    setTimeout(() => {
      const next = [{ id: Date.now(), name, email, message }, ...entries];
      setEntries(next);
      localStorage.setItem("cl_feedback", JSON.stringify(next));
      setName("");
      setEmail("");
      setMessage("");
      setBusy(false);
      alert("✅ Thank you! Feedback saved locally.");
    }, 500);
  };

  return (
    <div className="container my-5" id="feedback">
      <h3 className="fw-bold text-center mb-4">We Value Your Feedback</h3>

      {/* Feedback Form */}
      <form className="card shadow-sm p-4 mb-5" onSubmit={submit}>
        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows={5}
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button className="btn btn-warning w-100" disabled={busy} type="submit">
          {busy ? "Sending…" : "Submit Feedback"}
        </button>
      </form>

      {/* Feedback List */}
      <h5 className="fw-semibold mb-3">Recent Feedback</h5>
      {entries.length === 0 ? (
        <p className="text-muted">No feedback yet. Be the first!</p>
      ) : (
        <ul className="list-group">
          {entries.map((e) => (
            <li
              key={e.id}
              className="list-group-item"
              style={{ borderLeft: "4px solid #f0ad4e" }}
            >
              <strong>{e.name}</strong>{" "}
              <span className="text-muted">({e.email})</span>
              <div className="mt-1">{e.message}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
