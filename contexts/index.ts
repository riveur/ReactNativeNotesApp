import { createContext } from "react";
import { Note } from '../hooks/notes';

export type TApp = {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
    readNotes: () => Promise<void>,
    writeNotes: (newValue: Note[]) => Promise<void>
};

export const AppContext = createContext<TApp>({
    notes: [],
    setNotes: () => { },
    readNotes: async () => { },
    writeNotes: async () => { }
});