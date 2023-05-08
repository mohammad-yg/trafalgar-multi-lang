import SectionTitle from "@/module/shared/title/SectionTitle";
import { FC } from "react";
import Description from "./components/description/Description";
import ServiceCard from "./components/service-card/ServiceCard";
import Button from "@/module/shared/buttons/Button";
import style from "./style.module.scss";
import { useAppTranslator } from "@/module/layout/core/layoutContext";

const OurServcesSection: FC = () => {
  const appTranslator = useAppTranslator();

  const services: {
    icon: string;
    title: string;
    description: string;
  }[] = [
    {
      icon: "/media/landing/svgs/service-1.svg",
      title: "OurServcesSection.Search_doctor.Title",
      description:
        "OurServcesSection.Search_doctor.Text",
    },
    {
      icon: "/media/landing/svgs/service-2.svg",
      title: "OurServcesSection.Online_pharmacy.Title",
      description:
        "OurServcesSection.Online_pharmacy.Text",
    },
    {
      icon: "/media/landing/svgs/service-3.svg",
      title: "OurServcesSection.Consultation.Title",
      description:
        "OurServcesSection.Consultation.Text",
    },
    {
      icon: "/media/landing/svgs/service-4.svg",
      title: "OurServcesSection.Details_info.Title",
      description:
        "OurServcesSection.Details_info.Text",
    },
    {
      icon: "/media/landing/svgs/service-5.svg",
      title: "OurServcesSection.Emergency_care.Title",
      description:
        "OurServcesSection.Emergency_care.Text",
    },
    {
      icon: "/media/landing/svgs/service-6.svg",
      title: "OurServcesSection.Tracking.Title",
      description: "OurServcesSection.Tracking.Text",
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
          <SectionTitle direction="center">
            {appTranslator.translate(
              ["landing", "content"],
              "OurServcesSection.Title"
            )}
          </SectionTitle>
          <Description />
        </div>
        <div className={style.servicesWrapper}>
          {services.map((_, index) => (
            <ServiceCard
              key={index}
              icon={_.icon}
              title={appTranslator.translate(["landing", "content"], _.title)}
              description={appTranslator.translate(
                ["landing", "content"],
                _.description
              )}
            />
          ))}
        </div>
        <div className={style.buttonWrapper}>
          <Button style="hollow" className={style.button}>
            {appTranslator.translate(
              ["landing", "content"],
              "OurServcesSection.Button"
            )}
          </Button>
        </div>
      </section>
    </>
  );
};

export default OurServcesSection;
