import React from 'react';
import { css } from '@emotion/css';
import App from './app';
import { manager } from '@/lib/event-manager';
import { getMetaFieldId_UNSTABLE, isMobile } from '@konomi-app/kintone-utilities';
import { restorePluginConfig } from '@/lib/plugin';
import { createRoot } from 'react-dom/client';

manager.add(['app.record.create.show', 'app.record.edit.show'], async (event) => {
  const config = restorePluginConfig();

  for (const condition of config.conditions) {
    if (!condition.field) {
      continue;
    }

    const fieldId = getMetaFieldId_UNSTABLE(condition.field);

    const wrapper =
      document.querySelector<HTMLDivElement>(`.value-${fieldId} > div`) ||
      document.querySelector<HTMLDivElement>(`.value-${fieldId}`);

    if (!wrapper) {
      return event;
    }

    if (!isMobile()) {
      const fieldWrapper = document.querySelector(`.field-${fieldId}`);

      if (fieldWrapper) {
        const width = fieldWrapper.clientWidth;

        fieldWrapper.classList.add(css`
          width: ${width + 250}px !important;
        `);
      }
    }

    wrapper.classList.add(css`
      display: flex;
      align-items: center;
      input {
        min-width: 60px;
      }
    `);

    const div = document.createElement('div');
    wrapper.prepend(div);
    div.classList.add(css`
      display: flex;
      position: relative;
      padding: 0 32px 0 24px;
    `);
    const root = createRoot(div);

    const fieldValue = event.record[condition.field].value;

    //@ts-expect-error
    const initialValue = isFinite(fieldValue) ? Number(fieldValue) : condition.min;

    root.render(<App {...{ condition, initialValue }} />);
  }

  return event;
});
