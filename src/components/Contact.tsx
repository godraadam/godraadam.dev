import { useAppSelector } from "../hooks";


export default function Contact() {
    const darkMode = useAppSelector((state) => state.darkMode.value);
    return (
        <div className={`text-center text-gray-${darkMode ? 100 : 900}`}>Contact</div>
    );
}