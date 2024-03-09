import { getConditionPropertyState } from '@/config/states/plugin';
import { Slider } from '@mui/material';
import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';

const Component: FC = () => {
  const max = useRecoilValue(getConditionPropertyState('max'));
  const min = useRecoilValue(getConditionPropertyState('min'));
  const usesStep = useRecoilValue(getConditionPropertyState('usesStep'));
  const step = useRecoilValue(getConditionPropertyState('step'));

  return (
    <Slider
      sx={{ width: 250 }}
      defaultValue={30}
      valueLabelDisplay='auto'
      step={usesStep ? step || 1 : 1}
      marks={usesStep}
      min={min}
      max={max}
    />
  );
};

export default Component;
