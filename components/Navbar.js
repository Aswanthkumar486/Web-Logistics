import Link from "next/link";

export default function Navbar({ nav }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{backgroundColor:" #4aa8ff"}}>
      <div className="container">
        <Link className="navbar-brand" href="/">
          {nav?.brand || "LogicApp"}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {nav?.links?.map(({ id, title }) => (
              <li key={id} className="nav-item h6">
                <a className="nav-link" href={id}>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
