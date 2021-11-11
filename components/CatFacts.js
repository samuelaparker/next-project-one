import useSWR from 'swr'
import styled from "styled-components";


const fetcher = (url) => fetch(url).then((res) => res.json())

export default function CatFacts() {
  const { data, error } = useSWR('https://cat-fact.herokuapp.com/facts', fetcher)

    console.log(data)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>
      {data.map((fact) => <ListItem key={fact._id}>{fact.text}</ListItem>)}
  </div>
}

const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
`;