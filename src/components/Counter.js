import React from "react";

class Counter extends React.Component{
    constructor( props ){
        super(props);
        this.state = {
          timeFrom: this.calculateTimeFrom()
        };
      }
    
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          timeFrom: this.calculateTimeFrom()
        });
      }
    
      calculateTimeFrom(){
        // "2022-08-06T20:37:00+02:00"
        const difference = +new Date() - +new Date(this.props.from);
        let timeFrom = {};
        if (difference > 0) {
          timeFrom = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
          };
        }
        return timeFrom;
      }
    
      render(){
        return (
            <div>
              <p>
                <span> {this.state.timeFrom.days} days </span>
                <span>{this.state.timeFrom.hours} hours</span>
                <span> and </span>
                <span>{this.state.timeFrom.minutes} minutes</span>
              </p>
              <p className="emoji">🔥👏</p>
            </div>
        );
      }  
};

export {Counter};