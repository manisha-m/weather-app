var React = require('react');


var main = React.createClass({
    render: function () {
        return (
            <div> 
            {this.props.children}
            </div>
        );
    }
});

module.exports = main;