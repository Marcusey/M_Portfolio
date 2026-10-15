
const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <p className="hero-label">Front End Developer student</p>
        <h1>Hi, I'm Marcus.</h1>
        <p className="hero-intro">
          Studying front end with a growing interest in back end, aiming to become a full stack developer.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">See my projects</a>
          <a href="#contact" className="btn btn-outline">Contact me</a>
        </div>
      </div>
      <div className="hero-photo">Photo</div>
    </section>
  )
}

export default Hero