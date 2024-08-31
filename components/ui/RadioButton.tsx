export interface RadioButtonProps {
    radioGroupName: string;
    radioProperty: string;
    text: string;
}

export default function RadioButton(props: RadioButtonProps) {
    return (
        <>
            <input
                type="radio"
                htmlFor={props.radioProperty}
                value={props.radioProperty}
                id={props.radioProperty}
                name={props.radioGroupName}
                className="peer hidden"
            />

            <label
                className="border rounded peer-checked:border-blue-600 px-2 py-2 cursor-pointer"
                for={props.radioProperty}
            >
                {props.radioProperty}
            </label>
        </>
    );
}
