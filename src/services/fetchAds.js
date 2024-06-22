import supabase from "./supabase";


 export const fetchTableData = async () => {
  const { data, error } = await supabase.from("campaigns").select("*"); 

  if (error) {
    throw new Error(error.message);
  }
  return data;
};
