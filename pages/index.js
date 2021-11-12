import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import MomAndDad from "../public/images/_15_00841.jpg";
import CatFacts from "../components/CatFacts";
import client from "../apollo-client"
import { useState, useEffect } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";



const clientCountries = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache()
});



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


export default function Home() {

  useEffect(() => {
  clientCountries
  .query({
    query: gql`
           query Countries {
             countries {
               code
               name
               emoji
             }
           }
        `
  })
  .then(result => setCountries(result.data.countries.slice(0, 10)));
  }, []);

const [countries, setCountries] = useState([]);

  console.log("countriesData", countries)
  return (
    <>
      <Head>
        <title>Next Project One</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Title>Home Page</Title>
        <ImageWrap>
          <Image src={MomAndDad} alt="Mom and Dad" />
        </ImageWrap>
      </Wrapper>
      <div>
        {countries.map(country => (
          <ListItem key={country.code}>{`${country.name} - ${country.emoji}`}</ListItem>
        ))}
      </div>
       
      <CatFacts />
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
`;

const Title = styled.h1`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 1.5em;
  color: black;
  z-index: 1;
`;

const ImageWrap = styled.div`
  max-width: 50%;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
`;
