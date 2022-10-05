// import React, { useEffect, useState, useRef} from "react";
// import { BodyStyle } from "./Body-style";
// import filterIcon from "./Filter.png";
// // import searchIcon from "../../images/585e4ae1cb11b227491c3393.png";
// // import { FaSchool } from "react-icons/fa";
// //import { IoIosArrowForward } from "react-icons/io";
// import axios from "axios";


// const Body = () => {
//   const [schools, setSchool] = useState([]);
//   const [pageNumber, setPageNumber] = useState(0);
//   const [totalPages, setTotalPages] = useState(0);
//   const [searchKey, setSearchKey] = useState(" ");

//   const searchRef = useRef(" ");

//   const showpage = (e) => {
//     e.preventDefault();
//     setPageNumber(e.target.innerText - 1);
//   };
//   let pages = [];
  
//   for (let i = 1; i < totalPages; ++i) {
//     pages.push(
//       <a onClick={showpage} key={i}>
//        {i} 
//       </a>
//     );
//   }

//   const fetchSchools = async () => {
//     const token =
//       "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYWxseUBnbWFpbC5jb20iLCJleHAiOjE2NjQ5MDc2NzgsImlhdCI6MTY2NDg3MTY3OH0.WeXJMmK6PzH3pyE3UGNX8jG47XHvnr59BTDEQr-ldN0";
//     try {
//       const url = `http://localhost:5050/api/schools/${pageNumber}/5/name`;
//       //const token = localStorage.getItem("token");
//       const response = await axios
//         .get(url, {
//           headers: {
//             Authorization: `${token}`,
//           },
//         })
//         .then((response) => {
//           const allSchools = response.data.data.content;
//           setSchool(allSchools);
//           setTotalPages(response.data.data.totalPages);
//           console.log(response.data.data.totalPages);
//         });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const lastPageNum = totalPages - 1;
//   console.log("write", lastPageNum);
//   const nextPage = () => {
//     setPageNumber((prevState) => {
//       return prevState + 1;
//     });
//     console.log("here", pageNumber);
//     console.log("nextpage");
//   };
//   const previousPage = () => {
//     setPageNumber((prevState) => {
//       return prevState - 1;
//     });
//     console.log("prevpage");
//   };


//   useEffect(() => {
//     fetchSchools();
//   }, [pageNumber, searchKey]);
  
//   const handleChange = (e) => {
//     // const { name, value } = e.target;
//     setSearchKey(searchRef.current.value);
//     console.log("this", searchRef.current.value);
//   };

//   return (
//     <BodyStyle>
//       <div className="rewardBody">
//         <div className="title">
//           <h2>All Schools</h2>
//         </div>
//         <div className="search">


//           <div className="form">
//             <form>
//               <input type="search" placeholder="Search..." 
//               ref={searchRef}
//               onChange={handleChange}
//               value={searchKey.searchTerm}
//               name="searchTerm"
//               ></input>
//               <button type="submit">Search</button>
//             </form>
//           </div>
//           <div className="filter">
//             <div className="holder">
//               <div>
//                 <p>Filter</p>
//               </div>
//               <div className="filterIcon">
//                 <img src={filterIcon} alt="" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="table">
//           <table>
//             <thead>
//               <tr className="table-head">
//                 <th>List of Schools</th>
//               </tr>
//             </thead>
//             <tbody>
//               {schools.map((school, index) => {
//                 return (
//                   <tr key={school.id}>
//                     <td>{school.name}</td>
//                     <a className="schoolName" href="/getAllWithPagination/{pageNo}/{pageSize}/{schoolName}"></a>
//                     {/* <td>
//                       <IoIosArrowForward />
//                     </td> */}
//                   </tr>
//                 );
//               })}
//             </tbody>
            
//             <div className="pagination">
//             <a href="#" onClick={previousPage}>
//           &laquo;
//         </a>
//               {pages}
//               <a>...</a>
//         <a onClick={() => setPageNumber(lastPageNum)}>
//           Last
//         </a>
//         <a onClick={nextPage}>
//           &raquo;
//         </a>
              
//             </div>
//           </table>
//         </div>
//       </div>
//     </BodyStyle>
//   );
// };
// export default Body;
