import React, { useEffect, useState } from 'react';
import { supabase } from '../Pages/Supabase.jsx';

const TestApi = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function callGetApi() {
      const res = await supabase.from("Categories").select("*");

      if (res.error) {
        console.error(res.error);
        return;
      }

      setCategories(res.data);
    }

    callGetApi();
  }, []);

  return (
    <>
      Seif Mohamed

      <p>

        {categories[0].id}

        {/* {categories.length > 0 ? categories[0].id : "Loading..."} */}
      </p>
    </>
  );
};

export default TestApi;
