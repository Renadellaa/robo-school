import './IntroSection.css'
import heroImage from '/hero-image.png'

export default function IntroSection() {
  return (
    <section className='hero'>
      <div className='container hero-container'>
        <div className='hero-left'>
          <h1 className='hero-title'>robo school</h1>
          <p className='hero-description'>Курсы повышения квалификации по робототехнике для педагогов начальной школы</p>
          <button className='hero-button'>Записаться на курс</button>
        </div>
        <div className='hero-right'>
          <img className='hero-image' src={heroImage} alt='Девушка' />
        </div>
      </div>
    </section>
  )
}