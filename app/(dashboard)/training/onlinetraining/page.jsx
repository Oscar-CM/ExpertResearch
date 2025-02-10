// pages/training.js
import React from "react";

const Training = () => {
  const steps = [
    {
      title: "1. Initial Consultation & Enrollment",
      description:
        "Brief introduction call or form submission to understand the learner's goals and experience level. Confirmation of training schedule and package selection (beginner, intermediate, or advanced).",
    },
    {
      title: "2. Onboarding & Course Access",
      description:
        "Introduction to the course structure, objectives, and tools used during the training (e.g., Google Docs, video conferencing platforms). Instructions for accessing course materials and communication platform.",
    },
    {
      title: "3. Interactive Training Sessions",
      description: "Step-by-step modules: Basics, Hands-On Practice, and Advanced Techniques.",
    },
    {
      title: "4. Assignments & Feedback",
      description:
        "Regular practical tasks for learners to apply skills, with detailed personalized feedback to highlight strengths and areas for improvement.",
    },
    {
      title: "5. Q&A and One-on-One Mentorship",
      description:
        "Dedicated sessions to address specific challenges learners face. Individual support for real-world projects or client assignments.",
    },
    {
      title: "6. Certification & Portfolio Building (Optional)",
      description:
        "Completion certificate for learners, plus guidance on building a writing or transcription portfolio.",
    },
    {
      title: "7. Ongoing Support & Resources",
      description:
        "Continued access to learning materials and invitations to advanced workshops and networking events.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#3b82f6] mb-8">
          Online Writing & Transcription Training
        </h1>
        <p className="text-lg text-gray-700 text-center mb-12">
          A structured learning path to master online writing and transcription, available both in-person and online.
        </p>
        <div className="space-y-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-200"
              style={{
                borderLeft: `6px solid ${
                  index % 3 === 0
                    ? "#3b82f6"
                    : index % 3 === 1
                    ? "#23c55e"
                    : "#a755f7"
                }`,
              }}
            >
              <h2 className="text-2xl font-semibold text-[#23c55e] mb-3">
                {step.title}
              </h2>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Training;
