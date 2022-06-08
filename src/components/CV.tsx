import { useAppSelector } from "../hooks";


export default function CV() {
    const darkMode = useAppSelector((state) => state.darkMode.value);
    return (
        <div className={`items-center text-center text-gray-${darkMode ? 100 : 900}`}>CV</div>
    );
}