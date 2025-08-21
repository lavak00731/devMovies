
export interface BtnInterface {
    label:string, 
    hasIcon:boolean,
    iconRight: boolean, 
    type: "button" | "submit" | "reset",
    className: string,
    Icon?: React.ElementType, 
    isLabelVisible?:boolean,  
    ariaExpanded?: boolean,  
    ariaExpandedValue?: "true" | "false",
    onClick?: () => void,
    id?:string
}