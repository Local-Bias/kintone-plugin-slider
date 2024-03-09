import { useEffect, VFC } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { pluginConditionState, valueState } from '../states';
import { getCurrentRecord, setCurrentRecord } from '@konomi-app/kintone-utilities';

const Container: VFC = () => {
  const condition = useRecoilValue(pluginConditionState);
  const [value, setValue] = useRecoilState(valueState);

  useEffect(() => {
    if (!condition?.field) {
      return;
    }

    try {
      const { record } = getCurrentRecord();

      record[condition.field].value = String(value);

      setCurrentRecord({ record });
    } catch (error) {}
  }, [value]);

  return null;
};

export default Container;
