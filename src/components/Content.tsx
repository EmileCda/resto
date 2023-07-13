import { BoxItem, ContentBox } from "../styles/App.style";
import { ScreenBox, SectionBox } from "../types/global.type";


export function  BoxDisplay (props :{screenBox :ScreenBox,boxSize:string}){
    console.log (props.boxSize);
    return (

      <BoxItem boxSize={props.boxSize} >
        <img src={props.screenBox.img?.fr} alt={props.screenBox.alt?.fr} />
        <h1>{props.screenBox.title?.fr}</h1>
        <p>{props.screenBox.text?.fr} </p>
      </BoxItem>
    )
  }
 

export default function Content(props : SectionBox) {
const boxSize = (100/props.imgList.length)-5;

  return (
    <>
      <ContentBox>
      {
        props.imgList.map((enreg,index) => 
          <BoxDisplay 
            boxSize = {boxSize.toString()}
            key ={index} 
            screenBox={enreg}
            />
        )
      }
      </ContentBox>
    </>
  )
}

