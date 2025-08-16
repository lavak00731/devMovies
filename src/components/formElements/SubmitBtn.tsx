import type { BtnInterface } from "../../types/BtnInterface"

export const SubmitBtn:React.FC<BtnInterface> = ({label, hasIcon, iconRight, Icon, isLabelVisible }) => {
    if(iconRight) {
         return (
            <button type="submit">
                {
                hasIcon && isLabelVisible && Icon ? (
                    <>                   
                    {label}
                     <Icon />
                    </>
                ) : !isLabelVisible && Icon ? (
                    <>
                    <Icon />
                    <span className="sr-only">{label}</span>
                    </>
                ) : (
                    label
                )
                }
            </button>
        )
    }
  return (
    <button type="submit">
        {
          hasIcon && isLabelVisible && Icon ? (
            <>
              <Icon />
              {label}
            </>
          ) : !isLabelVisible && Icon ? (
            <>
              <Icon />
              <span className="sr-only">{label}</span>
            </>
          ) : (
            label
          )
        }
    </button>
  )
}
