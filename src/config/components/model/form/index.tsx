import React, { FC } from 'react';

import {
  PluginFormSection,
  PluginFormTitle,
  PluginFormDescription,
  RecoilText,
  RecoilSwitch,
  RecoilNumber,
} from '@konomi-app/kintone-utilities-react';
import FieldsForm from './form-fields';
import DeleteButton from './condition-delete-button';
import { getConditionPropertyState } from '@/config/states/plugin';
import StepForm from './form-step';
import Demo from './demo';

const Component: FC = () => (
  <div className='p-4'>
    <PluginFormSection>
      <PluginFormTitle>対象フィールド</PluginFormTitle>
      <PluginFormDescription last>
        スライダーによって変更された値を格納するフィールドを選択してください。
      </PluginFormDescription>
      <FieldsForm />
    </PluginFormSection>
    <PluginFormSection>
      <PluginFormTitle>スライダーの最小値と最大値</PluginFormTitle>
      <PluginFormDescription last>
        表示されるスライダーの最小値と最大値を設定します。
      </PluginFormDescription>
      <div className='flex gap-4'>
        <RecoilNumber
          state={getConditionPropertyState('min')}
          label='最小値'
          placeholder='テキストを入力'
          width={100}
        />
        <RecoilNumber
          state={getConditionPropertyState('max')}
          label='最大値'
          placeholder='テキストを入力'
          width={100}
        />
      </div>
    </PluginFormSection>
    <PluginFormSection>
      <PluginFormTitle>スライダーの単位</PluginFormTitle>
      <PluginFormDescription last>
        スライダーを使って設定できる値の単位を設定します。
      </PluginFormDescription>
      <RecoilSwitch
        state={getConditionPropertyState('usesStep')}
        label='スライダーで操作できる単位を設定する'
      />
      <div className='mt-2'>
        <StepForm />
      </div>
    </PluginFormSection>
    <PluginFormSection>
      <PluginFormTitle>サンプル</PluginFormTitle>
      <PluginFormDescription last>
        実際に編集画面で表示されるスライダーのサンプルです。
      </PluginFormDescription>
      <Demo />
    </PluginFormSection>
    <DeleteButton />
  </div>
);

export default Component;
