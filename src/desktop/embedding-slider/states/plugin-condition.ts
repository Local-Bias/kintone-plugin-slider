import { atom } from 'recoil';

const state = atom<Plugin.Condition | null>({
  key: 'pluginConditionState',
  default: null,
});

export default state;
