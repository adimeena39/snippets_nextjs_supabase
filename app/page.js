import Card from "./(components)/Card/Card";
import Sidebar from "./(components)/Sidebar/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <Card />
    </div>
  );
}
