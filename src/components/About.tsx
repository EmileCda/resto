import { PageContainer, Title } from "../styles/App.style";


export type Pierre = {
  id : number,
  name : string
}
export type Papier ={
  weight : number,
  facet : number
}

export type Ciseau = Pierre & { add : string, id : string | number};


export default function About() {
const toto: Pierre ={id: 33, name : 'lolotez'};

// export type Main = Ciseau & {id:string, name : number}
export type Main = Pierre & {id:string, name : number}


// const ciseau = toto ; 
const ciseau : Ciseau = {id: 33, name : 'lolote',add:"add"};
const truc1 : Main = { id : 12, name : 22, add : "ass" }
const truc2 : Main = {  add : "ass",  id : '23', name 3 }
console.log (ciseau);
	return (
		<>
			<PageContainer>
				<Title>About</Title>
        <p>{ciseau.add}</p>
			</PageContainer>
		</>
	);
}
