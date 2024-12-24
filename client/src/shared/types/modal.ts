import { ReactNode, ChangeEvent } from 'react';

export interface ModalProps {
    show: boolean;
    onHide: () => void;
}

export interface CreateModalProps extends Omit<ModalProps, 'show'> {
    title: string;
    children: ReactNode;
    onConfirm: () => void;
}

export interface SearchDropdownProps<T> {
    searchValue: string;
    onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
    items: T[];
    onItemSelect: (item: T) => void;
    placeholder: string;
}