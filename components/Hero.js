import Image from "next/image";

export default function Hero({ hero }) {
  return (
    <section
      id="home"
      className="text-center py-5"
      style={{
        background: "linear-gradient(to right, #f8f9fa, #e3e3e3)",
      }}
    >
      <div className="container">
        <h1 className="display-4 fw-bold">{hero?.title}</h1>
        <p className="lead">{hero?.subtitle}</p>
      </div>

      {/* Bootstrap Carousel */}
      <div id="heroCarousel" className="carousel slide mt-4" data-bs-ride="carousel">
        <div className="carousel-inner">
          {hero?.slides?.map((slide, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img
                src={slide.image}
                alt={slide.caption}
                width={500}
                height={500}
                className="d-block w-100 rounded"
              />
              <div className="carousel-caption bg-dark bg-opacity-50 p-3 rounded">
                <h5>{slide.caption}</h5>
              </div>
            </div>
          ))}
        </div>
        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  );
}
