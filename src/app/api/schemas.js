const mongoose = require('mongoose');

const workExperienceSchema = new mongoose.Schema({
    company_name: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    }
});

const applicantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    skills: {
        type: [String], // Array of strings
        required: true
    },
    work_experience: {
        type: [workExperienceSchema], // Array of workExperienceSchema objects
        required: true
    }
});

export const applicant = mongoose.model('Applicants', applicantSchema);

