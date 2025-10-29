import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Validation.css";
import icon from "../../assets/search.png";

const ValidateSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchValue.trim() !== "") {
      navigate(`/Validate/${searchValue}`);
    } else {
      alert("Please enter a document number");
    }
  };

  return (
    <div className="validation-wrapper">
      <div className="validation-card">
        <div className="validation-top"></div>

        <div className="validation-body">
          <h3 className="setital">
            Please search your e-document by filling the document number.
          </h3>

          <div className="search-container">
            <button className="search-btn">Search Document</button>

            <input
              className="search-input"
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />

            <img
              className="search-icon"
              src={icon}
              alt="search"
              onClick={handleSearch}
              style={{ width: "20px", height: "20px", cursor: "pointer" }}
            />
          </div>

          <p className="validation-footer-text">
            For any further information on this document, please contact the
            issuer of the document.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValidateSearch;
