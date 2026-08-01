import "./Profile.css";

//const TrainingList = ["Point guards", "Small fowards", "Team strategies"];


function CoachProfile () {
    return (
      <div className="page">
        <div className="left">
            <img src="./assets/hero.png" alt="hero" className="hero-image"/>

        <div className="profile">
          <h1 className="name">Ken Wachira</h1><br></br>

          <div className="Title">
            <h3 className="role">BasketBall Coach</h3>

            <div className="About">
              <h5>About</h5>
              <p className="text">
                Meet Ken Wachira, a Basketball strategist known for his quick
                decision-making and game-reading abilities. His coaching style
                emphasizes enhancing court vision and predicting oponents moves.
                Gain exclusive insights into basketball tactics and honing your
                3-point game with Ken Wachira, the maestro behind the arc
              </p>
            </div>
          </div>

          <div className="right">
            <div>
                <h2>Decisive Move Specialist</h2>
            </div>

          </div>
        </div>
        </div>
      </div>
    );
}

export default CoachProfile;