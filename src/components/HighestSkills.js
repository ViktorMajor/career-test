import { UserContext } from "../App";
import React, { useContext } from "react";

const HighestSkills = () => {
  const adviceMap = {
    "Együttműködés - Kézügyesség":
      "Ha szereted a kézműves tevékenységeket és élvezed a csapatmunkát, ideális lehet számodra olyan munkakörben dolgozni, ahol a kézügyesség és az együttműködés kulcsfontosságú. Például, a kézműves iparban, az építészetben vagy a művészet területén találhatsz kielégülést és sikert.",
    "Együttműködés - Kommunikáció":
      "Amennyiben szereted az aktív együttműködést és hatékony kommunikációt, olyan munkakörben érezheted jól magad, ahol ezek a képességek kiemelten fontosak. Például, a PR és marketing területén, az oktatásban vagy a közösségszervezésben találhatod meg a helyed.",
    "Együttműködés - Matematikai képesség":
      "Amennyiben rendelkezel matematikai képességekkel és élvezed a csapatmunkát, érdemes olyan munkaköröket keresned, ahol mindkét tulajdonságod érvényesülhet. Ilyen szerepek lehetnek a mérnöki vagy analitikus területeken, ahol a matematikai tudásodat és az együttműködési készségedet hasznosíthatod.",
    "Együttműködés - Problémamegoldás":
      "Ha szereted a csapatmunkát és kiváló problémamegoldó képességekkel rendelkezel, érdemes olyan munkakört választanod, ahol ezek a tulajdonságok kiemelten fontosak. Szervezeti, menedzsment vagy HR szerepekben találhatsz kihívást és sikerélményt, ahol a csapatmunka és a problémamegoldás kulcsfontosságú.",
    "Kézügyesség - Kommunikáció":
      "Amennyiben jó kézügyességgel rendelkezel és erős kommunikációs képességeid vannak, olyan munkaköröket kereshetsz, ahol mindkét tulajdonságod kiemelkedően fontos. Például, az értékesítés, a marketing vagy a PR területén találhatsz kreatív és sikeres munkalehetőségeket.",
    "Kézügyesség - Matematikai képesség":
      "Ha a kézügyesség és a matematikai képesség is erősséged, érdemes olyan szakmákat választanod, ahol mindkét tulajdonságodat hasznosíthatod. Például, az építészet vagy a mérnöki terület kínálhat számodra kihívást és fejlődési lehetőséget.",
    "Kézügyesség - Problémamegoldás":
      "A kézügyesség és a problémamegoldó képesség kombinációja ideális lehet olyan szakmákban, mint például a szerelés vagy az építészet. Ezen a területen kihasználhatod a manuális kézügyességedet és kreatív problémamegoldó képességeidet.",
    "Kommunikáció - Matematikai képesség":
      "Ha rendelkezel erős kommunikációs képességekkel és matematikai érzékkel, számos munkakörben kiemelkedően helytállhatsz. Például, az oktatás, az analitikus pozíciók vagy a pénzügyi tanácsadás területén találhatod meg a helyed.",
    "Kommunikáció - Problémamegoldás":
      "A kommunikáció és a problémamegoldó képesség kombinációja számos területen hasznosítható. Például, a tanácsadás, a menedzsment vagy az oktatás területén találhatsz sikeres munkalehetőségeket, ahol ezekre a képességekre nagy szükség van.",
    "Matematikai képesség - Problémamegoldás":
      "Ha erős matematikai képességekkel rendelkezel és jó problémamegoldó vagy, olyan szakmákat érdemes választanod, ahol ezek a tulajdonságok kiemelkedően fontosak. Ilyen területek lehetnek például a mérnöki munka vagy a programozás.",
  };
  

  const { user } = useContext(UserContext);

  const getHighestCategories = (data) => {
    if (!data) return [];

    const categories = Object.entries(data).sort(
      ([_, a], [__, b]) => b.score - a.score
    );

    const highestScore = categories[0]?.[1]?.score;

    const highestCategories = categories
      .filter(([_, result]) => result.score === highestScore)
      .map(([category, _]) => category);

    let secondHighestCategories = [];
    if (highestCategories.length === 1) {
      const secondHighestScore = categories[1]?.[1]?.score;
      secondHighestCategories = categories
        .filter(([_, result]) => result.score === secondHighestScore)
        .map(([category, _]) => category);
    }

    return [...highestCategories, ...secondHighestCategories].sort();
  };

  const highestSkillsCategories = getHighestCategories(user.skills);
  const advice =
    adviceMap[highestSkillsCategories[0] + " - " + highestSkillsCategories[1]];

  return (
    <div>
      <div className="recommendation">
       
        <h2 className="advice">Az eredményeid értékelése:</h2>
        <p className="highest-categories">
          Legmagasabb értéket a következő kategóriákban érted el:{" "}
          {highestSkillsCategories.join(", ")}
        </p>
        <p>{advice}</p>
      </div>
    </div>
  );
};

export default HighestSkills;
