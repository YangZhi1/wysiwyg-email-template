import { observer } from 'mobx-react';
import '../index.css';

const Body = ({ value }: { value: any }) => {
  return (
    <div className="viewBodyContainer">
      <h1>{value}</h1>
    </div>
  );
};

export default observer(Body);
