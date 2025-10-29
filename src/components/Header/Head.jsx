import "./Header.css";
import print from "../../assets/fingerprint.png";

const Head = () => {
  return (
    <header className="auth-header">
      <div className="auth-header-inner">
        {/* Icon on the left */}
        <img src={print} alt="Fingerprint" className="auth-icon-img" />

        {/* Text content */}
        <div className="auth-text">
          <h1 className="auth-title">
            Authenticate <span className="makesmall">your document</span>
          </h1>
          <p className="auth-sub">
            Thank you for submitting your document for verification.
            <br />
            Please find below the answer to your request.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Head;
