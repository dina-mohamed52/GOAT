import { useState } from "react";

import { useQuery } from "react-query";
import { fetchTableData } from "../../services/fetchAds";
import { CustomSelect } from "./sort";

function AdsItem() {
  const { data, error, isLoading } = useQuery("tableData", fetchTableData);
  const [selectedType, setSelectedType] = useState(null);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data: {error.message}</div>;

    const types = [ ...new Set( data.map( ( item ) => item.type ) ) ];
     types.unshift("All");

  const filteredData = selectedType
    ? data.filter((item) => item.type === selectedType)
    : data;

  return (
    <div className="relative">
      <CustomSelect
        options={types.map((type) => ({ value: type, label: type }))}
        name="All"
        onChange={setSelectedType}
        value={selectedType}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  p-4 mt-16">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="bg-white   rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => window.open(item.onclickLink, "_blank")}
          >
            <div className="relative group">
              <img
                src={item.ads}
                alt="image_"
                className="w-full h-[24rem] rounded-lg object-cover"
              />
              <div className="absolute inset-0 rounded-xl bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
            </div>
            <div className="p-4">
              <p className="text-center text-gray-900 uppercase font-bold text-xl">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdsItem;
