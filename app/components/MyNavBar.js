var React = require('react');
var PropTypes = React.PropTypes;

function MyNavBar(props) {
    return (
              <nav className="navbar navbar-default navbar-fixed-top" role="navigation" style={{backgroundColor: '#ac7339'}}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <div className="navbar-brand" style={{color: 'white'}}><h4>City Weather Forecast</h4></div>
                    </div>
                    <form className="navbar-form navbar-right" role="search" onSubmit={props.handleSubmitPlace}>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Bangalore, India" onChange={props.handleUpdatePlace} value={props.place}/>
                           <span className="input-group-btn">
                            <button type="submit" className="btn btn-danger"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                            </span>
                        </div>
                    </form>
                </div>
            </nav>
    );
}


module.exports = MyNavBar;