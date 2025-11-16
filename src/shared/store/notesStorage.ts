import AsyncStorage from "@react-native-async-storage/async-storage";
import { INote } from "@/src/shared/types/note";

const STORAGE_KEY = "notes:v1";

function safeParse<T>(raw: string | null): T | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export async function getNotes(): Promise<INote[]> {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  const parsed = safeParse<INote[]>(raw);
  return parsed ?? [];
}

export async function setNotes(notes: INote[]): Promise<void> {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

export async function getNote(id: string): Promise<INote | undefined> {
  const notes = await getNotes();
  return notes.find((n) => n.id === id);
}

export async function upsertNote(note: INote): Promise<void> {
  const notes = await getNotes();
  const idx = notes.findIndex((n) => n.id === note.id);
  if (idx >= 0) {
    notes[idx] = note;
  } else {
    notes.push(note);
  }
  await setNotes(notes);
}

export async function deleteNote(id: string): Promise<void> {
  const notes = await getNotes();
  const next = notes.filter((n) => n.id !== id);
  await setNotes(next);
}

export async function seedIfEmpty(): Promise<void> {
  const existing = await AsyncStorage.getItem(STORAGE_KEY);
  if (existing) return;
  const now = new Date().toISOString();
  const seed: INote[] = [
    {
      id: "seed-1",
      title: "Replace filter gasket",
      description: "Observed minor leak. Replace and retest.",
      status: "Open",
      updatedAt: now,
    },
    {
      id: "seed-2",
      title: "HVAC inspection",
      description: "Clean vents; check thermostat calibration.",
      status: "In Progress",
      updatedAt: now,
    },
  ];
  await setNotes(seed);
}

export function generateId(): string {
  // Simple ID generator without extra deps
  return `note-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}