import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Cricket",
  "News",
  "Soccer",
  "Cooking",
  "Hockey",
  "Market",
  "Javascript",
  "React",
  "Node JS",
  "Mongo DB",
  "Python",
  "Java",
  "C++",
];
const ButtonList = () => {
  return (
    <div className="flex">
      {/* <Button name="All" />
      <Button name="Gaming" />*/}
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
