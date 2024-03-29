import "./Featured.scss"

const Featured = () => {
return (
    <div className='featured'>
    <div className="container">
        
        <div className="left">
            <h1>
                Find the perfect service for your Business
            </h1>
            <div className="search">
                <div className="searchInput">
                    <img src="./img/search.png" alt="" />
                    <input type="text" placeholder='Try building Applications' />
                </div>
                <button className="search">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search</button>
            </div>
            <div className="popular">
                <span>Popular:</span>
                <button>Developper</button>
                <button>WordPress</button>
                <button>Designer</button>
                <button>AI Services</button>
            </div>
        </div>
        <div className="right">
            <img src="./img/freelance.png" alt="" />
        </div>
    </div>
    </div>
)
}

export default Featured
