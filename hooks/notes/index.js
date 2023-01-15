import { useEffect, useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";

export function useNotes(storageKey) {
    const [notes, setNotes] = useState([])

    const { getItem, setItem } = useAsyncStorage(storageKey);

    const readNotes = async () => {
        const item = await getItem();
        setNotes(item !== null ? JSON.parse(item) : []);
    };

    const writeNotes = async (newValue) => {
        await setItem(JSON.stringify(newValue));
        setNotes(newValue);
    };

    useEffect(() => {
        readNotes();
    }, []);

    return { notes, setNotes, readNotes, writeNotes }
}