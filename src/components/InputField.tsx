import type { InputFieldProps } from "@/types/types";

export default function InputField({placeholder, value, onChange, onSubmit, type = "text", buttonText, icon}: InputFieldProps) {
    return (
        <div className="flex border border-gray-400 text-sm w-full sm:w-auto">
            <input className="px-3 py-1 outline-none flex-grow" type={type} placeholder={placeholder} value={value} onChange={onChange} />
            <button  className="px-3 flex items-center justify-center" onClick={onSubmit} >
                {icon ?? buttonText ?? "icon"}
            </button>
        </div>
    );
};

