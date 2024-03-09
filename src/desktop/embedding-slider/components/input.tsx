import React, { FC } from 'react';
import { pluginConditionState, valueState } from '../states';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Slider } from '@mui/material';

type ContainerProps = Readonly<{}>;
type Props = ContainerProps &
  Readonly<{
    condition: Plugin.Condition;
    value: number;
    onValueChange: (v: number) => void;
  }>;

const Component: FC<Props> = ({ condition, value, onValueChange }) => (
  <div>
    <Slider
      sx={{ width: 200 }}
      value={value}
      onChange={(_, value) => onValueChange(value as number)}
      valueLabelDisplay='auto'
      step={condition.usesStep && condition.step ? condition.step : 1}
      marks={condition.usesStep}
      min={condition.min}
      max={condition.max}
    />
  </div>
);

const Container: FC<ContainerProps> = () => {
  const condition = useRecoilValue(pluginConditionState);
  const [value, setValue] = useRecoilState(valueState);

  const onValueChange = (v: number) => {
    setValue(v);
  };

  return condition ? <Component {...{ condition, value, onValueChange }} /> : null;
};

export default Container;
