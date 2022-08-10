
import React from "react";
import './App.css';


class App extends React.Component {
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
    const difference = +new Date() - +new Date("2022-08-06T20:37:00+02:00");
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
      <div className="App">
        <header className="App-header">

          <p>
            <span> {this.state.timeFrom.days} days </span>
            <span>{this.state.timeFrom.hours} hours</span>
            <span> and </span>
            <span>{this.state.timeFrom.minutes} minutes</span>
          </p>
          <p className="emoji">🔥👏</p>
        </header>
      </div>
    );
  }

};



// function App() {


//   const calculateTimeFrom = () => {
//     const difference = +new Date() - +new Date("2022-08-06T20:37:00+00:00");
//     let timeFrom = {};
  
//     if (difference > 0) {
//       timeFrom = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60)
//       };
//     }
//     return timeFrom;
//   }

//   const [timeFrom, setTimeFrom] = useState(calculateTimeFrom());

//   useEffect(() => {
//     setTimeout(() => {
//       setTimeFrom(calculateTimeFrom());
//     }, 1000);
//   });

//   return (
//     <div className="App">
//       {timeFrom.hours || timeFrom.minutes || timeFrom.seconds ? (
//         <p>
//           <span> {timeFrom.days} days </span>

//           <span>{timeFrom.hours} hours</span>
//           <span> and </span>
//           <span>{timeFrom.minutes} minutes</span>
//         </p>
//       ) : (
//         <p>Time is up 🔥</p>
//       )}
//     </div>
//   );
// }

export default App;
