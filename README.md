# Portfolio – Marcus Yttermyr

## About the project

This is my personal portfolio, built as part of my Frontend Web Developer education. It presents some of my projects, the technologies I have worked with, and information about me.

The portfolio is a responsive single-page application built with React and TypeScript.

## Built with

- React
- TypeScript
- Vite
- CSS

## Features

- Responsive layout for mobile, tablet and desktop
- Navigation between page sections
- Project cards with descriptions, images and technology tags
- Filter projects by technology
- Contact information and a contact form

## Getting started

To run the project locally:

1. Clone the repository.
2. Install the dependencies:
   `npm install`
3. Start the development server:
   `npm run dev`
4. Open the local URL shown in the terminal.

## Links

- **Live portfolio:** [View portfolio](https://portfolio-red-eta-43.vercel.app/)
- **Figma design:** [View Figma design](https://www.figma.com/design/xZkLaGfM9AC0NMttc7Zv8S/Portfolio?node-id=0-1&t=e1jMXFJhRD79kueu-1)
- **GitHub repository:** [View source code](https://github.com/Marcusey/portfolio)

## Design notes

The portfolio was planned in Figma before development. Some details may differ from the original design as the project developed during implementation.

## Reflection

Building this portfolio has helped me practise React, TypeScript and component-based development. I divided the application into smaller components, such as `Navbar`, `Hero`, `About`, `Projects`, `ProjectCard`, `Contact` and `Footer`. This makes the code easier to read, maintain and update. I used props to pass project information to the `ProjectCard` component, allowing the same component to display several different projects without repeating the same code.

I used React state for the project filter. This allows users to filter projects by technology and see the displayed projects update when they select a different option. The project information is stored in a separate data file, which keeps the content separate from the components that display it.

In the future, I would like to develop the portfolio further by giving it a more personal style, with an improved colour scheme and a professional photo of myself. I would also like to add more suitable and visually appealing images for my GitHub projects to make the project section more engaging. In addition, I plan to introduce subtle interactive details, such as hover effects and small animations, to create a more polished and enjoyable user experience.

During development, I used AI tools, including ChatGPT and Claude, to help me understand code, troubleshoot problems and get explanations of React concepts. I used them as learning support rather than simply copying solutions. I reviewed the suggestions and made changes while learning how the different parts of the application work together.

Overall, this project has helped me understand how components, props and state can be combined to build a responsive and interactive React application.

## Author

Marcus Yttermyr
