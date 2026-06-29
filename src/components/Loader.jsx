function Loader() {
    return (
      <div className="text-center my-5">
        <div
          className="spinner-border text-primary"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
  
        <p className="mt-3">Loading...</p>
      </div>
    );
  }
  
  export default Loader;