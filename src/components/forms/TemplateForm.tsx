import { ToggleComponent } from "../formElements/ToggleComponent";
import { Btn } from "../formElements/Btn";
import { Moon } from 'lucide-react';
import ElementStyle from "../../styles/elements/ElementsStyle";
export const TemplateForm = () => {
  return (
    <form className="flex gap-1.5" action="">
        <ToggleComponent label={"Switch to Dark Mode"} />
        <Btn 
          className={ElementStyle.btn}
          label="Confirm" 
          hasIcon={true} 
          iconRight={true}
          type={"submit"}
          Icon={() => <Moon />} 
          isLabelVisible={true}/>
    </form>
  )
}
