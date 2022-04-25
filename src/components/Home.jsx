import {Stactics} from "../Context/Statics"
import {useContext} from "react"

export const Home = () => {

    const {length} = useContext(Stactics)
    const {terminated} = useContext(Stactics)
    const {pramoted} = useContext(Stactics)
    const {newuser} = useContext(Stactics)
    
    return (
      <>
        <h3 className="welcome">Welcome To employee management system</h3>
        <div className="home">
          <span>Stats</span>
          <div>
            Total Employees<span className="totalemp">:{length}</span>
          </div>
          <div>
            Total Terminated: <span className="total_terminated">{terminated}</span>
          </div>
          <div>
            Total Promoted: <span className="total_promoted">{pramoted}</span>
          </div>
          <div>
            Total New: <span className="total_new">{newuser}</span>
          </div>
        </div>
      </>
    );
  };