import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const ForwardRefChild = forwardRef(function ForwardRefChild(props, ref) {
    const inputRef = useRef(null);
    const [value, setValue] = useState("");


    //useImperativeHandle returns an imperative handle object which exposes specific methods to parent
    useImperativeHandle(ref, () => ({
        focusTheInput: () => {
            inputRef.current.focus();
        },
        clearInput: () => {
            setValue("");
        }
    }), [])

    const { label, ...otherProps } = props;
    return <label>
        {label}
        <input type="text" value={value} ref={inputRef} {...otherProps} onChange={(e) => setValue(e.target.value)} />
    </label>
})

export default ForwardRefChild