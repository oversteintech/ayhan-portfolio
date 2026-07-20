import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.join(__dirname, "..", "public", "cv.pdf");

const doc = new PDFDocument({ margin: 50, size: "A4" });
const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

const primary = "#1c1917";
const muted = "#57534e";

function heading(text) {
  doc.moveDown(0.5).fontSize(12).fillColor(primary).font("Helvetica-Bold").text(text);
  doc.moveDown(0.15).strokeColor("#c4a574").lineWidth(0.8).moveTo(50, doc.y).lineTo(545, doc.y).stroke();
  doc.moveDown(0.35);
}

function body(text) {
  doc.fontSize(9.5).fillColor("#292524").font("Helvetica").text(text, { lineGap: 2.5, width: 495 });
}

function bullet(text) {
  doc.fontSize(9.5).fillColor("#292524").font("Helvetica").text(`- ${text}`, { indent: 10, lineGap: 2.5, width: 485 });
}

doc.fontSize(20).fillColor(primary).font("Helvetica-Bold").text("Ayhan Uzundal");
doc.fontSize(11).fillColor(muted).font("Helvetica").text("Technology Business Leader | Senior Key Account Manager | Former Engineering Manager");
doc.moveDown(0.25);
doc.fontSize(9).fillColor(muted).text("Istanbul, Turkiye | ayhanuzundal@gmail.com | ayhanuzundal.com.tr | linkedin.com/in/ayhan-uzundal");

doc.moveDown(0.7);
body(
  "I bridge business and technology. Senior Key Account Manager at Huawei Enterprise, former Software Engineering Manager, Founder of AfterArtificial. 10+ years across enterprise ICT, engineering leadership, AI automation, and digital transformation."
);

heading("Key Highlights");
bullet("Senior Key Account Manager at Huawei Enterprise — ICT, AI, cloud, networking, digital transformation");
bullet("Former Software Engineering Manager leading 20+ engineers and $8M-scale programs");
bullet("Delivered EUR 5M Siemens enterprise platform with zero critical production defects");
bullet("MBA (Istanbul University) and PMP certified");
bullet("Founder of AfterArtificial; Creator of SuperGarage");

heading("Experience");
doc.fontSize(10.5).fillColor(primary).font("Helvetica-Bold").text("Huawei Enterprise — Senior Key Account Manager");
doc.fontSize(9).fillColor(muted).font("Helvetica").text("Present | Istanbul");
doc.moveDown(0.2);
bullet("Own strategic enterprise ICT relationships and solution narratives for executive stakeholders");
bullet("Translate AI, cloud, networking, and infrastructure capabilities into business outcomes");

doc.moveDown(0.35);
doc.fontSize(10.5).fillColor(primary).font("Helvetica-Bold").text("Huawei — Software Engineering Manager / Project Manager");
doc.fontSize(9).fillColor(muted).font("Helvetica").text("Nov 2024 — Transition | HarmonyOS programs");
doc.moveDown(0.2);
bullet("Led 20+ engineers; owned $8M-scale multi-regional delivery");
bullet("Built AI-assisted multilingual validation across 11 languages");

doc.moveDown(0.35);
doc.fontSize(10.5).fillColor(primary).font("Helvetica-Bold").text("Siemens — Software Engineering Tech Lead / Senior Expert");
doc.fontSize(9).fillColor(muted).font("Helvetica").text("Apr 2021 — Nov 2024 | 5G Smart Factory Platform");
doc.moveDown(0.2);
bullet("Led 10+ engineers; improved release efficiency by 50%");
bullet("Delivered EUR 5M enterprise platform with zero critical defects at release");

doc.moveDown(0.35);
doc.fontSize(10.5).fillColor(primary).font("Helvetica-Bold").text("Hepsiburada — Senior Software Quality Assurance Engineer");
doc.fontSize(9).fillColor(muted).font("Helvetica").text("Jul 2019 — Apr 2021");
bullet("Merchant platform modernization; CI/CD and API validation");

doc.moveDown(0.35);
doc.fontSize(10.5).fillColor(primary).font("Helvetica-Bold").text("Turkcell via Netas — Senior Software Engineer");
doc.fontSize(9).fillColor(muted).font("Helvetica").text("Sep 2016 — Jul 2019 | BiP & Fizy");
bullet("High-traffic telecom digital platforms; reliability and validation strategy");

doc.addPage();
heading("Ventures");
bullet("AfterArtificial — Founder, AI product platform company");
bullet("SuperGarage — Creator, AI-powered vehicle assistant");
bullet("Overstein Labs — Engineering substrate for reusable frameworks");

heading("Education & Certifications");
body("Istanbul University — MBA");
body("Duzce University — B.Sc. Computer Engineering (GPA 3.6/4.0)");
body("PMP, CSPO, PSM I, ISTQB Advanced Test Automation Engineer, ISTQB Foundation");

heading("Languages");
body("English — Fluent | Turkish — Fluent | German — Basics");

doc.end();
stream.on("finish", () => console.log(`CV generated: ${outputPath}`));
