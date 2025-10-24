import React from "react";
import "./ProfileCard.css";

export default function ProfileCard({
                                        avatar,
                                        avatarAlt = "Avatar",
                                        name,
                                        title,
                                        about,
                                        skills = [],
                                        withTilt = true,
                                    }) {
    const cardRef = React.useRef(null);

    function handleMove(e) {
        if (!withTilt || !cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const midX = rect.width / 2;
        const midY = rect.height / 2;
        const rotateMax = 7;
        const rotateY = ((x - midX) / midX) * rotateMax;
        const rotateX = -((y - midY) / midY) * rotateMax;

        cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
    }

    function handleLeave() {
        if (cardRef.current)
            cardRef.current.style.transform = "rotateX(0) rotateY(0)";
    }

    return (
        <article
            className="rb-card"
            ref={cardRef}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            aria-label={name}
        >
            <div className="rb-card__bg" aria-hidden="true" />
            <header className="rb-card__header">
                <img className="rb-card__avatar" src={avatar} alt={avatarAlt} />
                <div className="rb-card__titlegroup">
                    <h3 className="rb-card__name">{name}</h3>
                    {title && <p className="rb-card__subtitle">{title}</p>}
                </div>
            </header>

            {about && <p className="rb-card__about">{about}</p>}

            {skills.length > 0 && (
                <ul className="rb-card__skills" aria-label="Skills">
                    {skills.map((s, i) => (
                        <li key={i} className="rb-skill">
                            {s}
                        </li>
                    ))}
                </ul>
            )}
        </article>
    );
}
