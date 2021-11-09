import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Project One</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Title>Home Page</Title>
    </>
  );
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;
