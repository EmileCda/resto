import jsonData from "../data/label.json";
import { jsonLabel } from "../lib/utils";
import { PageContainer, Title } from "../styles/App.style";

import {  PageLabel, ScreenBox } from "../types/global.type";
import Content from "./Content";
import Fifty from "./Fifty";




export const myLabel:PageLabel= jsonData.navbar;


export default function Home() {
	console.log(jsonData);
	console.log(myLabel);


	const fiftyTitle = jsonLabel(jsonData.fifty0,'Title');
	

const leftSide : ScreenBox = {
	img : jsonLabel(jsonData.fifty1,'img'),
	alt :  jsonLabel(jsonData.fifty1,'alt'),
	title : jsonLabel(jsonData.fifty1, 'title'),
	text :  jsonLabel(jsonData.fifty1,'text'),
}

const rightSide : ScreenBox = {
	img : jsonLabel(jsonData.fifty2,'img'),
	alt :  jsonLabel(jsonData.fifty2,'alt'),
	title : jsonLabel(jsonData.fifty2, 'title'),
	text :  jsonLabel(jsonData.fifty2,'text')
}
const rightSide2 : ScreenBox = {
	
	title : jsonLabel(jsonData.fifty2, 'title'),
	text :  jsonLabel(jsonData.fifty2,'text')
}



const imgList =[leftSide,rightSide,rightSide,rightSide2,];
const imgList2 =[leftSide,rightSide2,];
console.log(imgList);

	return (
		<>
			<PageContainer>
				<Title>Home page</Title>
				<Content  title={fiftyTitle?.fr} imgList ={imgList}></Content>
				<Content  title={fiftyTitle?.fr} imgList ={imgList2}></Content>
				
			</PageContainer>

		</>
	);
}
