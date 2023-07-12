import jsonData from "../data/label.json";
import Fifty from "./Fifty";

// eslint-disable-next-line react-refresh/only-export-components
export const myLabel: any= jsonData;
export enum Lang { FR= 'fr',EN='en',ES='es',LINK='link'}

export const currentLang : Lang = Lang.FR;

export type JsonItem = {
	fr : string,
	en : string,
	es : string,
	link : string,
}


export type FiftyData = {
	img : JsonItem,
	alt : JsonItem,
	title : JsonItem,
	text : JsonItem,
	}

export default function Home() {
	console.log(jsonData);
	console.log(myLabel);



const fiftyTitle = "fiftyTitle";

const fifty1 : FiftyData = {
	img : myLabel.fifty1.img,
	alt : myLabel.fifty1.alt,
	title : myLabel.fifty1.title,
	text : myLabel.fifty1.text,
}
const fifty2 : FiftyData = {
	img : myLabel.fifty2.img,
	alt : myLabel.fifty2.alt,
	title : myLabel.fifty2.title,
	text : myLabel.fifty2.text,
}



const imgList =[fifty1,fifty2];
console.log(imgList);

	return (
		<>
		<h1>Home page</h1>
			<p>{myLabel.home.title.fr}</p>
			<Fifty  title={fiftyTitle} imgList ={imgList}></Fifty>
		</>
	);
}
