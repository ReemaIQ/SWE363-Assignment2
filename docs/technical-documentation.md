# Technical Documentation: Reema Al-Qahtani Portfolio

This document provides a technical overview of the portfolio website's architecture, key components, and implementation details for maintenance and future development.

---

## 1. Architecture Overview

The portfolio is a **Single-Page Application (SPA)** architecture, though implemented using purely client-side static files (HTML, CSS, JavaScript) rather than a front-end framework. All rendering and dynamic behavior occur client-side in the user's browser.

* **Technology Stack:** HTML, CSS, JavaScript.
* **Aesthetic Theme:** Dark mode with a distinct deep indigo/neon purple glow, achieved through layered CSS gradients and blending effects.

---

## 2. Key Code Deep Dive

### 2.1. Dynamic Background Magic (`styles.css`)

The distinct neon look comes from layering two invisible, fixed elements (`::before` and `::after`) *behind* the main content.

| Component | Selector | How it Works | Description |
| :--- | :--- | :--- | :--- |
| **Base Color** | `body` | `background: #0b0716;` | Sets the main dark background color. It's the anchor (`position: relative;`) for the floating glow layers. |
| **Soft Blobs** | `body::before` | `radial-gradient()`, `filter: blur(4px);` | Creates soft, static purple and blue "blobs" using multiple radial gradients. They are positioned far off-screen (`inset: -20%`) so the edges are never visible. |
| **Silky Folds** | `body::after` | `mix-blend-mode: screen;`, `animation: folds 16s...` | Creates subtle light ribbons using `conic-gradient()`. The `screen` blend mode makes the light overlay smoothly. It's given a slow animation (`folds`) to make it look like it's gently breathing. |
| **Motion** | `@keyframes folds` | `transform: translate(...) rotate(...)` | Defines the slow, alternating animation that subtly moves and rotates the `body::after` layer for a calming motion effect. |

### 2.2. Navigation Bar (`index.html`, `styles.css`)

The navigation bar is designed to be slightly see-through.

| Component | Selector | Key Feature | Function |
| :--- | :--- | :--- | :--- |
| **Navbar** | `.navbar` | `position: fixed;`, `backdrop-filter: blur(6px);` | The **`fixed`** position keeps it at the top of the screen. The **`backdrop-filter: blur()`** is what makes it look like frosted glass (the "glassy" effect). |
| **Smooth Scroll** | `body` | `scroll-behavior: smooth;` | The links (`href="#id"`) jump to different sections, but this property on the `body` makes the jump a smooth scroll animation instead of an instant flash. |

### 2.3. Real-Time Clock & Greeting (`script.js`)

This dynamic feature uses pure **JavaScript** (no libraries!) and starts running the moment the page loads.

| Function | Method | Implementation Details |
| :--- | :--- | :--- |
| **Get Time** | `updateGreetingAndClock()` | Uses the built-in `new Date()` object to grab the current hour, minute, and second. |
| **Greeting Logic** | `if/else if/else` | Checks the hour (`now.getHours()`) to display the correct message: "Good Morning" (before 12), "Good Afternoon" (before 18), or "Good Evening." |
| **Formatting** | `padStart(2, "0")` | This is used to make sure the time looks clean by adding a leading zero to single-digit numbers (e.g., changes "5" minutes to "05"). |
| **Update Loop** | `setInterval(..., 1000)` | This crucial line tells the browser to re-run the `updateGreetingAndClock` function every **1000 milliseconds (1 second)**, keeping the clock accurate. |

### 2.4. Contact Form (`index.html`, `script.js`)

The form uses JavaScript to prevent the page from reloading, which is much better for user experience.

| Component | Selector | Implementation Details |
| :--- | :--- | :--- |
| **Form** | `<form id="contact-form" novalidate>` | The form has an ID for JavaScript to target. `novalidate` means the browser's default pop-up validation is turned off, letting our custom JavaScript handle it instead. |
| **Submission** | `addEventListener("submit", ...)` | The JS listener intercepts the form submission. The key line is `e.preventDefault()`, which stops the page refresh. |
| **Feedback** | `document.getElementById("form-status")` | A success message is written to this `<p>` tag. It checks the name field to create a **personalized "Thank you, [Name]!"** message. |
| **Reset** | `e.target.reset();` | After the message is shown, this line clears out all the text fields, preparing the form for the next message. |

---

## 3. Future Notes for Maintenance

* **CSS Style:** I tried to use a straightforward class naming method (e.g., `hero__content`) to keep styles organized.
* **Responsive Design:** The main mobile adjustments happen at the **`600px` breakpoint** in the CSS (`@media (max-width: 600px)`). If you need to fix a layout on a small phone, check that section first.
* **Dependencies:** We used **zero** outside libraries or frameworks! This makes the project extremely stable and easy to maintain over time.
