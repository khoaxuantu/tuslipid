import { TraitProps } from "@/lib/general_info";
import Link from "next/link";
import "./card.scss";

interface TraitCardProps extends TraitProps {}

export default function TraitCard(props: TraitCardProps) {
  return (
    <Link href={props.href}>
      <div className="trait-card">
        <h4>{props.title}</h4>
      </div>
    </Link>
  );
}
