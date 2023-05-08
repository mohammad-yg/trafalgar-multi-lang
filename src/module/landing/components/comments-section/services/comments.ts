import { AppLang } from "@/module/layout/core/_model";

type Result = {
  data: {
    id: number;
    profile: string;
    name: string;
    jobPosition: string;
    comment: string;
  }[];
};

const getComments: (lang: AppLang) => Result = (lang) => {
  if (lang === "en")
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
  else if (lang === "fa")
    return {
      data: [
        {
          id: 1,
          profile: "/media/landing/images/profile-1.png",
          comment:
            "برنامه و پورتال وب اختصاصی تعامل بیمار ما به شما امکان می دهد به اطلاعات به صورت آنی (بدون فرم خسته کننده، تماس های طولانی، یا دردسر اداری) و ایمن دسترسی داشته باشید.",
          name: "ادوارد نیوگیت",
          jobPosition: "دایره موسس",
        },
        {
          id: 2,
          profile: "/media/landing/images/profile-2.jpg",
          comment:
            "پلت فرم فناوری نوآورانه ما روند را ساده می کند و امکان همکاری کارآمد بین ارائه دهندگان مراقبت های بهداشتی و بیماران را فراهم می کند.",
          name: "پری داست کانر",
          jobPosition: "مهندسی",
        },
        {
          id: 3,
          profile: "/media/landing/images/profile-3.jpg",
          comment:
            "با اپلیکیشن موبایل کاربرپسند ما، می‌توانید از هر کجا و در هر زمان به اطلاعات سلامت خود دسترسی داشته باشید و با تیم مراقبت‌های بهداشتی خود در ارتباط باشید.",
          name: "کاسپر گرین وی",
          jobPosition: "تزئین",
        },
        {
          id: 4,
          profile: "/media/landing/images/profile-4.jpg",
          comment:
            "برنامه تعامل با بیمار ما از تجزیه و تحلیل های پیشرفته برای کمک به ارائه دهندگان مراقبت های بهداشتی برای شناسایی الگوها و روندها در داده های بیمار استفاده می کند که منجر به تشخیص های دقیق تر و نتایج درمانی بهتر می شود. با پلت فرم ما، بیماران می توانند به طور ایمن اطلاعات سلامتی خود را با اعضای خانواده یا سایر مراقبان به اشتراک بگذارند",
          name: "مت تورنس",
          jobPosition: "سرگرمی",
        },
        {
          id: 5,
          profile: "/media/landing/images/profile-5.jpg",
          comment:
            "راه حل نوآورانه پزشکی از راه دور ما به بیماران اجازه می دهد تا از راه دور با ارائه دهندگان مراقبت های بهداشتی ارتباط برقرار کنند و مراقبت های بهداشتی را برای همه در دسترس تر و راحت تر می کند. راه حل مشارکت بیمار ما برای بهبود رضایت بیمار، افزایش تعامل و در نهایت بهبود نتایج سلامت برای دیگران طراحی شده است",
          name: "جورجینا تورن",
          jobPosition: "تورن",
        },
      ],
    };
  else
    return {
      data: [],
    };
};

export { getComments };