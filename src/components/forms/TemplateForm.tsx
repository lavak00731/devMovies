import { ToggleComponent } from "../formElements/ToggleComponent";
import { SubmitBtn } from "../formElements/SubmitBtn";
import { Moon } from 'lucide-react';
export const TemplateForm = () => {
  return (
    <form action="">
        <ToggleComponent label={"Swit to Dark Mode"} />
        <SubmitBtn 
          label="Change Theme" 
          hasIcon={true} 
          iconRight={true}
          type={"submit"}
          Icon={() => <Moon />} 
          isLabelVisible={true}/>
    </form>
  )
}
