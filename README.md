# Samrat Tech Solutions — Website

Static business website for **Samrat Tech Solutions** (vibratory machines & construction equipment dealership), ready for **GitHub Pages**.

**Planned live URL:**  
https://ashwinig2026.github.io/Samrat-Tech-Solutions/

---

## Folder structure

```
Samrat-Tech-Solutions/
├── index.html          # Home
├── about.html          # About Us
├── products.html       # Products catalog
├── gallery.html        # Gallery
├── contact.html        # Contact + quote form
├── css/style.css
├── js/main.js
├── images/             # Product photos
└── README.md
```

---

## How to publish on GitHub Pages

1. Open your empty repo: https://github.com/ashwinig2026/Samrat-Tech-Solutions
2. Upload **all files and folders** from this project to the repository root  
   (so `index.html` is at the root, not inside another folder).
3. On GitHub go to: **Settings → Pages**
4. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main** (or `master`)
   - Folder: **/ (root)**
5. Click **Save**
6. Wait 1–2 minutes, then open:  
   https://ashwinig2026.github.io/Samrat-Tech-Solutions/

### Option A — Upload via GitHub website
- Click **Add file → Upload files**
- Drag the entire contents of this folder
- Commit changes

### Option B — Upload via Git (recommended)

```bash
cd C:\Dev\Samrat-Tech-Solutions
git init
git add .
git commit -m "Initial Samrat Tech Solutions website"
git branch -M main
git remote add origin https://github.com/ashwinig2026/Samrat-Tech-Solutions.git
git push -u origin main
```

If the repo already has a remote and is empty, you can skip `git init` / `remote add` and just push from this folder after linking the remote.

---

## Preview locally

Open `index.html` in your browser, or from this folder run:

```bash
# Python
python -m http.server 8080

# then visit http://localhost:8080
```

---

## Editing content later

| What to change | Where |
|----------------|--------|
| Phone / WhatsApp / Email / Address | All HTML pages (header, footer, contact) |
| Product text | `products.html` |
| About text | `about.html` |
| Images | Replace files in `images/` (keep same filenames, or update HTML paths) |
| Colors / styling | `css/style.css` |
| Quote form email behavior | `js/main.js` |

Contact form uses **mailto** (opens the visitor’s email app). WhatsApp uses `wa.me` links. No paid hosting or form service is required.

---

## Business details currently used

- **Brand:** Samrat Tech Solutions  
- **Tagline:** Reliable vibratory equipment for construction excellence  
- **Location:** Peenya, Bangalore, Karnataka - 560090  
- **WhatsApp:** +91 81475 30380  
- **Email:** a.gangadharappa@devon.nl  
