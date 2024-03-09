import { IconButton, Skeleton, Tooltip } from '@mui/material';
import React, { ChangeEventHandler, FC, memo, Suspense } from 'react';
import { useRecoilCallback, useRecoilValue } from 'recoil';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { produce } from 'immer';
import { RecoilFieldSelect } from '@konomi-app/kintone-utilities-react';

import { appFieldsState } from '../../../states/kintone';
import { fieldsState, getConditionPropertyState } from '../../../states/plugin';

const Component: FC = () => {
  const field = useRecoilValue(getConditionPropertyState('field'));

  const onFieldChange = useRecoilCallback(
    ({ set }) =>
      (fieldCode: string) => {
        set(fieldsState, fieldCode);
      },
    []
  );

  return (
    <div className='flex flex-col gap-4'>
      <RecoilFieldSelect state={appFieldsState} onChange={onFieldChange} fieldCode={field} />
    </div>
  );
};

const Placeholder: FC = () => (
  <div className='flex flex-col gap-4'>
    {new Array(3).fill('').map((_, i) => (
      <div key={i} className='flex items-center gap-2'>
        <Skeleton variant='rounded' width={400} height={56} />
        <Skeleton variant='circular' width={24} height={24} />
        <Skeleton variant='circular' width={24} height={24} />
      </div>
    ))}
  </div>
);

const Container: FC = () => (
  <Suspense fallback={<Placeholder />}>
    <Component />
  </Suspense>
);

export default memo(Container);
