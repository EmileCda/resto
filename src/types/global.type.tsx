
export enum Lang { FR= 'fr',EN='en',ES='es',LINK='link'}

export const currentLang : Lang = Lang.FR;

export type jsonNode ={
	name : string| undefined,
	fr: string| undefined,
	en :string| undefined,
	es: string| undefined,
	link : string| undefined
}


export type FiftyDataZ = {
	img : jsonNode | undefined,
	alt : jsonNode | undefined,
	title : jsonNode | undefined,
	text : jsonNode | undefined,
	}

	export type PageLabel= jsonNode[];

	export type ScreenBox = {
		
		img : jsonNode | undefined,
		alt : jsonNode | undefined,
		title : jsonNode | undefined,
		text : jsonNode | undefined,
	}
	
	
	export type SectionBox = {
		title: string| undefined,
		imgList : ScreenBox[],
	}