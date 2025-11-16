export type NoteStatus = "Open" | "In Progress" | "Done";

export interface INote {
  id: string;
  title: string;
  description: string;
  status: NoteStatus;
  updatedAt: string; // ISO string
  photoUri?: string;
}