import { Button, Select, Space } from 'antd';
import { EComponentNameMap, EComponents } from 'src/types/components';
import { useState } from 'react';
import { componentsStore } from 'src/store/componentsStore';

const AddComponentButton = () => {
  const [currentSelection, setCurrentSelection] = useState<EComponents>();

  const selectOptions = Object.values(EComponents).map((component) => ({
    label: EComponentNameMap[component],
    value: component,
  }));

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
