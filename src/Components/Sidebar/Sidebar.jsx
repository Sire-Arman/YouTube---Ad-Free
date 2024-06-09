import React from "react";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import cameron from "../../assets/cameron.png";
import simon from "../../assets/simon.png";
import megan from "../../assets/megan.png";
import tom from "../../assets/tom.png";
import "./Sidebar.css";
import Sidelink from "./Sidelink";
const Sidebar = ({ sidebar, category, setCategory }) => {
  return (
    <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
      <div className="shortcut-link">
        <Sidelink
          img={home}
          name={"Home"}
          category={category}
          changeCategory={(id)=>setCategory(id)}
          id={0}
        />
        <Sidelink
          img={game_icon}
          name={"Game"}
          category={category}
          changeCategory={(id)=>setCategory(id)}
          id={20}
        />
        <Sidelink
          img={automobiles}
          name={"automobiles"}
          category={category}
          changeCategory={(id)=>setCategory(id)}
          id={2}
        />
        <Sidelink
          img={sports}
          name={"sports"}
          category={category}
          changeCategory={(id)=>setCategory(id)}
          id={17}
        />
        <Sidelink
          img={music}
          name={"music"}
          category={category}
          changeCategory={(id)=>setCategory(id)}
          id={24}
        />
        <Sidelink
          img={entertainment}
          name={"entertainment"}
          category={category}
          changeCategory={(id)=>setCategory(id)}
          id={28}
        />
        <Sidelink
          img={tech}
          name={"tech"}
          category={category}
          changeCategory={(id)=>setCategory(id)}
          id={10}
        />
        <Sidelink
          img={blogs}
          name={"blogs"}
          category={category}
          changeCategory={(id)=>setCategory(id)}
          id={22}
        />
        <Sidelink
          img={news}
          name={"news"}
          category={category}
          changeCategory={(id)=>setCategory(id)}
          id={25}
        />
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>

        <Sidelink img={jack} name={"PewDiePie"} />
        <Sidelink img={cameron} name={"MrBeast"} />
        <Sidelink img={tom} name={"Sevou"} />
        <Sidelink img={megan} name={"ImagineDragons"} />
        <Sidelink img={simon} name={"TheWeeknd"} />
      </div>
    </div>
  );
};

export default Sidebar;
