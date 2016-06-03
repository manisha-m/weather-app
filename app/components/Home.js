var React = require('react');
var PropTypes = React.PropTypes;
var alignJumbo = require('../styles').alignHomeJumbo;
var background = require('../styles').background;
var transparentBg = require('../styles').transparentBg;

function Home(props) {
        console.log('Rendering Home page');
        return (
            <div className='jumbotron' style={background}>
            <div className='jumbotron col-sm-6 col-sm-offset-3 text-center' style={alignJumbo}>
            <span style={{color: 'white'}}><h1>Enter a City and Country</h1></span>
            <form onSubmit={props.handleSubmitPlace}>
                        <div className="form-group col-sm-5 col-sm-offset-3">
                        <input 
                           className="form-control"
                            placeholder="Bangalore, India"
                            onChange={props.handleUpdatePlace} 
                            value={props.place} 
                            type="text" />
                        </div>
                        <div className="form-group col-sm-3 col-xs-4 col-sm-offset-4">
                        <button
                            className="btn btn-block btn-danger btn-responsive"
                            type="submit">
                            Get Weather 
                        </button>
                        </div>
                </form>
            </div>
            </div>
        );
}

Home.propTypes = {
    place: PropTypes.string.isRequired,
    handleUpdatePlace: PropTypes.func.isRequired,
    handleSubmitPlace: PropTypes.func.isRequired
}

module.exports = Home;