import React from "react";

function UseCallbackHook({ handleClick }) {
    console.log(`child rerendered`);
    return <div>
        <button onClick={handleClick}>Increase count</button>
    </div>
}

export default React.memo(UseCallbackHook)