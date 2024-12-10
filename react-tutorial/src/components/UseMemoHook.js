import { useMemo, useState } from "react";

function getFactorialOf(num) {
    console.log('get factorial called');
    if (num <= 0) return 1;
    return num * getFactorialOf(num - 1);
}


export default function UseMemoHook() {
    const [number, setNumber] = useState(1);
    const [render, forceRerender] = useState(0);
    const factorial = useMemo(() => getFactorialOf(number), [number]);
    // const factorial = getFactorialOf(number)

    return <div>
        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
        <p>Factorial:{factorial}</p>
        <p>Calculate factorial</p>
        <button onClick={() => forceRerender(prev => prev + 1)}>Force Rerender</button>
    </div>

}