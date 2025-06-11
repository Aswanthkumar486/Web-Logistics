export default function Footer({ footer }) {
  if (!footer) return null;

  return (
    <footer className="bg-dark text-light py-5" id="contact">
      <div className="container">
        <div className="row text-center text-md-start align-items-start">
          
          {/* Left: Social Links */}
          <div className="col-md-4 mb-4 mb-md-0">
            {footer.socialLinks && (
              <div className="d-flex flex-column align-items-center align-items-md-start gap-2">
                <a href={footer.socialLinks.linkedin} target="_blank" className="btn btn-sm btn-outline-light rounded-pill px-3">
                  <i className="bi bi-linkedin me-1"></i> LinkedIn
                </a>
                <a href={footer.socialLinks.twitter} target="_blank" className="btn btn-sm btn-outline-light rounded-pill px-3">
                  <i className="bi bi-twitter me-1"></i> Twitter
                </a>
                <a href={footer.socialLinks.facebook} target="_blank" className="btn btn-sm btn-outline-light rounded-pill px-3">
                  <i className="bi bi-facebook me-1"></i> Facebook
                </a>
              </div>
            )}
          </div>

          {/* Center: Footer Text */}
          <div className="col-md-4 mb-4 mb-md-0 d-flex justify-content-center align-items-center">
            <p className="mb-0">{footer.text}</p>
          </div>

          {/* Right: Contact Info */}
          <div className="col-md-4 text-end">
            {footer.contact && (
              <div className="small">
                <p className="mb-1">
                  <i className="bi bi-envelope-fill me-2 text-warning"></i>
                  <a href={`mailto:${footer.contact.email}`} className="text-light text-decoration-none">
                    {footer.contact.email}
                  </a>
                </p>
                <p className="mb-1">
                  <i className="bi bi-telephone-fill me-2 text-warning"></i>
                  <a href={`tel:${footer.contact.phone}`} className="text-light text-decoration-none">
                    {footer.contact.phone}
                  </a>
                </p>
                <p className="mb-1">
                  <i className="bi bi-geo-alt-fill me-2 text-warning"></i>
                  {footer.contact.address}
                </p>
                <p>
                  <i className="bi bi-clock-fill me-2 text-warning"></i>
                  {footer.contact.workingHours}
                </p>
              </div>
            )}
          </div>
        </div>

        <style jsx>{`
          footer a:hover {
            color: #ffc107 !important;
          }
        `}</style>
      </div>
    </footer>
  );
}
