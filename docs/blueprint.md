# **App Name**: Elevate English

## Core Features:

- Homepage Content Feed: Display the most recent learning content on the homepage, categorized by type (text, image, video, link).
- Content Search and Filter: Allow users to search and filter learning materials by keywords, categories, and content types (text, image, video, link).
- Theme Toggle: Enable users to switch between a pure black and pure white theme for optimal readability in different lighting conditions.
- Admin Panel: Provide a password-protected admin panel at the /admin route for adding, editing, and deleting content.
- AI Content Suggestions: Implement an AI-powered "tool" that can suggest relevant learning materials based on the user's current content and search history. This tool will analyze the current content being viewed and provide contextual recommendations.

## Style Guidelines:

- Use a primary color palette of calming blues and greens to foster a sense of trust and learning.
- Employ a secondary color palette of light grays and whites to ensure content is easily readable and accessible.
- Accent: Use a crimson sparingly to highlight important elements and CTAs.
- Prioritize readability with clear, sans-serif fonts for body text and headings.
- Employ a clean, minimalist layout with ample white space to minimize distractions.
- Use simple, consistent icons to visually represent different content types and categories.

## Original User Request:
I want a modern, full-fledged dynamic website built using the latest frontend and serverless backend technologies (no WordPress or third-party platforms). The website is for Bangladeshi students learning English. It should support uploading and displaying tips, tricks, notes, announcements, links to documents (hosted on Google Drive, Dropbox, or Terabox), and embedding YouTube videos (no video hosting required).

💡 Key Requirements
📌 General:
No WordPress, no site builders, no third-party services
Fully custom-coded using modern JavaScript stack
Responsive design for mobile and desktop
Simple admin panel for me to post content (text, images, PDFs via links)
Support for posting updates like announcements and tips

🧠 Content Types:
Text posts with optional images
Embedded YouTube videos (not uploaded)
Links to files on Google Drive, Dropbox, etc.
Announcements section

🎨 Design:
Modern, clean, professional UI
Two switchable themes: Pure Black and Pure White (no greys)
Use elegant typography and spacing
Make it distraction-free for students

⚙️ Functionality:
Homepage with featured content or recent posts
Post categories/tags (like "Tips", "Grammar", "Vocabulary", etc.)
Search feature
Dark/light theme toggle
Optional: Filter by type (text/image/video)

🛠️ Tech Stack Suggestion:
Frontend: HTML + Tailwind CSS + Vanilla JS or React
Backend: Cloudflare Workers (for dynamic routing and content)
Database: Cloudflare KV or Durable Objects (to store posts, metadata)
Hosting: Cloudflare Pages
CMS/Admin Panel: A simple custom admin route to add/edit/delete posts (password protected)

🔐 Admin Panel:
Only for me to add posts (text, image link, document link, video embed code)
Authentication via hardcoded password in Workers
Accessible from /admin route

🧱 Site Structure Example
pgsql
Copy
Edit
/              - Homepage with latest posts
/posts         - List of all posts (searchable, filterable)
/post/:id      - Individual post view
/admin         - Admin panel to create/edit/delete posts (secure)
/about         - About the website and mission
/contact       - Simple contact form (optional)

🎯 Deployment Strategy
Use Cloudflare Pages for hosting the frontend
Use Cloudflare Workers + KV/Durable Objects for dynamic content
No need for separate server or backend
Content will be stored in the KV store as structured data (JSON)

🧰 Tools to Use
Tailwind CSS (for clean UI)
Cloudflare Workers (serverless backend logic)
Cloudflare KV (for storing text, links, metadata)
Vite or plain HTML build process
GitHub (for version control + integration with Pages)

✅ Next Step
If you’re ready, I can now:
✅ Generate the full project structure
✅ Guide you step-by-step to deploy it on Cloudflare
✅ Build both the frontend and backend
✅ Make the dark/light theme switch
✅ Create the admin panel
  