import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { ResponsiveContainer, Label } from "recharts";

const Big5Chart = () => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (user.bigFive) {
      const newData = Object.entries(user.bigFive).map(([category, result]) => {
        return { name: category, Eredmény: result.score };
      });
      setData(newData);
    }
  }, [user]);

  const CustomTooltip = ({ active, payload, label }) => {
    const descriptions = {
      Lelkiismeretesség: "A lelkiismeretesség a megbízhatóság, a pontosság, a szervezettség és az elkötelezettség jellemzőit írja le. Magas pontszám esetén a személy szervezett, megbízható, és komolyan veszi a kötelezettségeit. Ilyen tulajdonságok különösen hasznosak lehetnek adminisztrációs vagy menedzsment pozíciókban.",
      Barátságosság: "A barátságosság azt írja le, mennyire vagyunk kedvesek, segítőkészek, és milyen mértékben keressük mások társaságát. Egy magas pontszám a szociabilitást, az empátiát és a barátságosságot jelzi. Ezek a tulajdonságok például az ügyfélszolgálati munkakörökben különösen hasznosak lehetnek.",
      Érzelmi_stabilitás: "Az érzelmi stabilitás azt jelenti, mennyire képes valaki kezelni az érzelmeit, és milyen mértékben hatnak rá a negatív érzelmek. Magas pontszám esetén a személy jól kezeli a stresszt és stabil a hangulata. Ez a tulajdonság előnyös lehet például egészségügyi vagy kríziskezelési szakmákban.",
      Nyitottság: "A tapasztalatra való nyitottság azt jelenti, mennyire vagyunk nyitottak az új ötletekre, művészeti élményekre, és mennyire vagyunk kreatívak. Magas érték esetén a személy nyitott az új élményekre, kíváncsi és kreatív. Ez a tulajdonság előnyös lehet például művészeti vagy tudományos munkakörökben.",
      Extraverzió: "Az extraverzió azt írja le, mennyire vagyunk társaságkedvelők, energikusak és milyen mértékben élvezzük a figyelem középpontjában lenni. Magas pontszám esetén a személy energikus, társaságkedvelő és élvezi a középpontban lenni. Ilyen tulajdonságok előnyösek lehetnek például értékesítési vagy PR munkakörökben."
    }
    

    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">
            <b>{label}</b>
          </p>
          <p className="intro">{`Eredmény: ${payload[0].value}`}</p>
          <p className="desc">{descriptions[label.replace(/ /g, "_")]}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="skills-chart-container">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ left: 40, bottom: 40 }}>
          <CartesianGrid className="cartesian-grid" strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            angle={-50}
            textAnchor="end"
            tick={{ fontSize: 12 }}
            height={70}
          />
          <YAxis domain={[0, 8]} tick={{ fontSize: 12 }}>
            <Label
              value="Eredmény"
              angle={-90}
              position="insideLeft"
              style={{ textAnchor: "middle" }}
            />
          </YAxis>
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ className: "tooltip-cursor" }}
          />
          <Bar className="bar" dataKey="Eredmény" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Big5Chart;
