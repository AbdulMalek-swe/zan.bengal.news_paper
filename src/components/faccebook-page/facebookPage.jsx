"use client";
import { publicRequest } from "@/config/axios.config";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
const FacebookPage = () => {
  const router = useRouter();
  console.log(router?.route, "my router my rules");
  useEffect(() => {
    // Load Facebook SDK script
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: "637570475436576", // Replace with your app ID
        autoLogAppEvents: true,
        xfbml: true,
        version: "v19.0",
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, [router?.route]);
  return (
    <div>
      <div
        className="fb-page w-full lg:w-[350px]"
        data-href="https://www.facebook.com/Bengalchannel24.bd/" // Replace with your Facebook page URL
        data-tabs="timeline"
        data-height="600"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      ></div>
    </div>
  );
};

export default FacebookPage;
