import "./style.css";

const PageSelect = ({ pageNext, pagePrevious }) => {
  return (
    <div className="button-container">
      <button className="previous-page" onClick={pagePrevious}></button>
      <button className="next-page" onClick={pageNext}></button>
    </div>
  );
};

export default PageSelect;
