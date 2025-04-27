import './Header.css'

export default function Header() {
  return (
    <header className='header'>
      <p className='logo'>robo.school</p>
      <nav className='nav-list'>
        <a className='nav-list-item' href='#'>О школе</a>
        <a className='nav-list-item' href='#'>Тренеры</a>
        <a className='nav-list-item' href='#'>Стоимость</a>
      </nav>
      <a className='contact-number' href='tel:78000001122'>+7 800 000 11 22</a>
    </header>
  )
}