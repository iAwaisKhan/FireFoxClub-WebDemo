import { Code, Users, Calendar, Rocket } from "lucide-react";


export const FEATURES_DATA = [
    { icon: <Code size={32} />, title: "Open Source", desc: "Contributing to real-world projects." },
    { icon: <Users size={32} />, title: "Community", desc: "A network of like-minded peers." },
    { icon: <Calendar size={32} />, title: "Events", desc: "Hackathons, workshops & more." },
    { icon: <Rocket size={32} />, title: "Innovation", desc: "Pushing boundaries with tech." },
];


export const PROJECTS_DATA = [
    {
        id: 1,
        title: "Project Title 1",
        desc: "An open-source platform that helps students find resources and connect with mentors across the university network.",
        tags: ["Next.js", "Tailwind", "TypeScript"],
    },
    {
        id: 2,
        title: "Project Title 2",
        desc: "An open-source platform that helps students find resources and connect with mentors across the university network.",
        tags: ["Next.js", "Tailwind", "TypeScript"],
    },
];

/* export const EVENTS_DATA = [
    { title: "Open Source Hackathon", date: "Oct 15, 2026", type: "Tech Event", image: "bg-gradient-to-br from-brand-purple to-brand-purple" },
    { title: "Web Dev Bootcamp", date: "Oct 22, 2026", type: "Workshop", image: "bg-gradient-to-br from-brand-indigo to-brand-cyan" },
    { title: "Code & Coffee", date: "Nov 05, 2026", type: "Meetup", image: "bg-gradient-to-br from-brand-purple to-brand-cyan" },
]; */

export const EVENTS_DATA = [
    {
        id: 1,
        title: "Firefox Expedition",
        date: "Advitya '24",
        time: "Full Day",
        location: "VIT Bhopal University",
        type: "Flagship Event",
        status: "past",
        seats: 250,
        registered: 250,
        description: "A flagship journey exploring the Mozilla ecosystem, privacy-focused browsing, and open-source contributions during Advitya '24.",
        tags: ["Advitya '24", "Mozilla", "Exploration"],
        gradient: "from-brand-purple to-brand-purple",
        accentColor: "brand-purple",
    },
    {
        id: 2,
        title: "Dev Inferno",
        date: "Aug 2024",
        time: "10:00 AM – 6:00 PM",
        location: "Technical Block, VIT Bhopal",
        type: "Hackathon",
        status: "past",
        seats: 150,
        registered: 150,
        description: "An intense 8-hour development marathon where students turned heat into high-performance code and innovative solutions.",
        tags: ["Development", "Hackathon", "Open Source"],
        gradient: "from-brand-indigo to-brand-cyan",
        accentColor: "brand-cyan",
    },
    {
        id: 3,
        title: "IdeaForge",
        date: "Dec 2024",
        time: "11:00 AM – 5:00 PM",
        location: "Seminar Hall-1",
        type: "Ideathon",
        status: "past",
        seats: 100,
        registered: 100,
        description: "Forging new ideas for the open web. Students pitched innovative solutions to real-world internet privacy and accessibility challenges.",
        tags: ["Ideathon", "Innovation", "Open Web"],
        gradient: "from-brand-purple to-brand-cyan",
        accentColor: "brand-cyan",
    },
    {
        id: 4,
        title: "Mozverse: Multiverse of Firefox",
        date: "Advitya '25",
        time: "Full Day",
        location: "VIT Bhopal University",
        type: "Mega Event",
        status: "past",
        seats: 300,
        registered: 300,
        description: "Stepping into the multiverse of possibilities with Firefox. A mega event showcasing web technologies, privacy tools, and community projects.",
        tags: ["Advitya '25", "Mozverse", "Web Tech"],
        gradient: "from-brand-indigo to-brand-purple",
        accentColor: "brand-purple",
    },
    {
        id: 5,
        title: "Red Light Code Right",
        date: "Jul 2025",
        time: "6:00 PM – 10:00 PM",
        location: "Lab Complex, Block B",
        type: "Coding Contest",
        status: "past",
        seats: 200,
        registered: 200,
        description: "A high-stakes coding competition where speed met precision. Participants tackled algorithmic challenges under the pressure of the clock.",
        tags: ["Competitive Coding", "Algorithms", "July 2025"],
        gradient: "from-brand-purple to-brand-red",
        accentColor: "brand-purple",
    },
    {
        id: 6,
        title: "Mozzi-Fire",
        date: "Aug 2025",
        time: "4:00 PM – 7:30 PM",
        location: "Outdoor Arena / Block A",
        type: "Community Event",
        status: "past",
        seats: 150,
        registered: 150,
        description: "Firing up the community spirit with hands-on Mozilla workshops and open-source collaborative sessions.",
        tags: ["Community", "Workshops", "August 2025"],
        gradient: "from-brand-purple to-brand-cyan",
        accentColor: "brand-cyan",
    },
    {
        id: 7,
        title: "Imposter Protocol",
        date: "Advitya '26",
        time: "Check Schedule",
        location: "VIT Bhopal Campus",
        type: "Technical Simulation",
        status: "past",
        seats: 200,
        registered: 200,
        description: "A unique technical simulation where students decoded protocols and identified vulnerabilities in a controlled imposter-style environment.",
        tags: ["Advitya '26", "Security", "Protocol"],
        gradient: "from-brand-indigo to-brand-purple",
        accentColor: "brand-purple",
    },
];

