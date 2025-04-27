export default function Button({children, selectedButton, isActive}) {
  return (
  <button className={isActive ? 'modal-selected-button active' : 'modal-selected-button'} onClick={selectedButton}>{children}</button>
  )
}