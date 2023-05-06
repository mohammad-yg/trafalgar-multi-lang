import SectionTitle from "@/module/shared/title/SectionTitle";
import { FC } from "react";
import Description from "./components/description/Description";
import ServiceCard from "./components/service-card/ServiceCard";
import Button from "@/module/shared/buttons/Button";
import style from "./style.module.scss";

const OurServcesSection: FC = () => {
  const services: {
    icon: string;
    title: string;
    description: string;
  }[] = [
    {
      icon: "/media/landing/svgs/service-1.svg",
      title: "Search doctor",
      description:
        "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    },
    {
      icon: "/media/landing/svgs/service-2.svg",
      title: "Online pharmacy",
      description:
        "Buy  your medicines with our mobile application with a simple delivery system",
    },
    {
      icon: "/media/landing/svgs/service-3.svg",
      title: "Consultation",
      description:
        "Free consultation with our trusted doctors and get the best recomendations",
    },
    {
      icon: "/media/landing/svgs/service-4.svg",
      title: "Details info",
      description:
        "Free consultation with our trusted doctors and get the best recomendations",
    },
    {
      icon: "/media/landing/svgs/service-5.svg",
      title: "Emergency care",
      description:
        "You can get 24/7 urgent care for yourself or your children and your lovely family",
    },
    {
      icon: "/media/landing/svgs/service-6.svg",
      title: "Tracking",
      description: "Track and save your medical history and health data ",
    },
  ];
  return (
    <>
      <section className={style.section}>
        <div className={style.background}>
          <img src="/media/landing/svgs/background-1.svg" alt="background" />
          <img src="/media/landing/svgs/element.svg" alt="background" />
        </div>

        <div>
          <SectionTitle direction="center">Our services</SectionTitle>
          <Description />
        </div>
        <div className={style.servicesWrapper}>
          {services.map((_, index) => (
            <ServiceCard key={index} {..._} />
          ))}
        </div>
        <div className={style.buttonWrapper}>
          <Button title="Learn more" style="hollow" className={style.button} />
        </div>
      </section>
    </>
  );
};

export default OurServcesSection;
