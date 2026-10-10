import { TraitProps } from "@/lib/general_info";
import Link from "next/link";

interface TraitCardProps extends TraitProps {}

export default function TraitCard(props: TraitCardProps) {
  return (
    <Link href={props.href}>
      <div className="trait-c-card">
        <h4>{props.title}</h4>
      </div>
    </Link>
  );
}
