import { Content, FiftyContainer, FiftyItemDiv, Title } from "../styles/Fifty.style";
import { FiftyData } from "../types/global.type";



export type FiftyItemProps = {
	img : string,
	alt : string,
	title : string,
	text : string,
}



export function FiftyItem (props :FiftyItemProps){
  return (
    <FiftyItemDiv >
      <img src={props.img} alt={props.alt} />
      <h1>{props.title}</h1>
      <p>{props.text} </p>
    </FiftyItemDiv>
  )
}


export type FiftyProps = {
  title: string,
  imgList : FiftyData[],
}


export default function Fifty(props : FiftyProps) {

console.log(props)

  return (
    <>

      <FiftyContainer>
        <Title> {props.title}  </Title>

        <Content>
          <FiftyItem 
            img={props.imgList[0].img.fr} 
            alt={props.imgList[0].alt.fr} 
            title={props.imgList[0].title.fr} 
            text={props.imgList[0].text.fr} 
          />
          <FiftyItem 
            img={props.imgList[1].img.fr} 
            alt={props.imgList[1].alt.fr} 
            title={props.imgList[1].title.fr} 
            text={props.imgList[1].text.fr} 
          />
      
        </Content>
      </FiftyContainer>

    </>


  )

}