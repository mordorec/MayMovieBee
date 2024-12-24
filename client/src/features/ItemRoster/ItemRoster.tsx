import s from './ItemRoster.module.css';
import { FC } from 'react';

interface Item {
    id: number;
    name: string;
  }

interface ItemRosterProps<T> {
    items: T[];
    onRemove: (number: number) => void;
}

const ItemRoster: FC<ItemRosterProps<Item>> = ({ items, onRemove }) => (
    <div className={s.itemsRoster}>
        {items.map(item => (
            <div key={item.id} className={s.item}>
                <span className={s.name}>{item.name}</span>
                <button onClick={() => onRemove(item.id)} className={s.removeButton}>
                    Удалить
                </button>
            </div>
        ))}
    </div>
);

export default ItemRoster;