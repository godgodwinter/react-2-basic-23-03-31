
import { atom } from 'recoil';

export const counterState = atom({
    key: 'counter',
    default: 0,
});