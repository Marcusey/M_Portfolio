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
    id: 2,
    title: "Web Shop",
    description: "A web shop built with JavaScript, CSS and Vite, with layouts for desktop, tablet and mobile.",
    image: "/images/shop-spray.png",
    tags: ["JavaScript", "CSS", "Vite"],
    repoUrl: "https://github.com/Marcusey/shop-assignment-spray",
  },

  {
    id: 3,
    title: "SVG Animation",
    description: "An SVG illustration brought to life with CSS and JavaScript.",
    image: "/images/svg-lights.png",
    tags: ["SVG", "CSS", "JavaScript"],
    repoUrl: "https://github.com/Marcusey/svg-assignment",
  },

  {
    id: 1,
    title: "Book API",
    description: "A book and review API with authentication, built as a group project. I built the reviews API and the review form in the client.",
    image: "/images/api-book.png",
    tags: ["Node.js", "Express", "MongoDB", "TypeScript"],
    repoUrl: "https://github.com/Marcusey/api-assignment-books",
  },

  {
    id: 4,
    title: "Portfolio",
    description: "This portfolio, built as a React single page application with reusable components, a filterable project list and a responsive layout.",
    image: "/images/portfolio-hello.png",
    tags: ["React", "TypeScript", "Vite", "CSS"],
    repoUrl: "https://github.com/Marcusey/portfolio",
  },

  {
    id: 5,
    title: "GitHub Practice",
    description: "A practice project for Git workflows: branches, merges and conflict resolution.",
    image: "/images/github-code.png",
    tags: ["Git", "GitHub"],
    repoUrl: "https://github.com/Marcusey/github-assignment-count",
  },

  {
    id: 6,
    title: "Tic-Tac-Toe",
    description: "A Tic-Tac-Toe game built with Vue, TypeScript and CSS as part of my JavaScript Advanced course.",
    image: "/images/tictactoe-game.png",
    tags: ["Vue", "TypeScript", "Vite", "CSS"],
    repoUrl: "https://github.com/Marcusey/tictactoe-assignment",
  }
]