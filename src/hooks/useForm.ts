//From this tutorial: (https://dev.to/karan316/build-forms-using-react-the-easy-way-with-typescript-46bh)
import {useState} from "react";


// useForm functional componen
export const useForm = (callback:any, initialState={
    questionText:"",
    answer_1: "",
    answer_2: "",
    answer_3: "",
    answer_4: "",
    checkbox_1:'',
    checkbox_2:'',
    checkbox_3:'',
    checkbox_4:'',

}) => {
    const [values, setValues] = useState(initialState)

    // onChange
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]:
            event.target.value });
    };

    // onSubmit
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await callback(); // triggering the callback
    };

    // return values
    return {
        onChange,
        onSubmit,
        values,
    };
}
