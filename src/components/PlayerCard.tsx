import type { RosterMember } from '../data/players';

interface PlayerCardProps {
  member: RosterMember;
  position: string;
}

export function PlayerCard({ member, position }: PlayerCardProps) {
  return (
    <article className={`roster-slide ${position}`} aria-hidden={position === 'hidden' || position === 'prev3' || position === 'next3'}>
      <img src={member.image} alt={member.name} className="roster-slide__image" draggable={false} />
      <div className="roster-slide__details">
        <div className="roster-slide__name">{member.name}</div>
        <div className="roster-slide__role">
          {member.number !== undefined ? `#${member.number} · ${member.position}` : member.position}
        </div>
      </div>
    </article>
  );
}
