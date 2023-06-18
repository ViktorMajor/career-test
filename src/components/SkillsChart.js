import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import '../styles/chart.css';

const CustomTooltip = ({ active, payload, label }) => {
  const descriptions = {
    Kézügyesség: "A kézügyesség azt jelenti, hogy milyen hatékonyan és pontosan tudjuk használni a kezünket és az ujjainkat. Ha a pontszámod magas ebben a kategóriában, akkor olyan munkákban jeleskedhetsz, mint például az asztalos, szakács, vagy orvos.",
    Matematikai_képesség: "A matematikai képesség azt méri, mennyire tudsz jól és gyorsan számolni, illetve problémákat megoldani. Magas pontszám esetén lehet, hogy jól éreznéd magad mérnöki, kutató, vagy pénzügyi szakmában.",
    Problémamegoldás: "A problémamegoldás a kreatív gondolkodásra, logikára és megoldás-orientáltságra utal. Magas pontszám esetén a tanácsadói, menedzsment, vagy informatikai szakmában lelhetsz otthonra.",
    Együttműködés: "Az együttműködés azt méri, hogy milyen jól tudsz másokkal együtt dolgozni, és mennyire vagy türelmes és segítőkész. Magas pontszám esetén az ügyfélszolgálat, HR, vagy csapatvezetői pozíciók lehetnek számodra ideálisak.",
    Kommunikáció: "A kommunikáció a beszéd- és írásbeli készségekre utal, illetve arra, hogy milyen jól tudsz másokkal érthetően kommunikálni. Magas pontszám esetén a PR, marketing, vagy újságírói munkakörök lehetnek számodra megfelelőek."
  }

  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" >
        <p className="label"><b>{label}</b></p>
        <p className="intro" style={{ color: '#ABDFF1', fontSize: '0.8rem' }}>{`Eredmény: ${payload[0].value}`}</p>
        <p className="desc" style={{ color: '#ABDFF1', fontSize: '0.8rem' }}>{descriptions[label.replace(/ /g, '_')]}</p>
      </div>
    );
  }

  return null;
};

const SkillsChart = () => {
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (user.skills) {
      const newData = Object.entries(user.skills).map(([category, result]) => {
        return { name: category, Eredmény: result.score };
      });
    
      setData(newData);
    }
  }, [user]);

  return (
    <div className="skills-chart-container">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{left:-30, bottom: 60 }}>
          <CartesianGrid className="cartesian-grid" strokeDasharray="3 3" />
          <XAxis dataKey="name" angle={-90} textAnchor="end" tick={{fontSize: 12}} height={70} />
          <YAxis domain={[0, 30]} tick={{fontSize: 12}}>
            
          </YAxis>
          <Tooltip cursor={{ className: 'tooltip-cursor' }} content={<CustomTooltip />} />
          <Bar className="bar" dataKey="Eredmény" radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsChart;
