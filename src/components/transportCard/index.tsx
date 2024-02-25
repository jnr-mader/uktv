import { Starships, Vehicles } from "../../interfaces";
import CardTitle from "../cardTitle"
import ContentBlock from "../contentBlock"

export default function index(Props: (Starships & Vehicles)) {
  return (
    <div className="card">
        <div className="innercard">
            <CardTitle mainTitle={"Transport name"} subTitle={"Transport model"} mainTitleValue={Props.name} subTitleValue={Props.model} />
            <ContentBlock contentTitle={"Manufacturer"} contentText={Props.manufacturer} />
            <ContentBlock contentTitle={"Cost"} contentText={Props.cost_in_credits} />
            <ContentBlock contentTitle={"Length"} contentText={Props.length} />
            <ContentBlock contentTitle={"Crew"} contentText={Props.crew} />
            <ContentBlock contentTitle={"Passengers"} contentText={Props.passengers} />
            <ContentBlock contentTitle={"Cargo capacity"} contentText={Props.cargo_capacity} />
        </div>
    </div>
  )
}