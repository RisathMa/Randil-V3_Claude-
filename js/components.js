/* ============================================
   INDUSARANI - SHARED COMPONENTS (components.js)
   Include this in all pages BEFORE main.js
   ============================================ */

const SITE_NAME   = "Indusarani Montessori House & Daycare Center";
const SITE_PHONE  = "+94 71 190 1190";
const SITE_TEL    = "tel:+94711901190";
const SITE_WA     = "https://wa.me/94711901190";
const SITE_EMAIL  = "chanaka1978s@gmail.com";
const SITE_EMAIL2 = "prasadiapsara1978@gmail.com";
const SITE_ADDR   = "No.10/A Courts Lane, Gampaha, Sri Lanka";
const SITE_FB     = "https://www.facebook.com/IdusaraniMontessoriHouse";
const SITE_FB2    = "https://www.facebook.com/daycareindusarani";
const SITE_IG     = "https://www.instagram.com/indusarani_daycare_";

const NAV_LINKS = [
  { href: "index.html",      label: "Home" },
  { href: "about.html",      label: "About Us" },
  { href: "programs.html",   label: "Programs" },
  { href: "gallery.html",    label: "Gallery" },
  { href: "events.html",     label: "Events" },
  { href: "admissions.html", label: "Admissions" },
  { href: "contact.html",    label: "Contact" },
];

function renderHeader() {
  const navHTML = NAV_LINKS.map(l =>
    `<a href="${l.href}" class="nav-link">${l.label}</a>`
  ).join('');
  const mobileNavHTML = NAV_LINKS.map(l =>
    `<a href="${l.href}" class="nav-link">${l.label}</a>`
  ).join('');

  return `
  <header id="site-header">
    <div class="container">
      <div class="header-inner">
        <a href="index.html" class="logo">
          <div class="logo-icon">🌱</div>
          <div class="logo-text">
            <span class="logo-name">Indusarani</span>
            <span class="logo-sub">Montessori & Daycare</span>
          </div>
        </a>
        <nav class="nav-menu" aria-label="Main navigation">
          ${navHTML}
        </nav>
        <div class="nav-actions">
          <a href="${SITE_TEL}" class="nav-phone" aria-label="Call us">
            📞 ${SITE_PHONE}
          </a>
          <a href="admissions.html" class="btn btn-primary btn-sm">Enroll Now</a>
        </div>
        <button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>
  <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">
    ${mobileNavHTML}
    <div class="mobile-nav-actions">
      <a href="${SITE_TEL}" class="btn btn-primary">📞 Call Now</a>
      <a href="${SITE_WA}" class="btn btn-whatsapp" target="_blank">💬 WhatsApp</a>
      <a href="admissions.html" class="btn btn-yellow">✏️ Enroll Now</a>
    </div>
  </nav>`;
}

function renderFooter() {
  return `
  <footer id="site-footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Brand -->
        <div class="footer-brand">
          <a href="index.html" class="logo">
            <div class="logo-icon">🌱</div>
            <div class="logo-text">
              <span class="logo-name">Indusarani</span>
              <span class="logo-sub">Montessori House & Daycare Center</span>
            </div>
          </a>
          <p class="footer-tagline">"Let us care for your child as ours!" — Over a decade of nurturing young minds in Gampaha, Sri Lanka.</p>
          <div class="footer-social">
            <a href="${SITE_FB}" target="_blank" aria-label="Facebook">📘</a>
            <a href="${SITE_FB2}" target="_blank" aria-label="Facebook Daycare">📗</a>
            <a href="${SITE_IG}" target="_blank" aria-label="Instagram">📸</a>
            <a href="${SITE_WA}" target="_blank" aria-label="WhatsApp">💬</a>
          </div>
        </div>
        <!-- Quick Links -->
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            ${NAV_LINKS.map(l => `<li><a href="${l.href}">→ ${l.label}</a></li>`).join('')}
          </ul>
        </div>
        <!-- Programs -->
        <div class="footer-col">
          <h4>Programs</h4>
          <ul>
            <li><a href="programs.html">→ Montessori Preschool</a></li>
            <li><a href="programs.html">→ Kindergarten</a></li>
            <li><a href="programs.html">→ Full-Day Daycare</a></li>
            <li><a href="programs.html">→ After-School Care</a></li>
            <li><a href="programs.html">→ Extracurricular Activities</a></li>
            <li><a href="admissions.html">→ Admissions 2026</a></li>
          </ul>
        </div>
        <!-- Contact -->
        <div class="footer-col">
          <h4>Contact Us</h4>
          <div class="footer-contact-item">
            <span class="icon">📍</span>
            <span>${SITE_ADDR}</span>
          </div>
          <div class="footer-contact-item">
            <span class="icon">📞</span>
            <a href="${SITE_TEL}">${SITE_PHONE}</a>
          </div>
          <div class="footer-contact-item">
            <span class="icon">✉️</span>
            <a href="mailto:${SITE_EMAIL}">${SITE_EMAIL}</a>
          </div>
          <div class="footer-contact-item">
            <span class="icon">🕐</span>
            <span>Mon – Sat: 7:00 AM – 6:00 PM</span>
          </div>
          <div style="margin-top:16px;">
            <a href="${SITE_TEL}" class="btn btn-primary btn-sm" style="margin-right:8px;">📞 Call</a>
            <a href="${SITE_WA}" class="btn btn-whatsapp btn-sm" target="_blank">💬 WhatsApp</a>
          </div>
        </div>
      </div>
      <!-- Bottom bar -->
      <div class="footer-bottom">
        <p class="footer-copy">
          © 2026 ${SITE_NAME}. All rights reserved. |
          <a href="#">Privacy Policy</a> |
          <a href="#">Terms of Use</a>
        </p>
        <button class="back-to-top" id="back-to-top" aria-label="Back to top">↑</button>
      </div>
    </div>
  </footer>`;
}

// Inject header and footer
document.getElementById('header-placeholder')?.insertAdjacentHTML('afterend', renderHeader());
const fp = document.getElementById('footer-placeholder');
if (fp) fp.outerHTML = renderFooter();
