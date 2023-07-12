import jsonData from "../data/label.json";
import { PageContainer } from "../styles/App.style";
import { Title } from "../styles/Fifty.style";
import { FiftyData } from "../types/global.type";
import Fifty from "./Fifty";

// eslint-disable-next-line react-refresh/only-export-components
export const myLabel: any= jsonData;


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
			<PageContainer>
				<Title>Home page</Title>
				<Fifty  title={fiftyTitle} imgList ={imgList}></Fifty>
			</PageContainer>

		</>
	);
}
