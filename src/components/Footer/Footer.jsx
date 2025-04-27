import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p className="logo">robo.school</p>
        <p>© ROBO.SCHOOL</p>
      </div>
      <div className="footer-right">
        <a className="footer-contact-number" href="tel:78000001122">
          +7 800 000 11 22
        </a>
      </div>
    </footer>
  );
}
