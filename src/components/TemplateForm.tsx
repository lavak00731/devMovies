import { ToggleComponent } from "./formElements/ToggleComponent";
import { SubmitBtn } from "./formElements/SubmitBtn";
import { SendHorizontal } from 'lucide-react';
export const TemplateForm = () => {
  return (
    <form action="">
        <ToggleComponent label={"Swit to Dark Mode"} />
        <SubmitBtn 
          label="Submit" 
          hasIcon={true} 
          iconRight={true}
          Icon={() => <SendHorizontal />} 
          isLabelVisible={false}/>
    </form>
  )
}
