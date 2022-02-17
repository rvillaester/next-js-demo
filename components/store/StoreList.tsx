import React from 'react';
import { Store } from '../../common/types';
import StoreItem from './StoreItem';
import classes from './StoreList.module.css';

type StoreProps = {
    stores: Store[]
}

const StoreList: React.FC<StoreProps> = (props) => {
  return (
    <ul className={classes.list}>
      {props.stores.map((store) => (
        <StoreItem
          key = {store.id}
          store = {store}
        />
      ))}
    </ul>
  );
}

export default StoreList;
