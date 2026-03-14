# Personal Portfolio Website - Blueprint

## 1. Project Overview & Architecture
A highly responsive, modern personal portfolio website showcasing experience, projects, and skills. Designed with an advanced UI/UX focusing on smooth scroll mechanics, clean typography, and striking color contrast.

**Design System (Color Palette):**
* **Base/Background:** `#353535` (Dark Gray)
* **Text/Typography:** `#FFFFFF` (White)
* **Primary/Accent:** `#FF6B01` (Vibrant Orange)

**Recommended Tech Stack:**
* **Frontend:** React.js or HTML5/Vanilla JS
* **Styling:** Tailwind CSS (Excellent for rapid, responsive UI and custom color integration)
* **Animations:** Framer Motion (if using React) or GSAP (for vanilla JS) to give it that premium, advanced feel.

---

## 2. Directory & Component Structure
```text
portfolio/
├── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js          # (Home Section)
│   │   ├── About.js
│   │   ├── Experience.js
│   │   ├── Projects.js
│   │   ├── Certifications.js
│   │   └── Contact.js
│   ├── assets/
│   │   ├── images/
│   │   │   └── profile-photo.jpg  # Attach your photo here
│   │   └── resume.pdf
│   └── styles/
│       └── globals.css      # Define custom CSS variables here

3. Section-by-Section Implementation Guide
A. Global Setup (Tailwind Configuration)
Extend your Tailwind config to seamlessly use your custom colors throughout the site:

JavaScript
theme: {
  extend: {
    colors: {
      darkGray: '#353535',
      pureWhite: '#FFFFFF',
      brandOrange: '#FF6B01',
    }
  }
}
B. Navigation Bar (Sticky Header)
UI Elements: Logo/Name on the left, navigation links on the right.

Interactivity: Links should highlight in #FF6B01 on hover. Use a hamburger menu for mobile responsiveness.

Styling: bg-darkGray/90 backdrop-blur-md for a slight glass effect as users scroll down the page.

C. Home (Hero Section)
Layout: Split-screen or CSS Grid. Left side for text, right side for the image.

Content (Left):

Greeting: "Hi, I'm [Your Name]"

Headline: "3rd-Year B.Tech AI & Data Science Student"

Sub-headline: "Specializing in AI/ML Engineering, Big Data Analytics, and Full-Stack Development."

CTAs: Two buttons. Primary solid #FF6B01 ("View Projects"), Secondary outlined in #FFFFFF ("Contact Me").

Visual (Right):

``

UI Tip: Frame your photo inside a container with a subtle #FF6B01 drop-shadow or a geometric background element to make it pop against the #353535 background.

D. About Section
Layout: Centered text or two-column text/skills layout.

Content: A brief narrative about your journey. Mention your passion for building advanced UI/UX, utilizing data analytics libraries, and solving complex problems.

Skills Grid: Create pill-shaped tags (bg-pureWhite/10 text-pureWhite border border-pureWhite/20) for your tech stack: Python, React, Supabase, Tailwind, SQL, etc. Hovering over them should outline them in #FF6B01.

E. Experience Section
Layout: A vertical timeline or sleek interactive cards.

Content to Include:

Tutor, Data Analytics Club: Detail your role mentoring juniors and providing problem statements.

Freelance/Independent Developer: Mention the mobile app developed for daily business calculations (Vegetable Stop).

F. Projects Section
Layout: CSS Grid of project cards (1 column on mobile, 2 on tablet, 3 on desktop).

Card UI: bg-[#2a2a2a] (slightly darker than base for contrast), rounded corners, subtle hover lift (hover:-translate-y-2 transition-transform).

Projects to Feature:

Department Hub Web App: Highlight the automated attendance and AI-driven performance analysis features.

Autonomous Company Intelligence Agent: Mention the 36-hour hackathon environment.

Causal Inference in Observational Data: Highlight the 24-hour hackathon data analytics work.

Web Trix Rebuild: Highlight the UI/UX focus and theme implementation.

Links: Include "Live Demo" and "GitHub" links styled in #FF6B01.

G. Certifications Section
Layout: A simple, clean list or a carousel if you have many.

Content: List course names, issuing organizations (e.g., Data Analytics, Big Data, or AI/ML courses), and dates. Add a small link icon to verify credentials.

H. Contact Section
Layout: A clean, minimal form on one side, direct contact info on the other.

Form Elements: Name, Email, Message inputs. Input fields should have a transparent background with a #FFFFFF bottom border, which turns #FF6B01 when focused.

Submit Button: Full width, background #FF6B01, text #FFFFFF.

Footer Links: GitHub, LinkedIn, Twitter/X icons.

4. Responsive & UI/UX Checklist
[ ] Ensure the layout shifts from flex-row to flex-col on mobile (md:flex-row flex-col).

[ ] Text sizes should scale (e.g., text-3xl md:text-5xl for headings).

[ ] Add smooth scrolling to html: html { scroll-behavior: smooth; }.

[ ] Ensure sufficient contrast ratio between #353535 background and #FFFFFF text.

[ ] Use padding/margins generously to let elements "breathe" (whitespace is key to premium design).