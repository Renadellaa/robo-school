import { about } from './dataAbout'
import './About.css'

function GetAbout({title, description}) {
  return (
    <div>
      <h4 className='about-h4'>{title}</h4>
      <p className='p-description'>{description}</p>
    </div>
  )
}

export default function About() {
  return (
    <section className="about">
      <div className="container about-container">
        <p className='about-description'><span style={{fontWeight: 'bold'}}>Robo School</span> - учреждение для формирования кадрового педагогического резерва в сфере робототехники и программирования</p>
        <div className="about-grid">
          {about.map((about) => (<GetAbout key={about.title} {...about} />))}
        </div>
      </div>
    </section>
  )
}