const express = require("express");
const cors = require("cors");
const multer = require("multer");
const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure uploads folder exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configure Multer for File Uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

// Database removed - only handling emails

// Email Transporter - Uses connectwm.team@gmail.com to send emails on behalf of team@wemurz.com
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verified transporter configuration on demand when sending emails instead of startup

// ============================================================
// Health Check API
// ============================================================
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "StartupWeb backend is blasting off! 🚀",
    timestamp: new Date().toISOString(),
  });
});

// ============================================================
// CONTACT FORM - Save to DB + Send confirmation email
// ============================================================
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, requirements } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !requirements) {
      return res.status(400).json({
        error:
          "All fields are required: name, email, phone, requirements",
      });
    }

    // Email sending logic

    // Send email to contact@programmingprophet.site
    try {
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        await transporter.sendMail({
          from: `"ProgrammingProphet Contact Form" <${process.env.EMAIL_USER}>`,
          to: "contact@programmingprophet.site",
          replyTo: email,
          subject: `New Contact Request from ${name}`,
          html: `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; color: #333333; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px;">
              <h2>New Contact Request</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Requirements:</strong><br/>${requirements}</p>
            </div>
          `,
        });
        console.log(`✅ [EMAIL SUCCESS] Contact email sent to contact@programmingprophet.site`);
      } else {
        console.log(`⚠️ [EMAIL SKIP] Missing EMAIL_USER/EMAIL_PASS in .env`);
      }
    } catch (mailErr) {
      console.error("❌ [EMAIL ERROR] Contact email failed:", mailErr.message);
    }

    res.status(201).json({ message: "Contact form submitted successfully!" });
  } catch (error) {
    console.error("[SERVER ERROR] Failed to save contact:", error);
    res.status(500).json({ error: "Failed to submit contact form" });
  }
});

// ============================================================
// JOB APPLICATION - Save to DB + Send confirmation email
// ============================================================
app.post("/api/apply", upload.single("resume"), async (req, res) => {
  try {
    const {
      jobId,
      role,
      firstName,
      lastName,
      email,
      phone,
      coverLetter,
      portfolioUrl,
      linkedinUrl,
      noticePeriod,
      relocation,
    } = req.body;

    const resumePath = req.file ? req.file.filename : null;

    // Email sending logic

    // Send confirmation email to the applicant
    try {
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        await transporter.sendMail({
          from: `"WeMurz Careers" <${process.env.EMAIL_USER}>`,
          replyTo: "team@wemurz.com",
          to: email,
          subject: `Application Received — ${role} | WeMurz`,
          html: `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #e2e8f0; border-radius: 16px; overflow: hidden; border: 1px solid #1e293b;">
              <div style="background: linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%); padding: 40px 30px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700;">WeMurz Careers</h1>
                <p style="color: #94a3b8; margin: 8px 0 0; font-size: 14px;">Thank You for Applying!</p>
              </div>
              <div style="padding: 30px;">
                <h2 style="color: #ffffff; font-size: 20px; margin-bottom: 16px;">Hi ${firstName},</h2>
                <p style="color: #cbd5e1; line-height: 1.7; font-size: 15px;">
                  Thank you for applying for the <strong style="color: #60a5fa;">${role}</strong> position at WeMurz. We have successfully received your application and your resume.
                </p>
                <div style="background: #111827; border-radius: 12px; padding: 20px; margin: 20px 0; border-left: 4px solid #06b6d4;">
                  <p style="color: #94a3b8; font-size: 13px; margin: 0 0 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Application Summary</p>
                  <p style="color: #e2e8f0; font-size: 14px; margin: 4px 0;"><strong>Position:</strong> ${role}</p>
                  <p style="color: #e2e8f0; font-size: 14px; margin: 4px 0;"><strong>Applicant:</strong> ${firstName} ${lastName}</p>
                  <p style="color: #e2e8f0; font-size: 14px; margin: 4px 0;"><strong>Notice Period:</strong> ${noticePeriod || "N/A"}</p>
                </div>
                <p style="color: #cbd5e1; line-height: 1.7; font-size: 15px;">
                  Our recruiting team will carefully review your profile and we will soon reach back to you with the next steps. Please allow us a few business days to get back.
                </p>
                <p style="color: #cbd5e1; line-height: 1.7; font-size: 15px;">
                  If you have any questions in the meantime, feel free to reach out to us at <a href="mailto:team@wemurz.com" style="color: #60a5fa; text-decoration: none; font-weight: 600;">team@wemurz.com</a>.
                </p>
                <hr style="border: none; border-top: 1px solid #1e293b; margin: 24px 0;" />
                <p style="color: #64748b; font-size: 13px; line-height: 1.6; margin: 0;">
                  Best regards,<br />
                  <strong style="color: #e2e8f0;">The WeMurz Careers Team</strong><br />
                  <a href="mailto:team@wemurz.com" style="color: #60a5fa; text-decoration: none;">team@wemurz.com</a>
                </p>
              </div>
            </div>
          `,
        });
        console.log(`✅ [EMAIL SUCCESS] Job application confirmation sent to ${email}`);
      } else {
        console.log(`⚠️ [EMAIL SKIP] Missing EMAIL_USER/EMAIL_PASS in .env`);
      }
    } catch (mailErr) {
      console.error("❌ [EMAIL ERROR] Job application email failed:", mailErr.message);
    }

    res.status(201).json({ message: "Application submitted securely!" });
  } catch (error) {
    console.error("[SERVER ERROR] Failed to submit application:", error);
    res.status(500).json({ error: "Failed to submit application" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
});
