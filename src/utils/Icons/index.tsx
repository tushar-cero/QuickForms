import { createElement } from 'react';
import { ICON_LIBRARY } from './icons';

interface IDynamicIcon {
  name: keyof typeof ICON_LIBRARY;
}

export const DynamicIcon = (props: IDynamicIcon) => {
  const { name } = props;
  const IconComponent = ICON_LIBRARY[name] || ICON_LIBRARY['SettingsIcon'];
  return createElement(IconComponent);
};
