import MyGoalList from "./myGoalList/MyGoalList";
import MyGoalListDefault from "./myGoalListDefault/MyGoalListDefault";

const data = [
  {
    id: 1,
    author: "Jeff Sazerlend",
    bookName: "Scrum Fsdfierer Fvfkdfkdf FEREEEERasdasdasdas dasdasdasd",
    year: "2014",
    pages: "140",
  },
  {
    id: 2,
    author: "Alexander Bushkov",
    bookName: "Queen of the dark river",
    year: "2021",
    pages: "270",
  },
  {
    id: 3,
    author: "Albian Nury",
    bookName: "Sleeping City",
    year: "2021",
    pages: "310",
  },
  {
    id: 4,
    author: "Albian Nury",
    bookName: "Sleeping City",
    year: "2021",
    pages: "310",
  },
];

const variables = true;

const MyGoalBooks = () => {
  return (
    <>
      {variables === true ? <MyGoalList data={data} /> : <MyGoalListDefault />}
    </>
  );
};

export default MyGoalBooks;
