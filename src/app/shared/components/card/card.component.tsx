import './card.component.scss';
import '../../models/card.model';
import Image from 'next/image';
import { Card } from '../../models/card.model';

interface Props {
  card: Card;
}

export default function CardComponent({ card }: Props) {
  return (
    <div className="card-container">
      <Image src={card.name} alt="Card image" />
      <span>{card.name}</span>
    </div>
  );
}
