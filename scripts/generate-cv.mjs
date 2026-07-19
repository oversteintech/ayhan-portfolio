import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, "..", "public", "cv.pdf");

const MARGIN = 50;
const PAGE_WIDTH = 595.28;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN * 2;

const doc = new PDFDocument({ margin: MARGIN, size: "A4" });
const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

const primary = "#1e3a5f";
const muted = "#4b5563";
const bodyColor = "#1f2937";

function ensureSpace(height = 60) {
  if (doc.y + height > doc.page.height - MARGIN) {
    doc.addPage();
  }
}

function heading(text) {
  ensureSpace(40);
  doc.moveDown(0.5).fontSize(12).fillColor(primary).font("Helvetica-Bold").text(text);
  doc
    .moveDown(0.15)
    .strokeColor("#3b82f6")
    .lineWidth(0.8)
    .moveTo(MARGIN, doc.y)
    .lineTo(PAGE_WIDTH - MARGIN, doc.y)
    .stroke();
  doc.moveDown(0.35);
}

function body(text, options = {}) {
  ensureSpace();
  doc.fontSize(9.5).fillColor(bodyColor).font("Helvetica").text(text, {
    width: CONTENT_WIDTH,
    lineGap: 3,
    ...options,
  });
}

function bullet(text) {
  ensureSpace();
  doc.fontSize(9.5).fillColor(bodyColor).font("Helvetica").text(`- ${text}`, {
    width: CONTENT_WIDTH,
    indent: 12,
    lineGap: 3,
  });
}

function roleTitle(company, role) {
  ensureSpace(50);
  doc.fontSize(10.5).fillColor(primary).font("Helvetica-Bold").text(`${company} - ${role}`);
}

function roleMeta(text) {
  doc.fontSize(9).fillColor(muted).font("Helvetica").text(text, {
    width: CONTENT_WIDTH,
    lineGap: 2,
  });
  doc.moveDown(0.25);
}

// Header
doc.fontSize(20).fillColor(primary).font("Helvetica-Bold").text("Ayhan Uzundal");
doc
  .fontSize(11)
  .fillColor(muted)
  .font("Helvetica")
  .text("Software Engineering Manager / Project Manager / Founder @ Overstein");
doc.moveDown(0.25);
body("Istanbul, Turkiye | ayhanuzundal@gmail.com | ayhanuzundal.com.tr | linkedin.com/in/ayhan-uzundal", {
  fillColor: muted,
});

doc.moveDown(0.6);
body(
  "Software Engineering Manager with 10+ years leading enterprise-scale software delivery across telecom, e-commerce, industrial automation, and mobile platforms. Founder of Overstein, building Super Garage and reusable product infrastructure. Expertise in Agile delivery, CI/CD transformation, AI-assisted validation, and distributed team leadership."
);

heading("Key Highlights");
bullet("Led 20+ engineers across development, QA, and automation in distributed Turkey-China organizations");
bullet("Owned USD 8M-scale and EUR 5M-scale delivery programs from roadmap to production release");
bullet("Founded Overstein; building Super Garage as first AI-powered mobile product");
bullet("Built AI-assisted multilingual validation framework across 11 languages");
bullet("Conducted 50+ technical interviews; delivered releases with no major production incidents");

heading("Founder & Products");

roleTitle("Overstein", "Founder");
roleMeta("Technology company | Mobile products & reusable app infrastructure");
bullet("Founded Overstein to build scalable mobile products with enterprise-grade engineering discipline");
bullet("Developing reusable platform: auth, membership, AI services, notifications, localization, analytics");
bullet("Combining corporate delivery experience with startup-style product execution");

doc.moveDown(0.35);
roleTitle("Super Garage", "First Product (Overstein)");
roleMeta("AI-powered vehicle assistant | Flutter, Firebase, Mobile");
bullet("Smart reminders, maintenance tracking, expense management, and marketplace integration");
bullet("Live vehicle data and premium mobile user experience");
bullet("First consumer product validating Overstein platform vision");

heading("Work Experience");

roleTitle("Huawei", "Software Engineering Manager / Project Manager");
roleMeta("Nov 2024 - Present | HarmonyOS Mobile OS New Version Project v6.0-v7.0");
bullet("Led 20+ engineers across software development, QA, and automation");
bullet("Owned USD 8M-scale multi-regional delivery program from roadmap to production release");
bullet("Established KPI/OKR-driven engineering governance");
bullet("Built AI-assisted multilingual validation framework across 11 languages");
bullet("Reduced manual validation from ~39 hours to a few hours per cycle");

doc.moveDown(0.35);
roleTitle("Siemens", "Software Engineering Tech Lead");
roleMeta("Apr 2021 - Nov 2024 | 5G Smart Factory Network Management Platform");
bullet("Led 10+ member team across Development, Quality Engineering, and DevOps");
bullet("Built CI/CD-integrated pipelines, improving release efficiency by 50%");
bullet("Delivered EUR 5M enterprise platform with zero critical production defects at release");

doc.moveDown(0.35);
roleTitle("Hepsiburada", "Senior Software Engineer");
roleMeta("Jul 2019 - Apr 2021 | Merchant Platform Transformation");
bullet("Contributed to modernization from legacy to microservices architecture");
bullet("Designed validation strategies for listing, catalog, and order workflows");

doc.moveDown(0.35);
roleTitle("Turkcell via Netas", "Senior Software Engineer");
roleMeta("Sep 2016 - Jul 2019 | BiP & Fizy Platforms");
bullet("Contributed to large-scale telecom digital platforms under high traffic");
bullet("Supported API and backend engineering initiatives improving release stability");

doc.addPage();

heading("Technical Skills");
body("Engineering: KPI/OKR, Agile, Scrum, Kanban, Release Governance, CI/CD, DevOps");
body("Programming: Java, Python, JavaScript, SQL, REST APIs, Microservices, Flutter");
body("Cloud & DevOps: Docker, Kubernetes, Azure, Huawei Cloud, Google Cloud, Jenkins, GitLab CI");
body("Quality & Automation: Selenium, Appium, Playwright, RestAssured, API Testing");
body("Observability: Grafana, Prometheus, Kibana | Data: PostgreSQL, MongoDB, Redis, Elasticsearch");

heading("Education");
body("MBA");
body("B.Sc. Computer Engineering");
body(
  "Certifications: PMP, CSPO, PSM I, ISTQB Advanced Test Automation Engineer, ISTQB Foundation Level, TUBITAK Enterprising and Business Management, MUSIAD Businessman and Enterprising, Leadership and Business Management"
);
body("Languages: English - Fluent | Turkish - Fluent | German - Basics");

doc.end();

stream.on("finish", () => {
  console.log(`CV generated: ${outputPath}`);
});
