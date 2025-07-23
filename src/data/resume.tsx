import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

interface ResumeData {
  name: string;
  initials: string;
  url: string;
  location: string;
  locationLink: string;
  description: string;
  summary: string;
  avatarUrl: string;
  skills: string[];
  navbar: { href: string; icon: any; label: string }[];
  contact: {
    email: string;
    tel: string;
    social: {
      GitHub: { name: string; url: string; icon: any; navbar: boolean };
      LinkedIn: { name: string; url: string; icon: any; navbar: boolean };
      Youtube?: { name: string; url: string; icon: any; navbar: boolean };
      email: { name: string; url: string; icon: any; navbar: boolean };
    };
  };
  work: {
    company: string;
    href: string;
    badges: any[];
    location: string;
    title: string;
    logoUrl: string;
    start: string;
    end: string;
    showDropdownIcon: boolean;
    description: JSX.Element;
  }[];
  education: {
    school: string;
    href: string;
    degree: string;
    logoUrl: string;
    start: string;
    end: string;
  }[];
  projects?: {
    title: string;
    href: string;
    dates: string;
    active: boolean;
    description: string;
    technologies: string[];
    links: { type: string; href: string; icon: JSX.Element }[];
    image: string;
    video: string;
  }[];
  blogs: {
    title: string;
    dates: string;
    description: string;
    image: string;
    links: { title: string; href: string; icon: JSX.Element }[];
  }[];
  hackathons?: {
    title: string;
    dates: string;
    location: string;
    description: string;
    image: string;
    links: { title: string; icon: JSX.Element; href: string }[];
  }[];
}

export const DATA: ResumeData = {
  name: "Saeed Ahmed",
  initials: "SA",
  url: "https://theesaeedahmed.com",
  location: "Kolkata, West Bengal, India",
  locationLink: "https://maps.app.goo.gl/sbVX5aL9g7dbCMzy6",
  description:
    "Cracked Software and Generative AI Engineer. I love building cool working stuff and helping people.",
  summary:
    "I am a final year undergraduate student at Heritage Institute of Technology with experience of about 2 years working in Full Time roles and Part-time gigs, looking for opportunities in the field of Software Engineering and Generative AI.",
  avatarUrl: "/me.png",
  skills: [
    "C",
    "C++",
    "Python",
    "React.js",
    "Next.js",
    "JavaScript",
    "Typescript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Redis",
    "Postgres",
    "Docker",
    "Kubernetes",
    "CI/CD",
    "AWS",
    "LLMs",
    "Git",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://theesaeedahmed.medium.com",
      icon: NotebookIcon,
      label: "Medium - Blogs",
    },
  ],
  contact: {
    email: "theesaeedahmed@gmail.com",
    tel: "+918100262733",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/theesaeedahmed",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/theesaeedahmed/",
        icon: Icons.linkedin,
        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://www.youtube.com/@theesaeedahmed",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "mailto:theesaeedahmed@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    // {
    //   company: "Trilogy Innovations (CodeNation)",
    //   href: "https://trilogy.com/",
    //   badges: [],
    //   location: "Remote",
    //   title: "Software Development Engineer Intern",
    //   logoUrl: "/trilogy.png",
    //   start: "December 2024",
    //   end: "February 2025",
    //   showDropdownIcon: true,
    //   description: (
    //     <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground marker:text-primary">
    //       <li>
    //         Engineered a unified deployment system enabling one-click subdomain
    //         releases artifacts with live sandbox previews.
    //       </li>
    //       <li>
    //         Implemented functionality to download AI-generated code in NextJS
    //         file structure format and run hassle-free locally.
    //       </li>
    //       <li>
    //         Architected Gemini AI integration in Social Savvy SDK for
    //         multi-modal analysis to build brand image.
    //       </li>
    //       <li>
    //         Incorporated Web Speech Synthesis API for voice chatbots, enabling
    //         AI podcasts generation using voice commands.
    //       </li>
    //       <li>
    //         Extended the UI for custom thumbnail generation for AI podcasts,
    //         ensuring brand consistency and engaging visuals.
    //       </li>
    //       <li>
    //         Utilized technologies and tools including NextJS, Python, AWS
    //         Lambda, DynamoDB, AWS CloudWatch, Gitpod, Docker, Kubernetes (EKS,
    //         ECS), Claude AI, OpenAI, Perplexity AI, Gemini AI, Eleven Labs, and
    //         CI/CD pipelines.
    //       </li>
    //       <li>
    //         Contributed in https://protosmith.ai/ and
    //         https://social-savvy.ti.trilogy.com/
    //       </li>
    //     </ul>
    //   ),
    // },
  ],
  education: [
    {
      school: "Heritage Institute of Technology",
      href: "https://www.heritageit.edu",
      degree: "Bachelor's of Technology in Computer Science and Engineering",
      logoUrl: "/hit.png",
      start: "2021",
      end: "2025",
    },
  ],

  projects: [
    // {
    //   title: "Post",
    //   href: "https://shivprime94.github.io/Post",
    //   dates: "Jan 2024 - Feb 2024",
    //   active: true,
    //   description:
    //     "Developed a social media platform for sharing thoughts.",
    //   technologies: [
    //     "React.js",
    //     "Node.js",
    //     "Express.js",
    //     "MongoDB Atlas",
    //     "Github Pages",
    //     "Render",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://shivprime94.github.io/Post",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/shivprime94/Post",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "/post-me.png",
    //   video:"",
    // },
  ],
  blogs: [
    // {
    //   title: "Microsoft interview experience for SWE - Intern [Off-Campus]",
    //   dates: "January 2024 - Jan 2024",
    //   description:
    //     "I applied through the career portal on July 17 and got the OA link with two questions. Both were leetcode easy-medium. I solved and submitted them within 20 minutes..",
    //   image:
    //     "https://cdn.hashnode.com/res/hashnode/image/upload/v1706329920629/fe27c816-23ad-4909-bc70-cd13d80f4bff.gif?w=1600&h=840&fit=crop&crop=entropy&auto=format,compress&gif-q=60&format=webm",
    //   links: [
    //     {
    //       title: "Hashnode",
    //       href: "https://shivshankarkanaujiya.hashnode.dev/my-microsoft-interview-experience-for-swe-intern-off-campus",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    // },
  ],
  hackathons: [
    {
      title: "Hack-Heritage Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "Kolkata, India",
      description:
        "Developed a web application that helps the common public to draft legal documents easily.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/theesaeedahmed/hack-heritage",
        },
      ],
    },
  ],
} as const;
