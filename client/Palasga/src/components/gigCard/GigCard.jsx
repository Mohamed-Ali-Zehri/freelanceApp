import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./GigCard.scss";

const GigCard = ({ item }) => {
return (
    <Link to={`/gig/${item.id}`} className="link">
    <div className="gigCard">
        <img src={item.img} alt="" />
        <div className="info">
        <div className="user">
            <img src={item.pp} alt="" />
            <span>{item.username}</span>
        </div>
        <p>{item.desc}</p>
        <div className="star">
            <img src="/img/star.png" alt="" />
            <span>{item.star}</span>
        </div>
        </div>
        <hr />
        <div className="detail">
        <img src="/img/heart.png" alt="" />
        <div className="price">
            <span>STARTING AT</span>
            <h2>
            $ {item.price}
            <sup>99</sup>
            </h2>
        </div>
        </div>
    </div>
    </Link>
);
};

GigCard.propTypes = {
item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    pp: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    star: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
}).isRequired,
};

export default GigCard;
