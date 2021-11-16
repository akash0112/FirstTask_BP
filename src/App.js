import "./App.css";
import sharks from "./images/sharks.png";
import knights from "./images/knights.png";
import ground from "./images/ground.jpg";
import national from "./images/national.png";
import team from "./team";
import { connect, useDispatch, useSelector } from "react-redux";
import { setTeams } from "./action";
import { useEffect } from "react";
function App(props) {
  const dispatch = useDispatch();
  const score = useSelector(state => state.score)
  useEffect(() => {
    const callapi = async () => {
      await dispatch(setTeams(team));
    };
    callapi();
  }, []);
  var sectionStyle = {
    width: "100%",
    height: "720px",
    backgroundImage: `url(${ground})`,
  };

  return (
    <div className="App">
      <section style={sectionStyle}>
        <div className="national">
          <img
            src={national}
            style={{ paddingTop: "50px", position: "relative" }}
            height="100px"
            width="120px"
          />
        </div>
        <h5 className="banner">National Basketball Association</h5>
        <div className="squares" />
        <div className="topsquare" />
        <div className="middlesquare" />
        <div className="lowermiddlesquare" />
        <div className="lowersquare" />
        <div className="place">
          <small>
            <i className="fa fa-map-marker" aria-hidden="true"></i>United States
          </small>
        </div>
        <h5 className="round">
          Second Quarter <span style={{ paddingLeft: "6px" }}>14:37</span>
        </h5>
        {score.map((team,index) => (
          <div className="grid-container stats" >
            <div className="knight">
              <div style={{ paddingLeft: "-23px", position: "absolute" }}>
                <img src={knights} height="30px" width="37px" />
              </div>
              {team.home_team.name}
            </div>
            <div>
              {team.home_team.score}/{team.away_team.score}
            </div>
            <div className="shark">
              <div style={{ paddingLeft: "-23px", position: "absolute" }}>
                <img src={sharks} height="30px" width="37px" />
              </div>
              {team.away_team.name}
            </div>
          </div>
          ))}  
      </section>
    </div>
  );
}

export default App;
