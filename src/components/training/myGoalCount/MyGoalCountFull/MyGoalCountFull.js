const MyGoalCountFull = ({ books, days }) => {
  return (
    <>
      <div className="MyGoalCount_Container">
        <ul className="MyGoalCount_List">
          <li className="MyGoalCount_Item">
            <p className="MyGoalCount_Number">{books}</p>
            <p className="MyGoalCount_Text">Кількість книжок</p>
          </li>
          <li className="MyGoalCount_Item">
            <p className="MyGoalCount_Number">{days}</p>
            <p className="MyGoalCount_Text">Кількість днів</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MyGoalCountFull;
