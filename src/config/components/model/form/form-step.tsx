import { getConditionPropertyState } from '@/config/states/plugin';
import { RecoilNumber } from '@konomi-app/kintone-utilities-react';
import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';

const Component: FC = () => {
  const usesStep = useRecoilValue(getConditionPropertyState('usesStep'));

  if (!usesStep) {
    return null;
  }

  return <RecoilNumber state={getConditionPropertyState('step')} label='ステップ' />;
};

export default Component;
