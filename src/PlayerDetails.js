import {Link} from 'react-router-dom';

function PlayerDetails({id, name, team, position, image}){
    return(
        <div className="details">
            <br/>
            <img src={image} alt={name} className="player-image"/>
            <h2>{name}</h2>
            <p>Team: {team}</p>
            <p>Position: {position}</p>
            <Link to={`/players/${id}/notes`}>View Performance Notes</Link >
        </div>

    )
};

export default PlayerDetails