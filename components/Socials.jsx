import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiLinkedinLine,
  
} from "react-icons/ri";

export const socialData = [
  {
    name: "YouTube",
    link: "https://www.youtube.com/@Graceofart-xe3qb",
    Icon: RiYoutubeLine,
  },
  {
    name: "Instagram",
    link: "https://instagram.com/anjali.t_763",
    Icon: RiInstagramLine,
  },
  {
    name: "Dribbble",
    link: "https://dribbble.com/trian_123",
    Icon: RiDribbbleLine,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/anjali-tripathi-0b5097278/",
    Icon: RiLinkedinLine,
  },
  {
    name: "Github",
    link: "https://github.com/anjali-0404/modern-portfolio",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
