import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import MomAndDad from "../public/images/_15_00841.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Project One</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
      <Title>Home Page</Title>
      <ImageWrap>
        <Image src={MomAndDad} alt="Mom and Dad"  />
      </ImageWrap>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  height: 100vh;
  `

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
  height: 100%;
`;
