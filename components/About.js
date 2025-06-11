export default function About({ about }) {
  return (
    <section
      id="about"
      className="text-white text-center position-relative"
      style={{
        backgroundImage: `url(${about.bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        width: "100%",
        height: "700px",
      }}
    >
      {/* Dark overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}></div>

      <div className="container h-100 d-flex flex-column justify-content-center align-items-center position-relative py-5">
        <h2 className="fw-bold display-4 mb-4">{about.title}</h2>
        <p className="lead fs-5 mb-4 px-3" style={{ maxWidth: "800px" }}>
          {about.content}
        </p>

        {/* Optional: Display highlights if available */}
        {about.highlights && (
          <div className="row justify-content-center">
            {about.highlights.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4 mb-3">
                <div className="card bg-dark bg-opacity-75 text-white h-100 shadow-lg border-0">
                  <div className="card-body">
                    <p className="card-text">{item}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
