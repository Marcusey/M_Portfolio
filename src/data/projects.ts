export type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  repoUrl: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Book API",
    description: "A book and review API with authentication, built as a group project. I built the reviews API and the review form in the client.",
    image: "/images/book-api.jpg",
    tags: ["Node.js", "Express", "MongoDB", "TypeScript"],
    repoUrl: "https://github.com/Marcusey/book-api",
  },

  {
    id: 2,
    title: "Web Shop",
    description: "A web shop built with JavaScript, CSS and Vite, with layouts for desktop, tablet and mobile.",
    image: "/images/shop.jpg",
    tags: ["JavaScript", "CSS", "Vite"],
    repoUrl: "https://github.com/Marcusey/shop-assignment",
  },

  {
    id: 3,
    title: "SVG Animation",
    description: "An SVG illustration brought to life with CSS and JavaScript.",
    image: "/images/svg.jpg",
    tags: ["SVG", "CSS", "JavaScript"],
    repoUrl: "https://github.com/Marcusey/svg-assignment",
  },

    {
    id: 4,
    title: "Portfolio",
    description: "This portfolio, built as a React single page application with reusable components, a filterable project list and a responsive layout.",
    image: "/images/portfolio.jpg",
    tags: ["React", "TypeScript", "Vite"],
    repoUrl: "https://github.com/Marcusey/portfolio",
  },

  {
    id: 5,
    title: "GitHub Practice",
    description: "A practice project for Git workflows: branches, merges and conflict resolution.",
    image: "/images/github.jpg",
    tags: ["Git", "GitHub"],
    repoUrl: "https://github.com/Marcusey/github-assignment",
  },

  {
    id: 6,
    title: "Coming soon",
    description: "A placeholder for my next project, to be replaced when it is ready.",
    image: "/images/placeholder.jpg",
    tags: ["React", "TypeScript"],
    repoUrl: "https://github.com/Marcusey",
  }
]