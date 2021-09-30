import React from "react";

function Features() {
  // let url = process.env.REACT_APP_BACKEND_URL + '/api/pins/getimages';

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios.get(url).then(response => { 
  //     console.log(response);
  //     setData(process.env.REACT_APP_BACKEND_URL +"/public/"+response.data)
  //   });
    
  // }, []);
  return (
    <section id="features">
      <div className="container">
        <div className="section-image__small">
          <img src="./images/feature.svg" alt="features" />
        </div>
        <div className="section-text">
          <div className="section-text__title">
            Some of the best features Of Our App!
          </div>

          <div className="row">
            <div className="feature-box col-50">
              <div className="section-text__title-small">Easy to customize</div>
              <div className="section-text__body">
                Aorem psum olorsit amet ectetur adipiscing elit, sed dov.
              </div>
            </div>

            <div className="feature-box col-50">
              <div className="section-text__title-small">Extreme Security</div>
              <div className="section-text__body">
                Aorem psum olorsit amet ectetur adipiscing elit, sed dov.
              </div>
            </div>
          </div>

          <div className="row">
            <div className="feature-box col-50">
              <div className="section-text__title-small">Customer Support</div>
              <div className="section-text__body">
                Aorem psum olorsit amet ectetur adipiscing elit, sed dov.
              </div>
            </div>

            <div className="feature-box col-50">
              <div className="section-text__title-small">Creative Design</div>
              <div className="section-text__body">
                Aorem psum olorsit amet ectetur adipiscing elit, sed dov.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
