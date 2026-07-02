export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "Full Time" | "Part Time" | "Contract" | "Internship" | "NYSC";
  level?: "Entry" | "Mid" | "Senior" | "Lead";
  tags: string[];
  salary: string;
  postedAgo: string;
  matchPct: number; // 0-100, drives the MatchMeter colour + fill
};

export const jobs: Job[] = [
  {
    id: "6b4adcae-fe43-4aae-9f9c-a11013f6b411",
    title: "Community Health Educator",
    company: "Unknown",
    location: "Ikeja, Lagos",
    type: "Full Time",
    level: "Mid",
    tags: ["Health education", "Data collection", "Workshop facilitation"],
    salary: "₦200k–250k / yr",
    postedAgo: "9 hours ago",
    matchPct: 88,
  },
  {
    id: "7449f9d2-4885-4712-9613-9959443a17a9",
    title: "Software Developer & Technology Officer",
    company: "PeopleOS",
    location: "Nigeria",
    type: "Full Time",
    level: "Mid",
    tags: ["React", "Node.js", "JavaScript"],
    salary: "Salary undisclosed",
    postedAgo: "9 hours ago",
    matchPct: 93,
  },
  {
    id: "ed3d0f3e-8457-4b4d-93b3-241a1f664d3a",
    title: "Marketing & Customer Relations Officer",
    company: "HiiT Plc",
    location: "Nigeria",
    type: "Full Time",
    level: "Entry",
    tags: ["CRM management", "Lead generation", "Data analysis"],
    salary: "Salary undisclosed",
    postedAgo: "9 hours ago",
    matchPct: 71,
  },
  {
    id: "de80f3f9-4d75-4bc5-bd87-f414a1ccd569",
    title: "IT Engineers (Mid-Level Developers)",
    company: "Triax Technologies",
    location: "Nigeria",
    type: "Part Time",
    level: "Mid",
    tags: ["Back-end dev", "Database design", "Web security"],
    salary: "Salary undisclosed",
    postedAgo: "9 hours ago",
    matchPct: 59,
  },
  {
    id: "cd767588-2301-43a5-af52-f7f26135ea36",
    title: "Accountant",
    company: "JSK Consulting Group",
    location: "Ijebu, Ogun State",
    type: "Full Time",
    level: "Mid",
    tags: ["Financial statements", "Bank reconciliation", "Tax filing"],
    salary: "Salary undisclosed",
    postedAgo: "9 hours ago",
    matchPct: 64,
  },
  {
    id: "e24e434e-3344-40da-a4d7-8316ef62879a",
    title: "Truck Driver",
    company: "Stellar International Company Limited",
    location: "Lagos and Mowe, Ogun",
    type: "Full Time",
    tags: ["Truck operation", "Heavy-duty vehicles", "Professional driving"],
    salary: "Salary undisclosed",
    postedAgo: "9 hours ago",
    matchPct: 42,
  },
  {
    id: "79aba081-24f1-4236-b21d-7463ebb4ca51",
    title: "Customer Service Representative",
    company: "Pruvia Integrated Limited",
    location: "Ojodu, Lagos",
    type: "Full Time",
    level: "Entry",
    tags: ["Customer service", "Problem-solving", "Google Suite"],
    salary: "Salary undisclosed",
    postedAgo: "9 hours ago",
    matchPct: 55,
  },
];
