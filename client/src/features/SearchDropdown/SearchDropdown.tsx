import { useState, useEffect } from 'react';
import s from './SearchDropdown.module.css';
import { SearchDropdownProps } from '../../shared/types/modal'
import { ChangeEvent } from 'react';

const SearchDropdown = <T extends { id: number; name: string }>({ 
    searchValue, 
    onSearchChange, 
    items, 
    onItemSelect, 
    placeholder 
}: SearchDropdownProps<T>) => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [filteredItems, setFilteredItems] = useState<T[]>([]);

    useEffect(() => {
        setFilteredItems(
            items.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
        );
    }, [searchValue, items]);

    const handleItemSelect = (item: T) => {
        onItemSelect(item)
        onSearchChange({ target: { value: item.name } } as ChangeEvent<HTMLInputElement>)
        setDropdownVisible(false)
    };

    return (
        <div>
            <input
                type="text"
                value={searchValue}
                onChange={onSearchChange}
                onFocus={() => setDropdownVisible(true)}
                placeholder={placeholder}
                className={s.inputField}
            />
            <div className={s.dropdown}>
                {isDropdownVisible && searchValue && (
                    <div className={s.dropdownMenu}>
                        {filteredItems.map(item => (
                            <div
                                key={item.id}
                                onMouseDown={() => handleItemSelect(item)}
                                className={s.dropdownItem}
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchDropdown;