import { AppLang } from "@/module/layout/core/_model";
import { Article } from "../_models";

type Result = {
  data: Article[];
};

const getArticles: (lang: AppLang) => Result = (lang) => {
  if (lang === "en") {
    return {
      data: [
        {
          image: "/media/landing/images/article-1.jpg",
          link: "#",
          text: "In this case, the role of the health laboratory is very important to do a disease detection...",
          title: "Disease detection, check up in the laboratory",
        },
        {
          image: "/media/landing/images/article-2.jpg",
          link: "#",
          text: "Herbal medicine is very widely used at this time because of its very good for your health...",
          title: "Herbal medicines that are safe for consumption",
        },
        {
          image: "/media/landing/images/article-3.jpg",
          link: "#",
          text: "A healthy lifestyle should start from now and also for your skin health. There are some...",
          title: "Natural care for healthy facial skin",
        },
      ],
    };
  } else if (lang === "fa") {
    return {
      data: [
        {
          image: "/media/landing/images/article-1.jpg",
          link: "#",
          text: "در این صورت نقش آزمایشگاه سلامت برای تشخیص بیماری بسیار مهم است...",
          title: "تشخیص بیماری، بررسی در آزمایشگاه",
        },
        {
          image: "/media/landing/images/article-2.jpg",
          link: "#",
          text: "داروهای گیاهی در این زمان بسیار مورد استفاده قرار می گیرد زیرا برای سلامتی بسیار مفید است...",
          title: "داروهای گیاهی که برای مصرف بی خطر هستند",
        },
        {
          image: "/media/landing/images/article-3.jpg",
          link: "#",
          text: "یک سبک زندگی سالم باید از هم اکنون و همچنین برای سلامت پوست شما شروع شود. برخی از ...",
          title: "مراقبت طبیعی برای پوست سالم صورت",
        },
      ],
    };
  }
  return {
    data: [],
  };
};

export { getArticles };
