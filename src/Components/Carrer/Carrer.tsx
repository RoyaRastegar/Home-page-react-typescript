import "./Carrer.css";
const Carrer = () => {
  return (
    <div className="carrer-container">
      <div className="career">
        <p>Software Recruitment Specialist</p>
        <h2>Elevate your career</h2>
        <div className="custom-search">
          <input
            type="text"
            className="custom-search-input"
            placeholder="E.g networking"
          />
          <button className="custom-search-botton" type="submit">
            Search job
          </button>
        </div>
      </div>
      <div className="carrer-img"></div>
    </div>
  );
};
export default Carrer;
