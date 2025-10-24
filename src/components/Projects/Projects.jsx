import React from "react";
import data from "../../data/projects.json"; // exact name & case

export default function Projects() {
    return (
        <section id="projects">
            <h2>Projects</h2>

            <ul id="project-list">
                {data.map((p) => (
                    <li key={p.id} className="project-card">
                        <img
                            src={p.img}
                            alt={p.alt}
                            className="project-stickers"
                        />
                        <strong>{p.title}</strong> <br />
                        <em>({p.date} – {p.institution})</em><br />
                        {p.description}<br /><br />
                        <em>Skills:</em> {p.skills.join(" · ")}
                        <br /><br />
                    </li>
                ))}
            </ul>
        </section>
    );
}
