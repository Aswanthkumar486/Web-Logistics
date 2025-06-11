export default function Services({ services }) {
  if (!services || !Array.isArray(services.items)) return null;

  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">{services.title}</h2>
        <div className="row">
          {services.items.map(({ id, title, description, icon }) => (
            <div key={id} className="col-sm-6 col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm hover-shadow transition">
                <div className="card-body text-center">
                  <div className="mb-3 text-primary fs-1">
                    <i className={`bi ${icon}`}></i>
                  </div>
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text text-muted small">{description}</p>
                  <a href="#" className="btn btn-sm btn-outline-primary mt-3">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .hover-shadow:hover {
          box-shadow: 0 0.5rem 1.2rem rgba(0, 0, 0, 0.15);
          transform: translateY(-4px);
        }
        .transition {
          transition: all 0.3s ease-in-out;
        }
      `}</style>
    </section>
  );
}
