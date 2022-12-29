import { useContext } from 'react';
import { SettingsContext } from 'src/core/contexts/SettingsContext';

// ----------------------------------------------------------------------

const useSettings = () => useContext(SettingsContext);

export default useSettings;
