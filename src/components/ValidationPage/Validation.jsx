import { useEffect } from "react";
import { useParams } from "react-router-dom";
import validationData from "../../data/Validation";
import "./Validation.css";

const Validation = () => {
  const { id } = useParams(); // Get ID from URL
  const record = validationData.find((item) => item.deliverableId === id);

  if (!record) {
    return (
      <div className="validation-wrapper">
        <div className="validation-card">
          <div className="validation-top">
            <div className="check-circle">✖</div>
          </div>
          <div className="validation-body">
            <p style={{ color: "red", textAlign: "center" }}>
              Invalid or expired QR code.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="validation-wrapper">
      <div className="validation-card">
        <div className="validation-top">
          <div className="check-circle">✔</div>
        </div>

        <div className="validation-body">
          <p>
            <strong>Deliverable Id:</strong> {record.deliverableId}
          </p>
          <p>
            <strong>Published on:</strong> {record.publishedOn}
          </p>
          <p>
            <strong>QR Code Status:</strong> {record.qrStatus}
          </p>
          <p>
            <strong>Name:</strong> {record.name}
          </p>
          <p>
            <strong>ID:</strong> {record.id}
          </p>
          <p>
            <strong>Issued on:</strong> {record.issuedOn}
          </p>
          <p>
            <strong>Valid until:</strong> {record.validUntil}
          </p>
          <p>
            <strong>Type:</strong> {record.type}
          </p>
          <p>
            <strong>Model:</strong> {record.model}
          </p>
          <p>
            <strong>Company:</strong> {record.company}
          </p>
          <p>
            <strong>Training Location:</strong> {record.location}
          </p>
          <p>
            <strong>Trainer:</strong> {record.trainer}
          </p>

          <p className="validation-footer-text">
            For any further information on this document, please contact the
            issuer of the document.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Validation;
