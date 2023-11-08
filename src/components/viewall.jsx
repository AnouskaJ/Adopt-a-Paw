import React from 'react';



function ViewAll() {
  return (
    <div>
      <section className="menu" id="up">
        <div className="content">
          <div className="box">
            <div className="imgbx">
              <img src="#" alt="Cat img" />
            </div>
            <div className="text">
              <h3>British Shorthair</h3>
            </div>
          </div>
          <div className="box">
            <div className="imgbx">
              <img src="#" alt="Beagle Image" />
            </div>
            <div className="text">
              <h3>Beagle</h3>
            </div>
          </div>
          {/* Repeat the above structure for other items */}
        </div>
      </section>
    </div>
  );
}

export default ViewAll;
