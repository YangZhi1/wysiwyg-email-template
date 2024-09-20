import { observer } from 'mobx-react';
import './index.css';
import { componentsStore } from '../../../store/componentsStore';
import ViewTitle from './Title';
import ViewBody from './Body';

const View = () => {
  return (
    <div className="viewContainer">
      <h1>View</h1>
      {componentsStore.viewComponents?.map((Component) => Component)}
    </div>
  );
};

export default observer(View);

export { ViewTitle, ViewBody };
