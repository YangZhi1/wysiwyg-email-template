import { Button, Select, Space } from 'antd';
import { EComponents } from '../../../../types/components';
import { useState } from 'react';
import { componentsStore } from '../../../../store/componentsStore';

const AddComponentButton = () => {
  const [currentSelection, setCurrentSelection] = useState<EComponents>();

  const selectOptions = [
    {
      value: EComponents.TITLE,
      label: 'Title',
    },
    {
      value: EComponents.BODY,
      label: 'Body',
    },
  ];

  return (
    <Space>
      <Select
        style={{ width: '200px' }}
        options={selectOptions}
        onChange={setCurrentSelection}
      />
      <Button
        onClick={() => {
          if (!currentSelection) return;
          componentsStore.addComponents(currentSelection);
        }}
      >
        Add Component
      </Button>
    </Space>
  );
};

export default AddComponentButton;
