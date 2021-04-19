import React from 'react';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';

import readme from './readme.md';

export default {
  title: 'Select',
  decorators: [withKnobs],
  parameters: {
    notes: { markdown: readme },
  },
};

export const defaultSelect = () => (
  <div style={{ width: '312px' }}>
    <bds-select
      value={text('value', null)}
      danger={boolean('danger', false)}
      disabled={boolean('disabled', false)}
      label={text('label', 'label')}
      icon={text('icon', 'true')}
      options-position={select('options position', { Bottom: 'bottom', Top: 'top' })}
      size={select('size', { Standard: 'standard', Short: 'short' })}
      fixed-label={boolean('fixed label', false)}
      placeholder={text('placeholder', 'Select..')}
    >
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-select>
  </div>
);

export const shortSelect = () => (
  <div style={{ width: '312px' }}>
    <bds-select size="short" label="Short select" placeholder="Select...">
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-select>
  </div>
);

export const iconSelect = () => (
  <div style={{ width: '312px' }}>
    <bds-select icon="favorite" label="User" placeholder="Select...">
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-select>
  </div>
);

export const selectedSelect = () => (
  <div style={{ width: '312px' }}>
    <bds-select value="2" placeholder="Select...">
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-select>
    <br />
    <bds-select disabled value="2" placeholder="Select...">
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-select>
  </div>
);

export const disabledSelect = () => (
  <div style={{ width: '312px' }}>
    <bds-select icon="favorite" disabled placeholder="Select...">
      <bds-select-option value="1">Millie Bobby</bds-select-option>
      <bds-select-option value="2">Finn Wolfhard</bds-select-option>
      <bds-select-option value="3">David Harbour</bds-select-option>
      <bds-select-option value="4">Gaten Matarazzo</bds-select-option>
      <bds-select-option value="5">Caleb McLaughlin</bds-select-option>
      <bds-select-option value="6">Noah Schnapp</bds-select-option>
    </bds-select>
  </div>
);

export const selectWithIconOnSlot = () => (
  <div style={{ width: '312px' }}>
    <bds-select placeholder="Select..." label="Permissão">
      <bds-select-option value="1" slot-align="flex-start" title-text="Convidado">
        <bds-icon slot="input-left" name="eye-open" size="medium" color="#F66689"></bds-icon>
        Apenas visualiza informações do contrato.
      </bds-select-option>
      <bds-select-option value="2" slot-align="flex-start" title-text="Membro">
        <bds-icon slot="input-left" name="edit" size="medium" color="#F9B42F"></bds-icon>
        Cria e edita chatbots, mas não gerencia os membros do contrato.
      </bds-select-option>
      <bds-select-option value="3" slot-align="flex-start" title-text="Admin">
        <bds-icon slot="input-left" name="avatar-user" size="medium" color="#2CC3D5"></bds-icon>
        Edita todos os dados do contrato, gerencia membros, cria e edita chatbots.
      </bds-select-option>
    </bds-select>
  </div>
);
