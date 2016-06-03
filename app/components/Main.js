var React = require('react');


var main = React.createClass({
    render: function () {
        return (
            <div> 
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation" style={{backgroundColor: '#ac7339'}}>
                <div className="container-fluid">
                    <div className="navbar-header">
                        <p className="navbar-brand" style={{color: 'white'}}><h4>React Weather App</h4></p>
                    </div>
                    <form className="navbar-form navbar-right" role="search">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Bangalore, India" />
                           <span className="input-group-btn">
                            <button type="submit" className="btn btn-danger"><span className="glyphicon glyphicon-search" aria-hidden="true"></span></button>
                            </span>
                        </div>
                    </form>
                </div>
            </nav>
            {this.props.children}
            </div>
        );
    }
});

module.exports = main;