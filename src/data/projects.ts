import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "collaborative Code Editor",
    description: "A web Code Editor Where people code with each other in real Time",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    technologies: ["React", "Node.js", "MongoDB", "WebSocket"],
    github: "https://github.com/vishal-gohil12/Code_Editor.git",
    live: "https://code-editor-delta-jet.vercel.app/"
  },
  {
    id: 2,
    title: "Blog Website",
    description: "AI-powered meditation and mindfulness application",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJUa58aWKGhxkRkWvoXGIVdyLmTHBI3q0rdQ&s",
    technologies: ["React", "Hono", "PostgreSQL", "TypeScript", "cloudflare"],
    github: "https://github.com/vishal-gohil12/medium-blog.git",
    live: "https://medium-blog-vert.vercel.app/signin"
  },
  
  {
    id: 3,
    title: "Streamify",
    description: "Streaming on Youtube with Browser or Do meeting in real time ",
    image: "https://images.ctfassets.net/4j5hqmsw7vh3/2usxHurRKDFnDIPjNbjTCr/2cb7a7fae30fbb11368a295b43a945ef/Virtual-backgrounds.png",
    technologies: ["ReactJs", "ExpressJs", "Socket.io", "Tailwind", "FFMPEG"],
    github: "https://github.com/vishal-gohil12/Streaming_website.git",
  },
  {
    id: 4,
    title: "TrackTrail",
    description: "A website for tracking your daily habits and motivate for stay on habit",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSArhZAAWa7p3LmUNtl7lyLN-tjapFtek7Mgw&s",
    technologies: ["NextJs", "ExpressJs", "MongoDB", "TypeScript"],
    github: "https://github.com/vishal-gohil12/habit-tracker.git",
  },
  {
    id: 5,
    title: "Co-Po mapping",
    description: "Web site that analyse Co-Po of course and give bloom's taxonomy",
    image: "https://i0.wp.com/sjbit.edu.in/wp-content/uploads/2023/07/co-po-mapping-l.jpg?fit=1024%2C768&ssl=1",
    technologies: ["React", "Node", "Express", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com"
  },
  {
    id: 6,
    title: "CryptoVision",
    description: "Website that show crypto price in real time",
    image: "https://images.unsplash.com/photo-1516245834210-c4c142787335",
    technologies: ["HTML", "CSS", "Javascript"],
    github: "https://github.com/vishal-gohil12/Crypto-Tracker.git",
  },
];
