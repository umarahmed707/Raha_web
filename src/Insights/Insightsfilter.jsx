import React from "react";
import { Link } from "react-router-dom";
import Insightfiltercard from '../Layouts/Insightfiltercard'
import img1 from "../assets/image/image9.png";
import img2 from "../assets/image/image5.png";
import img3 from "../assets/image/image6.png";
import img4 from "../assets/image/image7.png";
import img5 from "../assets/image/image8.png";

const blogs = [
  {
    id: 1,
    topic: "cybersecurity",
    industry: "finance",
    type: "guide",
    image: img1,
    title: "RAHA Financial Cybersecurity Guide",
    date: "Feb 5, 2024",
    description:
      "In the evolving world of finance, the impact of tariffs is significant. Companies need to respond quickly to this shifting environment.",
    Link: "/BlogArticle",
  },
  {
    id: 2,
    topic: "audit",
    industry: "regulatory",
    type: "report",
    image: img2,
    title: "The Future of the Audit Profession",
    date: "Feb 5, 2024",
    description:
      "In a world where tariffs are transforming the economic environment, the audit profession is at a crossroads.",
    link: "/BlogArticle",
  },
  {
    id: 3,
    topic: "tax",
    industry: "regulatory",
    type: "report",
    image: img3,
    title: "2023 Tax Law Changes",
    date: "Feb 5, 2024",
    description:
      "In light of recent tariff adjustments, the economic environment is evolving rapidly. Companies are faced with the need to pivot quickly.",
    link: "/BlogArticle",
  },
  {
    id: 4,
    topic: "sustainability",
    industry: "finance",
    type: "summary",
    image: img4,
    title: "Road to Sustainability",
    date: "Feb 5, 2024",
    description:
      "In the ever-evolving world of finance, businesses face a myriad of challenges and opportunities that require innovative strategies.",
    link: "/BlogArticle",
  },
  {
    id: 5,
    topic: "analytics",
    industry: "banking",
    type: "report",
    image: img5,
    title: "Compendium on Banking Analytics",
    date: "Feb 5, 2024",
    description:
      "In the dynamic realm of banking analytics, the profession stands at a pivotal moment. This changing landscape presents distinct.",
    link: "/BlogArticle",
  },
  {
    id: 6,
    topic: "analytics",
    industry: "banking",
    type: "summary",
    image: img1,
    title: "Banking Summary Key Insights",
    date: "Feb 5, 2024",
    description:
      "As the financial landscape continues to change, businesses must adapt swiftly to new challenges and opportunities.",
    link: "/BlogArticle",
  },
];

const Insightsfilter = () => {
  return (
    <div>
      <Insightfiltercard blogs={blogs} />
    </div>
  );
};

export default Insightsfilter;
