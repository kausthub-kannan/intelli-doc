import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from "./Sidebar";
import Home from './Home';
import XAi from "./XAi";
import Report from './Report'
import Notes from "./Notes";
import LineChart from "./LineChart";
import { UserData } from "./utils/Data";
import { useState } from "react";
import EditProfile from './EditProfile';
import MainPage from './MainPage';

// function App() {
//   return (
//     <Router>
//     <div className="App">
//       <Sidebar/>
//       <div className="">
//        <Routes>
//         <Route exact path="/">
//           <Home />
//         </Route>
//         <Route path="/xai">
//           <XAi/>
//         </Route>
//         <Route path="/report">
//           <Report/>
//         </Route>
//         <Route exact path="/Notes">
//           <Notes />
//         </Route>
//        </Routes>
//       </div>
//     </div>
//     </Router>
    
//   );
// }

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data)=> data.year) ,
    datasets: [{
      label: "Users Gained",
      data: UserData.map((data)=> data.userGain)
    },
    {
      label: "Users Lost",
      data: UserData.map((data)=> data.userLost)
    },
  ]
  })
  return (
    <div className="App">
      <Sidebar/>
      <div className="">
          {/* <Home /> */}
          {/* <XAi/> */}
          {/* <Report/> */}
          {/* <Notes /> */}
          {/* <LineChart chartData={userData}/> */}
          <EditProfile />
          {/* <MainPage /> */}
      </div>
    </div>
    
  );
}

export default App;
