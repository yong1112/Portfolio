import { Switch } from 'antd';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isHobbyMode, toggleMode } = useTheme();

  return (
    <Switch
      checked={isHobbyMode}
      onChange={toggleMode}
      size="large"
      style={{
        backgroundColor: isHobbyMode ? '#FFA5C9' : '#9A0000',
      }}
    />
  );
};

export default ThemeToggle;