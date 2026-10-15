import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav>
      <a href="#home">Marcus Yttermyr</a>
      <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
      <div className={isOpen ? 'nav-links open' : 'nav-links'}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar