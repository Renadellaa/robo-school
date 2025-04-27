import { perspectives } from './dataPerspectives'
import './Perspectives.css'
import Tooltip from './Tooltip'

function GetPerpsectives({title, description}) {
  return (
    <div>
      <h4 className='perspectives-h3'>{title}</h4>
      <p className='p-description'>{description}</p>
    </div>
  )
}

export default function Perspectives() {
  return (
    <section className="perspectives">
      <div className="container perspectives-container">
        <h2>Что вы получите после курса</h2>
        <div className="perspectives-grid">
          {perspectives.map((perspective) => (<GetPerpsectives key={perspective.title} {...perspective} />))}
        </div>
        <div>
          <Tooltip text="При наличии свободных мест">
            <div className="icon-info">i</div>
          </Tooltip>
        </div>
      </div>
    </section>
  )
}