export const PARTNERS_DATA = [
    "Mozilla",
    "GitHub",
    "Dev.to",
    "Vercel",
    "Figma",
    "Google",
    "Meta",
    "OpenAI",
    "AWS",
    "Digital Ocean",
];
export const TEAM_DATA = [
    {
        category: "Leadership",
        members: [
            {
                name: "Ethan Caldwell",
                role: "President",
                initials: "EC",
                image: "https://api.dicebear.com/9.x/notionists/svg?seed=EthanCaldwell&backgroundColor=1a1a1a",
                bio: "Leading the club's vision and strategy, driving open-source culture at VIT Bhopal.",
                socials: { github: "#", linkedin: "#", twitter: "#" },
                gradient: "from-brand-purple to-brand-cyan",
            },
            {
                name: "Sofia Marchetti",
                role: "Vice President",
                initials: "SM",
                image: "https://api.dicebear.com/9.x/notionists/svg?seed=SofiaMarchetti&backgroundColor=1a1a1a",
                bio: "Coordinating events, teams and community initiatives across campus.",
                socials: { github: "#", linkedin: "#", twitter: "#" },
                gradient: "from-brand-purple to-brand-purple",
            },
        ],
    },
    {
        category: "Technical",
        members: [
            {
                name: "Lucas Bennett",
                role: "Tech Lead",
                initials: "LB",
                image: "https://api.dicebear.com/9.x/notionists/svg?seed=LucasBennett&backgroundColor=1a1a1a",
                bio: "Architecting projects and mentoring developers in open-source best practices.",
                socials: { github: "#", linkedin: "#", twitter: "#" },
                gradient: "from-brand-cyan to-brand-purple",
            },
            {
                name: "Noah Fitzgerald",
                role: "Full Stack Developer",
                initials: "NF",
                image: "https://api.dicebear.com/9.x/notionists/svg?seed=NoahFitzgerald&backgroundColor=1a1a1a",
                bio: "Building web applications and contributing to the club's technical projects.",
                socials: { github: "#", linkedin: "#", twitter: "#" },
                gradient: "from-brand-purple to-brand-red",
            },
            {
                name: "Aria Volkov",
                role: "UI/UX Designer",
                initials: "AV",
                image: "https://api.dicebear.com/9.x/notionists/svg?seed=AriaVolkov&backgroundColor=1a1a1a",
                bio: "Crafting beautiful, accessible designs that bring the club's identity to life.",
                socials: { github: "#", linkedin: "#", twitter: "#" },
                gradient: "from-brand-indigo to-brand-purple",
            },
        ],
    },
    {
        category: "Operations",
        members: [
            {
                name: "James Holloway",
                role: "Events Head",
                initials: "JH",
                image: "https://api.dicebear.com/9.x/notionists/svg?seed=JamesHolloway&backgroundColor=1a1a1a",
                bio: "Organizing hackathons, workshops, and meetups that bring the community together.",
                socials: { github: "#", linkedin: "#", twitter: "#" },
                gradient: "from-brand-cyan to-brand-indigo",
            },
            {
                name: "Chloe Dupont",
                role: "Marketing Lead",
                initials: "CD",
                image: "https://api.dicebear.com/9.x/notionists/svg?seed=ChloDupont&backgroundColor=1a1a1a",
                bio: "Spreading the word about open-source and growing the club's reach across campus.",
                socials: { github: "#", linkedin: "#", twitter: "#" },
                gradient: "from-brand-purple to-brand-purple",
            },
        ],
    },
];


export const TEAM_MEMBERS_PREVIEW = [
    { name: "Ethan Caldwell",  role: "President",       initials: "EC", gradient: "from-brand-purple to-brand-cyan" },
    { name: "Sofia Marchetti", role: "Vice President",  initials: "SM", gradient: "from-brand-purple to-brand-purple" },
    { name: "Lucas Bennett",   role: "Tech Lead",       initials: "LB", gradient: "from-brand-cyan to-brand-purple" },
    { name: "Noah Fitzgerald", role: "Full Stack Dev",  initials: "NF", gradient: "from-brand-purple to-brand-red"    },
    { name: "Chloe Dupont",    role: "Marketing Lead",  initials: "CD", gradient: "from-brand-purple to-brand-purple" },
];

export const GALLERY_DATA = [
    {
        category: "Hackathon 2024",
        tag: "Tech Event",
        color: "from-brand-purple to-brand-cyan",
        images: [
            { src: "https://picsum.photos/seed/hack1/800/600", caption: "Teams brainstorming ideas", span: "col-span-2 row-span-2" },
            { src: "https://picsum.photos/seed/hack2/600/400", caption: "Mentors in action", span: "col-span-1 row-span-1" },
            { src: "https://picsum.photos/seed/hack3/600/400", caption: "Prize ceremony", span: "col-span-1 row-span-1" },
        ],
    },
    {
        category: "Web Dev Bootcamp",
        tag: "Workshop",
        color: "from-brand-cyan to-brand-purple",
        images: [
            { src: "https://picsum.photos/seed/boot1/800/600", caption: "Live coding session", span: "col-span-1 row-span-1" },
            { src: "https://picsum.photos/seed/boot2/800/400", caption: "Q&A with speakers", span: "col-span-2 row-span-1" },
        ],
    },
    {
        category: "Code & Coffee",
        tag: "Meetup",
        color: "from-brand-orange to-brand-purple",
        images: [
            { src: "https://picsum.photos/seed/cafe1/600/800", caption: "Evening networking", span: "col-span-1 row-span-2" },
            { src: "https://picsum.photos/seed/cafe2/600/600", caption: "Casual conversations", span: "col-span-1 row-span-1" },
        ],
    },
];
