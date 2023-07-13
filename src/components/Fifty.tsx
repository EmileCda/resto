

import { SectionBox } from "../types/global.type";

// export function FiftyItem (props :ScreenBox){
//   console.log (props.boxSize);
//   return (
//     <BoxItem boxSize={props.boxSize}>
//       <img src={props?.img} alt={props?.alt} />
//       <h1>{props.title}</h1>
//       <p>{props.text} </p>
//     </BoxItem>
//   )
// }


export default function Fifty(props : SectionBox) {

// const boxSize = 100/props.imgList.length;
// console.log (boxSize);

  return (
    <>

      {/* <SectionContainer>
        <Title> {props.title}  </Title>

        <Content>

         {
          props.imgList.map((enreg,index) => 
          <FiftyItem 
            boxSize = {boxSize}
            key ={index} 
            img={enreg.img?.fr}
            alt={enreg.alt?.fr}
            title={enreg.title?.fr}
            text={enreg.text?.fr} />
          )}
 
        </Content>
      </SectionContainer> */}

    </>


  )

}

