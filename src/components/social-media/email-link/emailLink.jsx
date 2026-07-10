import "./email-link.css"

function EmailLink() {
  return (
    <div className="social-media-link contact-card-link">
        <a className="contact-card-icon" href="mailto:marcosAlvarezCalabria@gmail.com">
          <img className="img-link" src="/images/webp/gmail.webp" alt="Gmail" loading="lazy" />
        </a>
      <a className="invisible-link contact-card-text" href="mailto:marcosAlvarezCalabria@gmail.com">marcosAlvarezCalabria@gmail.com</a>
    </div>
  );
}

export default EmailLink;
