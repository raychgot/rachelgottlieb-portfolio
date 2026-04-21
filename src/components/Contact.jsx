export default function Contact() {
  return (
    <section id="contact">
      <h2 className="section-label">Contact Me!</h2>
      <p className="contact-blurb">
        If you would like to discuss an opportunity, ask a question, or simply connect, I would love to hear from you. Feel free to reach out!
      </p>
      <div className="contact-body">
        <a href="mailto:rayraygottlieb@gmail.com" className="contact-item">
          <span className="contact-icon contact-icon--solid">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </span>
          <span className="contact-text">rayraygottlieb@gmail.com</span>
        </a>
        <a href="tel:+19542941900" className="contact-item">
          <span className="contact-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.28h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6.08 6.08l1.08-.9a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </span>
          <span className="contact-text">954-294-1900</span>
        </a>
        <a
          href="https://www.linkedin.com/in/rachelgottliebb/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <span className="contact-icon contact-icon--solid contact-icon--linkedin">in</span>
          <span className="contact-text">LinkedIn</span>
        </a>
      </div>
    </section>
  )
}
