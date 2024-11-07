import useDebounce from "../../hooks/use-debounce";
import { useEffect, useState } from "react";

const data = [
  "Apple",
  "Ball",
  "Call",
  "Apricot",
  "Avacado",
  "Onion",
  "Orange",
  "Banana",
  "Carrot",
];

function Autocomplete() {
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);

  const debounceSearch = useDebounce(search, 1000);

  useEffect(() => {
    console.log("ooo");

    return () => console.log("booo");
  }, []);

  useEffect(() => {
    if (!debounceSearch) {
      setFilterData([]);
      return;
    }

    (() => {
      const result = data.filter(
        (item) =>
          item.substring(0, debounceSearch.length).toLowerCase() ===
          debounceSearch.toLowerCase()
      );

      if (result.length > 0) {
        setFilterData(result);
      }
    })();
  }, [debounceSearch]);

  return (
    <div className="container mx-auto">
      <h1 className="heading mt-12">Autocomplete Typehead</h1>

      <div className="grid place-content-center mt-8 ">
        <div className="w-80 relative">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="input w-full "
            placeholder="Search items"
          />
          {filterData.length > 0 && (
            <div className="absolute bg-blue-50  w-full ">
              {filterData.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Autocomplete;
