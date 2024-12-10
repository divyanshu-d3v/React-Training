import { useTheme } from "./ContextProvider";

export default function ChildComp() {
    const { theme, toggleTheme } = useTheme();
    console.log(`theme:`, theme);
    return <>
        <p>Child</p>
        <button onClick={toggleTheme}>Toggle theme</button>
    </>
}