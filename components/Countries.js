// import styled from "styled-components";
// import { gql } from "@apollo/client";
// import client from "../apollo-client";

// export async function getStaticProps(context) {
//   const { data } = await client.query({
//     query: gql`
//       query Countries {
//         countries {
//           code
//           name
//           emoji
//         }
//       }
//     `,
//   })

//   return {
//     props: {
//       countries: data.countries.slice(0, 4),
//     },
//   };
// }

// const Countries = (props) => {

//     console.log(props)
//   return (
//     <>
//       <div>
//         {/* {countries.map((n) => (
//           <ListItem key={n.code}>
//             <p>{n.name}</p>
//           </ListItem>
//         ))} */}
        
//       </div>
//     </>
//   );
// };


// export default Countries;


// const ListItem = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   margin: 10px;
//   padding: 10px;
//   border: 1px solid black;
//   border-radius: 5px;
// `;