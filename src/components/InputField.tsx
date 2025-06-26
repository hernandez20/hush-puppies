interface InputFieldProps {
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit?: () => void;
    type?: "text" | "email";
    buttonText?: string;
    icon?: React.ReactNode;
}

export default function InputField({placeholder, value, onChange, onSubmit, type = "text", buttonText, icon}: InputFieldProps) {
    return (
        <div className="flex border border-gray-400 text-sm w-full sm:w-auto">
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="px-3 py-1 outline-none flex-grow"
            />
            <button
                onClick={onSubmit}
                className="px-3 flex items-center justify-center"
            >
                {icon ?? buttonText ?? "icon"}
            </button>
        </div>
    );
};

