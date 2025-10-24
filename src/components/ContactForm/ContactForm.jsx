import React from "react";

export default function ContactForm() {
    const [status, setStatus] = React.useState("");
    const [sending, setSending] = React.useState(false);
    const [errors, setErrors] = React.useState({});

    async function onSubmit(e){
        e.preventDefault();
        setStatus(""); setErrors({});
        const fd = new FormData(e.currentTarget);
        const name = fd.get("name").trim();
        const email = fd.get("email").trim();
        const message = (fd.get("message")||"").trim();

        const err = {};
        if(!name) err.name = "Please enter your name.";
        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) err.email = "Enter a valid email.";
        if(message.length < 10) err.message = "Write at least 10 characters.";
        if(Object.keys(err).length){ setErrors(err); return; }

        try {
            setSending(true);
            // simulate API
            await new Promise(r=>setTimeout(r, 1200));
            setStatus(`Thanks, ${name}! Your message has been recorded.`);
            e.currentTarget.reset();
        } catch {
            setStatus("Something went wrong. Please try again.");
        } finally {
            setSending(false);
        }
    }

    return (
        <section id="contact">
            <h2>Contact</h2>
            <form id="contact-form" noValidate onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" />
                    {errors.name && <small className="err">{errors.name}</small>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" />
                    {errors.email && <small className="err">{errors.email}</small>}
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" />
                    {errors.message && <small className="err">{errors.message}</small>}
                </div>
                <button className="form-btn" disabled={sending}>
                    {sending ? "Sending…" : "Send"}
                </button>
                <p id="form-status" className="fade-in" aria-live="polite">{status}</p>
            </form>
        </section>
    );
}
