export type KeyValue = {
  key : string,
  value : string
}

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