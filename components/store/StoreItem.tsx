import { useRouter } from 'next/router';
import { Store } from '../../common/types';
import classes from './StoreItem.module.css';
import Card from '../ui/Card';

const StoreItem: React.FC<{store: Store}> = (props) => {
  const router = useRouter();

  function showDetailsHandler() {
    router.push('/isr/' + props.store.id);
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.store.image} alt={props.store.name} />
        </div>
        <div className={classes.content}>
          <h3>{props.store.name}</h3>
          <address>{props.store.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default StoreItem;
