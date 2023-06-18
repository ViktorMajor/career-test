import { UserContext } from "../App";
import React, { useContext } from "react";

const HighestBig5 = () => {
  const adviceMap = {
    "Extraverzió - Lelkiismeretesség":
      "Olyan munkakört javaslunk, ahol vezetői képességeidet és felelősségteljes munkavégzést tudod kamatoztatni. Válassz olyan területet, ahol a csoportos tevékenységek és az ütemterv szerinti munka kombinálható. Fontos, hogy az ilyen pozícióban a szervezői képességek és a felelősségvállalás kiemelten fontosak.",

    "Extraverzió - Nyitottság":
      "Olyan területet ajánlunk, ahol széleskörű interakcióra és új tapasztalatokra van lehetőség. A személyiségednek megfelelő állások a kreatív iparágakban és az emberekkel való intenzív interakciókat igénylő munkakörök lehetnek. Ebben a pozícióban élvezheted a változatosságot és az új ötletek megvalósítását.",

    "Extraverzió - Érzelmi stabilitás":
      "Olyan munkakört javaslunk, ahol emberi kapcsolatokban dolgozhatsz és hatékonyan kezeled a stresszt. Az ilyen munkakörök közé tartozik a vendéglátás, az értékesítés, és minden olyan szakma, ahol nagy nyomás alatt is stabilan kell teljesíteni. A pozitív attitűd és az érzelmi rugalmasság előnyt jelent ebben a munkakörben.",

    "Barátságosság - Extraverzió":
      "Olyan munkát ajánlunk, ahol segítőkészséged és kommunikációs képességeid kiemelkedően fontosak. A szociális munka, a tanácsadás vagy az ügyfélszolgálati munkák lehetnek jó választások a számodra. A társas interakciókban való részvétel és a kommunikáció élvezete kulcsfontosságú ezen a területen.",

    "Lelkiismeretesség - Nyitottság":
      "Találj olyan területet, ahol analitikus és kreatív képességeidet egyaránt kamatoztathatod. Kutató, művész, vagy projekt menedzser pozíciók lehetnek ideálisak számodra. Az olyan szerepekben, ahol részletes tervezést igényelnek, de mégis szükség van a kreativitásra, igazán jól teljesíthetsz.",

    "Érzelmi stabilitás - Lelkiismeretesség":
      "Olyan munkakört javaslunk, ahol felelősségteljesen dolgozhatsz és hatékonyan kezeled a stresszt. Jó választás lehet a vezetői, pénzügyi, jogi vagy más nagy felelősséggel járó szakmák. Az érzelmi stabilitás és a szilárd lelkiismeretesség kiemelkedő előnyt jelent ebben a munkakörben.",

    "Barátságosság - Lelkiismeretesség":
      "Olyan területet ajánlunk, ahol segítőkészséged és emberi kapcsolatteremtő képességeid kiemelkedőek. A tanácsadás, az ügyfélszolgálat, a személyi asszisztens vagy akár a pedagógiai munkakörök lehetnek ideálisak számodra. A barátságosságod és a felelősségtudatos munkavégzésed kombinációja kiemelkedő előnyt jelenthet ezen a területen.",

    "Érzelmi stabilitás - Nyitottság":
      "Találj olyan területet, ahol kreatív gondolkodást és hatékony stresszkezelést igényelnek a feladatok. Jó választás lehet a művészet, a tervezés, vagy az olyan szakmák, ahol az új ötletek megvalósítására és a stresszes helyzetek kezelésére van szükség.",

    "Barátságosság - Nyitottság":
      "Olyan munkakört javaslunk, ahol széleskörű kommunikációra és emberi kapcsolatokra van szükség. Olyan munkákban, mint az értékesítés, az ügyfélszolgálat vagy a kommunikációs szakmákban, ahol a barátságosság és a nyitottság kombinációja előnyös, igazán jól teljesíthetsz.",

    "Barátságosság - Érzelmi stabilitás":
      "Olyan területet ajánlunk, ahol hatékonyan kezeled az érzelmi kihívásokat és jó kapcsolatokat építhetsz ki. Az ügyfélszolgálat, a tanácsadás vagy a mentálhigiénés szakmák lehetnek jó választások a számodra. Ebben a munkakörben a barátságos hozzáállásod és az érzelmi stabilitásod nagy előnyt jelenthet.",
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

  const highestBigFiveCategories = getHighestCategories(user.bigFive);
  const advice =
    adviceMap[
      highestBigFiveCategories[0] + " - " + highestBigFiveCategories[1]
    ];

  return (
    <div>
      <div className="recommodation">
        
        <h2 className="advice">Az eredményeid értékelése:</h2>
        <p className="highest-categories">
        Legmagasabb értéket a következő kategóriákban érted el:{" "}
          {highestBigFiveCategories.join(", ")}
        </p>
        <p>{advice}</p>
      </div>
    </div>
  );
};

export default HighestBig5;
