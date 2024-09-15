import { observer } from 'mobx-react';
import '../index.css';

const Title = ({ value }: { value: any }) => {
  return (
    <div className="viewTitleContainer">
      <h1>{value}</h1>
    </div>
  );
};

export default observer(Title);
