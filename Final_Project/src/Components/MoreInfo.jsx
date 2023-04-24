import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import Post from "./Post";
import PopularContent from "./PopularContent";

function MoreInfo() {
  const { id } = useParams();
  const supabaseURL = "https://kstbhpzxvjyfrtccomtm.supabase.co";
  const supabasekey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzdGJocHp4dmp5ZnJ0Y2NvbXRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE3MTI4ODIsImV4cCI6MTk5NzI4ODg4Mn0.Tk8PQTkbHHJIEbghy8mUCS42CM7sokJTwiBbLx8WxRo";

  const supabase = createClient(supabaseURL, supabasekey);
  const [data, setData] = useState([]);

  const getData = async () => {
    const { data, error } = await supabase
      .from("Data")
      .select("*")
      .eq("id", id)
      .single();
    // console.log(data);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex">
      <div className="content w-full">

          <Post prop={data} />

      </div>
      <PopularContent />
    </div>
  );
}

export default MoreInfo;
