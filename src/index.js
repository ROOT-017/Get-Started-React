//Import the react and react DOM
// import React from "react";
// import ReactDOM from "react-dom";
// import CommentDetail from "./commentDetail";
// import ApprovalCard from "./ApprovalCard";

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
// import React from "react";
// import ReactDOM from "react-dom";
// import SeasonDisplay from "./SeasonDisplay";
// import Spinner from "./spinner";

// class App extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = { lat: null, errorMessage: "" };

//   // }
//   state = { lat: null, errorMessage: "" };

//   componentDidMount() {
//     window.navigator.geolocation.getCurrentPosition(
//       (postion) => {
//         this.setState({ lat: postion.coords.latitude });
//       },
//       (err) => {
//         this.setState({ errorMessage: err.message });
//       }
//     );
//   }
//   renderContent() {
//     if (this.state.errorMessage != "") {
//       return <div>{this.state.errorMessage}</div>;
//     } else if (this.state.errorMessage == "" && this.state.lat != null) {
//       return <SeasonDisplay lat={this.state.lat} />;
//     } else {
//       return <Spinner message="Please allow us to access your location..." />;
//     }
//   }

//   render() {
//     return <div className="border red">{this.renderContent()}</div>;
//   }
// }
// ReactDOM.render(<App />, document.querySelector("#root"));


