export type RosterRole = 'player' | 'coach' | 'staff';

export interface RosterMember {
  id: string;
  name: string;
  role: RosterRole;
  position: string;
  number?: number;
  image: string;
}

export const roster: RosterMember[] = [
  { id: 'tessa-morgan', name: 'Tessa Morgan', role: 'player', position: 'Setter', number: 1, image: `${import.meta.env.BASE_URL}players/player1.png` },
  { id: 'emi-nakamura', name: 'Emi Nakamura', role: 'player', position: 'Libero', number: 3, image: `${import.meta.env.BASE_URL}players/player2.png` },
  { id: 'nia-robinson', name: 'Nia Robinson', role: 'player', position: 'Outside Hitter', number: 6, image: `${import.meta.env.BASE_URL}players/player3.png` },
  { id: 'brooke-sullivan', name: 'Brooke Sullivan', role: 'player', position: 'Middle Blocker', number: 10, image: `${import.meta.env.BASE_URL}players/player4.png` },
  { id: 'rowan-hayes', name: 'Rowan Hayes', role: 'player', position: 'Outside Hitter', number: 13, image: `${import.meta.env.BASE_URL}players/player5.png` },
  { id: 'priya-shah', name: 'Priya Shah', role: 'player', position: 'Setter', number: 15, image: `${import.meta.env.BASE_URL}players/player6.png` },
  { id: 'claire-bennett', name: 'Claire Bennett', role: 'player', position: 'Opposite', number: 17, image: `${import.meta.env.BASE_URL}players/player7.png` },
  { id: 'hana-park', name: 'Hana Park', role: 'player', position: 'Defensive Specialist', number: 19, image: `${import.meta.env.BASE_URL}players/player8.png` },
  { id: 'amara-lewis', name: 'Amara Lewis', role: 'player', position: 'Middle Blocker', number: 20, image: `${import.meta.env.BASE_URL}players/player9.png` },
  { id: 'sydney-walsh', name: 'Sydney Walsh', role: 'player', position: 'Libero', number: 22, image: `${import.meta.env.BASE_URL}players/player10.png` },
  { id: 'marisol-reyes', name: 'Marisol Reyes', role: 'player', position: 'Outside Hitter', number: 24, image: `${import.meta.env.BASE_URL}players/player11.png` },
  { id: 'quinn-foster', name: 'Quinn Foster', role: 'player', position: 'Middle Blocker', number: 27, image: `${import.meta.env.BASE_URL}players/player12.png` },
  { id: 'lauren-mitchell', name: 'Lauren Mitchell', role: 'coach', position: 'Head Coach', image: `${import.meta.env.BASE_URL}players/coach1.png` },
  { id: 'daniel-kim', name: 'Daniel Kim', role: 'coach', position: 'Assistant Coach', image: `${import.meta.env.BASE_URL}players/coach2.png` },
  { id: 'rachel-moreno', name: 'Rachel Moreno', role: 'coach', position: 'Assistant Coach', image: `${import.meta.env.BASE_URL}players/coach3.png` },
  { id: 'marcus-reed', name: 'Marcus Reed', role: 'staff', position: 'Athletic Trainer', image: `${import.meta.env.BASE_URL}players/trainer1.png` },
];
