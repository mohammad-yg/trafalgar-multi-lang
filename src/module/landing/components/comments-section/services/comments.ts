type Result = {
  data: {
    id: number;
    profile: string;
    name: string;
    jobPosition: string;
    comment: string;
  }[];
};

const getComments: () => Result = () => {
  return {
    data: [
      {
        id: 1,
        profile: "/media/landing/images/profile-1.png",
        comment:
          "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
        name: "Edward Newgate",
        jobPosition: "Founder Circle",
      },
      {
        id: 2,
        profile: "/media/landing/images/profile-2.jpg",
        comment:
          "Our innovative technology platform streamlines the process and allows for efficient collaboration between healthcare providers and patients.",
        name: "Fairydust Connor",
        jobPosition: "Engineering",
      },
      {
        id: 3,
        profile: "/media/landing/images/profile-3.jpg",
        comment:
          "With our user-friendly mobile app, you can access your health information from anywhere, at any time, and stay connected with your healthcare team.",
        name: "Casper Greenway",
        jobPosition: "Decorating",
      },
      {
        id: 4,
        profile: "/media/landing/images/profile-4.jpg",
        comment:
          "Our patient engagement app uses advanced analytics to help healthcare providers identify patterns and trends in patient data, leading to more accurate diagnoses and better treatment outcomes.With our platform, patients can securely share their health information with family members or other caregivers, ensuring continuity of care and peace of mind.",
        name: "Matt Torrance",
        jobPosition: "Entertainment",
      },
      {
        id: 5,
        profile: "/media/landing/images/profile-5.jpg",
        comment:
          "Our innovative telemedicine solution allows patients to connect with healthcare providers remotely, making healthcare more accessible and convenient for all. Our patient engagement solution is designed to improve patient satisfaction, boost engagement, and ultimately improve health outcomes for al",
        name: "Georgina Torrance",
        jobPosition: "Torrance",
      },
    ],
  };
};

export { getComments };
