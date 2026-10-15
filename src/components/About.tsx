const skills = ['React', 'TypeScript', 'Node.js', 'MongoDB']

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About me</h2>
      <p>I'm a Front End Development student who has also dipped into back end, with the goal of becoming a full stack developer. 
          I'm currently studying remotely alongside my day job, and my aim is to make a living from coding.</p>
      <ul className="skills">
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}

export default About