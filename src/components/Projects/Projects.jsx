// src/components/Projects/Projects.jsx
import React from "react";
import data from "../../data/projects.json"; // keep your JSON as you defined earlier


import ProfileCard from "../ui/ProfileCard/ProfileCard.jsx"; // relative
import "./ProjectsGrid.css";                                  // relative


export default function Projects() {
    return (
        <section id="projects">
            <h2>Projects</h2>

            <div className="rb-grid">
                {data.map((p) => (
                    <ProfileCard
                        key={p.id}
                        avatar={p.img}
                        avatarAlt={p.alt || p.title}
                        name={p.title}
                        title={`${p.date} – ${p.institution}`}
                        about={p.description}
                        skills={p.skills}
                        withTilt={true}   // set to false if you don’t want the hover tilt
                    />
                ))}
            </div>
        </section>
    );
}
