import { ReactNode } from "react";
import "./seemore.css";

type SeeMoreProps = {
  title: ReactNode;
}

export function SeeMore(props: SeeMoreProps){
  return (
    <>
      <button className="see-more">
        <p>{props.title}</p>
      </button>
    </>
  )
}