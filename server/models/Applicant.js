const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
  jobId: { type: String, required: true },
  role: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  resumePath: { type: String },
  coverLetter: { type: String },
  portfolioUrl: { type: String },
  linkedinUrl: { type: String },
  noticePeriod: { type: String },
  relocation: { type: String },
  appliedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Applicant', applicantSchema);
