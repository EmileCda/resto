import { Content, FiftyContainer, FiftyItemDiv, Title } from "../styles/Fifty.style";
import { FiftyData, ScreenBox, SectionBox } from "../types/global.type";



export function OneThirdItem (props :ScreenBox){
  return (
    <FiftyItemDiv >
      <img src={props?.img} alt={props?.alt} />
      <h1>{props.title}</h1>
      <p>{props.text} </p>
    </FiftyItemDiv>
  )
}



export default function OneThird(props : SectionBox) {

console.log(props)

  return (
    <>

      <SectionContainer>
        <Title> {props.title}  </Title>

        <Content>
        {props.imgList.map((enreg) => {
           <OneThirdItem 
           img={enreg.img?.fr} 
           alt={enreg.alt?.fr} 
           title={enreg.title?.fr} 
           text={enreg.text?.fr} 
         />

        })
      }
      
        </Content>
      </SectionContainer>

    </>


  )

}