import "./Profile.css";

//const TrainingList = ["Point guards", "Small fowards", "Team strategies"];


function CoachProfile () {
    return (
      <div className="page">
        <div className="left">
          <img src="./assets/hero.png" alt="hero" className="hero-image" />

          <div className="profile">
            <h1 className="name">Ken Wachira</h1>
            <br></br>

            <div className="Title">
              <h3 className="role">BasketBall Coach</h3>

              <div className="About">
                <h5>About</h5>
                <p className="text">
                  Meet Ken Wachira, a Basketball strategist known for his quick
                  decision-making and game-reading abilities. His coaching style
                  emphasizes enhancing court vision and predicting oponents
                  moves. Gain exclusive insights into basketball tactics and
                  honing your 3-point game with Ken Wachira, the maestro behind
                  the arc
                </p>
                <p className="footer">"Read the game, Own the court</p>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="section">
            <h2 className="label">DECISIVE MOVE SPECIALIST</h2>
            <h4>Strength</h4>
            <p>Strategic Vision & Quick Decision-Making & 3-Point Shooting</p>

            <h4>Expertise</h4>
            <p>Reading the game, Making decisive moves, excellent 3-point shooting</p> <br></br>

            <h2 className="label">VISIONARY INSIGHT</h2>
            <h4>Coaching Focus</h4>
            <p>Improving court vision, Anticipating opponent moves</p>

            <h4>Main Focus</h4>
            <ul>
                <li>Tactical insights</li>
                <li>Rapid decision-making drills</li>
            </ul>

            <h2 className="label">TRAINING POSITIONS</h2>
            <h4>Main Focus</h4>
            <ul>
                <li>Point guards</li>
                <li>Small fowards </li>
                <li>Team strategies</li>
            </ul>

            <h4>Also</h4>
            <ul>
                <li>Trains all basketball positions</li>
            </ul>

            <h2 className="label">ACOLADES</h2>
            <h4>MVP 2022</h4>
            <p>Renowned for his exceptional coaching skills and strategic mind</p>
          </div>
        </div>
      </div>
    );
}

export default CoachProfile;