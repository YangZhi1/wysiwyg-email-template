import { observer } from 'mobx-react';
import './index.css';
import { componentsStore } from 'src/store/componentsStore';
import ViewTitle from './Title';

const View = () => {
  return (
    <div className="viewContainer">
      <h1>View</h1>
      {componentsStore.viewComponents?.map((Component) => Component)}
    </div>
  );
};

export default observer(View);

export { ViewTitle };
