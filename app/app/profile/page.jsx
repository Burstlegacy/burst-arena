"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function load() {
      const { data } = await supabase.from("profiles").select("*").single();
      setProfile(data);
    }

    load();
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div className="p-8 text-center">

      <img
        src={profile.avatar_url}
        width={120}
        style={{ borderRadius: "50%" }}
      />

      <h2>{profile.username}</h2>

      <img
        src={`https://flagcdn.com/w40/${profile.country.toLowerCase()}.png`}
      />

    </div>
  );
}
``
