import './style.css'

const Team = ({ team, position }) => {
    return (
        <div className={`team team-${team.rank}`}>
            <p>{ position + 1 }.</p>
            <img src={team.flag}/>
            <p>{ team.team }</p>
        </div>
    )
}

export default Team