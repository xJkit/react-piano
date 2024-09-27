export interface KeyProps {
  naturalKeyWidth: number;
  midiNumber: number;
  noteRange: { first: number; last: number };
  active: boolean;
  accidental: boolean;
  disabled: boolean;
  onPlayNoteInput: (midiNumber: number) => void;
  onStopNoteInput: (midiNumber: number) => void;
  gliss: boolean;
  useTouchEvents: boolean;
  children: React.ReactNode;
}