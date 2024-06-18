// models/Survey.js
const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
  name: { type: String, default: '' },
  gender: { type: String, required: true },
  yearLevel: { type: String, required: true },
  course: { type: String, required: true },
  stressFrequency: { type: String, required: true },
  stressSource: { type: String, required: true },
  copingMechanisms: [{ type: String, required: true }],
  copingEffectiveness: { type: Number, required: true },
  stressLevel: { type: String, required: true },
  professionalHelp: { type: String, required: true }
});

module.exports = mongoose.models.Survey || mongoose.model('Survey', SurveySchema);
