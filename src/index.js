//Import the react and react DOM
// import React from "react";
// import ReactDOM from "react-dom";
// import CommentDetail from "./commentDetail";
// import ApprovalCard from "./ApprovalCard";

console.log("I miss JAVASCRIT")
// const App = () => {
//   let dateObj = new Date().getHours() + ":" + new Date().getMinutes();
//   return (
//     <div className="ui conatainer comments" >
//       <ApprovalCard>
//         <CommentDetail
//           author="James"
//           commentText="Nice blog post!"
//           timeAgo={dateObj}
//         />
//       </ApprovalCard>

//       <ApprovalCard>
//         <CommentDetail
//           author="Alex"
//           commentText="Great One!"
//           timeAgo={dateObj}
//         />
//       </ApprovalCard>
//       <ApprovalCard>
//         <CommentDetail
//           author="Terence"
//           commentText="Thanks For this!"
//           timeAgo={dateObj}
//         />
//       </ApprovalCard>
//       <ApprovalCard>hello</ApprovalCard>
//     </div>
//   );
// };

// Take the react component and show on the browser

// ReactDOM.render(<App />, document.querySelector("#root"));
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, long: null, errorMessage: "" };
    window.navigator.geolocation.getCurrentPosition(
      (postion) => {
        this.setState({
          lat: postion.coords.latitude,
          long: postion.coords.longitude,
        });
      },
      (err) => {
        console.log(err)
        this.setState({
          errorCode: err.code,
          errorMessage: err.message,
        });
      }
    );
  }
  
  render() {
    if (this.state.errorMessage != "") {
      return <div>{this.state.errorMessage}</div>;
    } else if (this.state.errorMessage == "" && this.state.lat == null) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div>Latitude:{this.state.lat}</div>
          <div>Longitude:{this.state.long}</div>
        </div>
      );
    }
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
