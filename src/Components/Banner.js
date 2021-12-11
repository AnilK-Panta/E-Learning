import "./banner.css";
import EndCall from "./EndCall";
import PlusSvg from "./PlusSvg";
import UpButten from "./UpButten";
export default function Banner() {
  return (
    <div className="bannerWrap maxWidthHold">
      <PlusSvg />
      <div className="teachingKidsWrap">
        <div className="teachingKids">
          <img
            src="./image/teaching.png"
            className="teachingImg"
            alt="teaching"
          ></img>
          <div className="kidImgWrap">
            <div
              className="littleKid"
              style={{ backgroundImage: "url(./image/littleKid.png)" }}
            ></div>
          </div>
          <EndCall />
          <UpButten />
        </div>
      </div>
    </div>
  );
}
