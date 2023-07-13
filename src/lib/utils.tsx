import { PageLabel, jsonNode } from "../types/global.type";

export function jsonLabel (labelList : PageLabel, key : string) : jsonNode | undefined{

	return labelList.find((jNode: jsonNode) => jNode.name === key)


}
