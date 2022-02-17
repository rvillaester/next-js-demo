import { Store } from '../../common/types';
import classes from './StoreDetail.module.css';

const StoreDetail: React.FC<{store: Store}> = (props) => {
  return (
    <section className={classes.detail}>
      <img
        src={props.store.image}
        alt={props.store.name}
      />
      <h1>{props.store.name}</h1>
      <address>{props.store.address}</address>
      <p>{props.store.description}</p>
    </section>
  );
}

export default StoreDetail;
