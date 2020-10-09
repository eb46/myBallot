// import React, { useContext } from 'react';
// import { DataContext } from "../../App";


// function myPDF() {
//   const { ballot, setBallot} = useContext(DataContext);



//     return (
//         <div id="PDF">
//           <div className="catCard">
//             <h2>Federal Candidates</h2>
//             {ballot.FederalCandidates.map((candidate) => (
//               <div className="infoCard">
//                 <p className="position">{candidate.position}</p>
//                 <p className="name">{candidate.name}</p>
//               </div>
//             ))}
//           </div>

//           <div className="catCard">
//             <h2>Statewide Candidates</h2>
//             {ballot.StatewideCandidates.map((candidate) => (
//               <div className="infoCard">
//                 <p className="position">{candidate.position}</p>
//                 <p className="name">{candidate.name}</p>
//               </div>
//             ))}
//           </div>

//           <div className="catCard">
//             <h2>Judicial Candidates</h2>
//             {ballot.JudicialCandidates.map((candidate) => (
//               <div className="infoCard">
//                 <p className="position">{candidate.position}</p>
//                 <p className="name">{candidate.name}</p>
//               </div>
//             ))}
//           </div>

//           <div className="catCard">
//             <h2>Legislative Candidates</h2>
//             {ballot.LegislativeCandidates.map((candidate) => (
//               <div className="infoCard">
//                 <p className="position">{candidate.position}</p>
//                 <p className="name">{candidate.name}</p>
//               </div>
//             ))}
//           </div>

//           <div className="catCard">
//             <h2>Measures</h2>
//             {ballot.Measures.map((measure) => (
//               <div className="infoCard">
//                 <div className="infoCardBox">
//                   <p className="position">{measure.name}</p>
//                   <p className="name">
//                     {measure.isApproved ? "Approved" : "Rejected"}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//     )
// }

// export default myPDF;
