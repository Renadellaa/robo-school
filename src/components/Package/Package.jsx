import { packages } from "./dataPackage";
import "./Package.css";

function GetPackage({ title, price, description, button }) {
  const firstPackageDescription = packages[0].description;

  return (
    <div className="package-item-container">
      <h3>{title}</h3>
      <p className="price">{price}</p>
      <p
        className={
          firstPackageDescription === description
            ? "no-margin"
            : "p-description card"
        }
      >
        {description}
      </p>
      <button className="package-button">{button}</button>
    </div>
  );
}

export default function Package() {
  return (
    <section className="package">
      <div className="container">
        <h2>Выберите нужный пакет</h2>
        <div className="package-item">
          {packages.map((packages) => (
            <GetPackage key={packages.title} {...packages} />
          ))}
        </div>
      </div>
    </section>
  );
}
