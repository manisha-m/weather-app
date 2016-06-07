var React = require('react');
var Home = require('../components/Home');


var HomeContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
   getInitialState: function () {
       return ( {
           place: '',
           action: ''
       })
   },
   onUpdatePlace: function (e) {
       console.log('Handling on Update Place');
       this.setState({
            place: e.target.value     
       })
   },
   onSubmitPlace: function (e) {
       //go to /city route
       console.log("Need to wire up Get Weather");
       //this.context.router.push('/cityWeather/' + this.state.place);
       (this.state.action === 'current') ?
           this.context.router.push('/cityWeather/' + this.state.place) :
           this.context.router.push('/forecast/' + this.state.place);
       
   },
   onButtonClick: function (e) {
       console.log('Handling on Button Click');
       console.log('Button id is ' + e.target.id);
       this.setState({
            action: e.target.id     
       })
   },
   render: function () {
       return (
            <Home 
                place={this.state.place} handleUpdatePlace={this.onUpdatePlace} handleSubmitPlace={this.onSubmitPlace} handleClick={this.onButtonClick} />
       );
   } 
});


module.exports = HomeContainer;