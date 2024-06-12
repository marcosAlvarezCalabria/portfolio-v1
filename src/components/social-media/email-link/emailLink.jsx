import "./email-link.css"

function EmailLink() {



  return (
    <div className="social-media-link " >
    
        <a href="mailto:marcosAlvarezCalAbria@example.com">
          <img className="img-link " src="/images/gmail.png" alt="Gmail" />
        </a>
    
      <a className="invisible-link" href="mailto:marcosAlvarezCalabria@gmail.com">marcosAlvarezCalabria@gmail.com</a>
    </div>
  );
}

export default EmailLink;
