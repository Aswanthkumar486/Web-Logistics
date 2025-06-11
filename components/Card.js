import Image from "next/image";

export default function Card({ data }) {
  if (!Array.isArray(data)) return null;

  return (
    <section className="py-5 bg-white" id="cards">
      <div className="container">
        <div className="row">
          {data.map(({ id, image, title, description }) => (
            <div key={id} className="col-sm-6 col-lg-4 mb-4">
              <div className="card border-0 h-100 shadow-sm hover-shadow transition animate__animated animate__fadeInUp">
                <img
                  src={image}
                  alt={title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title text-primary">
                    <i className="bi bi-lightbulb-fill me-2 text-warning"></i>
                    {title}
                  </h5>
                  <p className="card-text small text-muted">{description}</p>
                  <a href="#" className="btn btn-sm btn-outline-primary mt-2">
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
