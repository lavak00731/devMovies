
export interface BtnInterface {
    label:string, 
    hasIcon:boolean,
    iconRight: boolean, 
    type: "button" | "submit" | "reset",
    Icon?: React.ElementType, 
    isLabelVisible?:boolean,    
}