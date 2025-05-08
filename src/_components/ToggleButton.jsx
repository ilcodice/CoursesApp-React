    // ToggleButton.jsx
import { useTheme } from "./ThemeContext";

function ToggleButton() {
  const { toggleTheme } = useTheme();
  

  return (
    <button
      onClick={toggleTheme}
      className='ml-4 px-3 py-1 rounded-2xl bg-gray-700 text-white hover:bg-gray-600 transition'
    >
      Change Mode
    </button>

  );
}

export default ToggleButton;
