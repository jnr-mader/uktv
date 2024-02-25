import { Films } from "../../interfaces";
import CardTitle from "../cardTitle"
import ContentBlock from "../contentBlock"

export default function index(Props: Films) {
  return (
    <div className="card">
      <div className="innercard">
        <CardTitle mainTitle={"Film title"} subTitle={"Episode number"} mainTitleValue={Props.title} subTitleValue={Props.episode_id} />
        <ContentBlock contentTitle={"Director"} contentText={Props.director} />
        <ContentBlock contentTitle={"Producer"} contentText={Props.producer} />
        <ContentBlock contentTitle={"Release date"} contentText={Props.release_date} />
        <ContentBlock contentTitle={"Opening Crawl"} contentText={Props.opening_crawl} />           
      </div>      
    </div>
  )
}