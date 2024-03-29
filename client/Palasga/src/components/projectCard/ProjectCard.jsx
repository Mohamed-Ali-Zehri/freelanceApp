import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./ProjectCard.scss";

const ProjectCard = ({item}) => {
return (
    <Link to="/">
    <div className='projectCard'>
    <img src={item.img} alt="" />
    <div className="info">
        <img src={item.pp} alt="" />
        <div className="texts">
            <h2>{item.cat}</h2>
            <span>{item.username}</span>
        </div>
    </div>
    <span className="title">{item.title}</span>
    </div>
    </Link>
)
}
ProjectCard.propTypes = {
    item: PropTypes.shape({
    img: PropTypes.string.isRequired,
    pp: PropTypes.string.isRequired,
    cat: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}).isRequired
};


export default ProjectCard
