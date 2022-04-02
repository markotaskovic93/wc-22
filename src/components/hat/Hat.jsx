import Team from "../team/Team"
import './style.css'

const Hat = ({ teams, hatNumber }) => {
    return (
        <div className={`hat hat-${hatNumber}`}>
            <h4>Hat {hatNumber + 1}</h4>
            <hr></hr><br></br>
            { teams.map((team, index) => {
                return  <Team team={team} position={index} key={index} />
            }) }
        </div>
    )
}

export default Hat