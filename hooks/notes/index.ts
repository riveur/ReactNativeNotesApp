import { useEffect, useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

export type Note = {
    id: string,
    title: string,
    description: string,
    bgColor: string
};

export const useNotes = (storageKey: string) => {
    const [notes, setNotes] = useState<Note[]>([])

    const { getItem, setItem } = useAsyncStorage(storageKey);

    const readNotes = async () => {
        const item = await getItem();
        setNotes(item !== null ? JSON.parse(item) : []);
    };

    const writeNotes = async (newValue: Note[]) => {
        await setItem(JSON.stringify(newValue));
        setNotes(newValue);
    };

    useEffect(() => {
        readNotes();
    }, []);

    return { notes, setNotes, readNotes, writeNotes }
}