import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import MomAndDad from "../public/images/_15_00841.jpg";
// import Countries from "../components/Countries"
import { gql } from "@apollo/client";
import client from "../apollo-client";
import CatFacts from "../components/CatFacts";


// export async function getServerSideProps(context) {
//   const res = await fetch(`https://cat-fact.herokuapp.com/facts`)
//   const data = await res.json()

//   if (!data) {
//     return {
//       notFound: true,
//     }
//   }

//   return {
//     props: { data }, // will be passed to the page component as props
//   }
// }

export async function getStaticProps(context) {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  })

  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
  };
}


export default function Home({countries}) {
  console.log(countries)
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
      {/* <div>
        {data.map((n) => (
          <ListItem key={n._id}>
            <p>{n.text}</p>
            <p>{n.emoji}</p>
            <p>{n.code}</p>
          </ListItem>
        ))}
      </div> */}
      {/* <Countries /> */}
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
