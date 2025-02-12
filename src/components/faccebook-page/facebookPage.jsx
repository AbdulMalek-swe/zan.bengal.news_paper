"use client";
import { publicRequest } from "@/config/axios.config";
import axios from "axios";
import React, { useEffect, useState } from "react";
// import {
//   Comments,
//   FacebookProvider,
//   Like,
//   FacebookLogin,
// } from "react-facebook";

const FacebookPage = () => {
  const [pageData, setPageData] = useState(null);
  //   const pageId = "102255664767812"; // Replace with your Page ID
  //   const accessToken =
  //     "EAAJD3fG1KiABO6I4j7pShCCVO9CwODMzfZALOfQbzzOy5GbkkYOecxNLkmZBqbjQkv4xED6tQVjBEANpJAukrLl8sPuy6dUvQpe3SvzOcFC9pTPiJO6VTgsTGCf33pUTVMLYOabsdSxvnOTMVV4bXfAKUZCaUmkduZBSeSRiahsWZAfaO2579UDOx4TFZA64bsAhBx6upGVDs4QBSkxkUdl3zRZArJGR0rlIeYDim4ZAK48ZD";

  //   useEffect(() => {
  //     const fetchFacebookData = async () => {
  //       try {
  //         const response = await axios.get(
  //           `https://graph.facebook.com/v19.0/${pageId}?fields=name,fan_count,about&access_token=${accessToken}`
  //         );
  //         console.log(response);
  //         setPageData(response.data);
  //       } catch (error) {
  //         console.error(
  //           "Error fetching Facebook data:",
  //           error.response ? error.response.data : error.message
  //         );
  //       }
  //     };

  //     fetchFacebookData();
  //   }, []);
  //   const pageAccess =
  //     "EAAJD3fG1KiABO3ScAq5GZAb4w3NhvaWWpwuYu8Uchpz8MoE6rC9m0vJZADX85I1LyhBdGQYomdAglWOlQ74pjdxkLUFoinTbtHH0Mdm6SMiqNZAIC7fjZCfdR06qcZBrdS9pQTpZAvbqHrDvSIdlmDLC5l6zobGHZCccUPHZCvVBSgJs9ZAEpMHC3g42Qzl7hPM1DKFatq7TFZBZAZCnWviEUnZByD3SZBAEEGANDz6tQDBe0ZD";
  //   const [value, setValue] = useState({});
  //   const [posts, setPosts] = useState([]);
  //   useEffect(() => {
  //     const fetchPosts = async () => {
  //       try {
  //         const response = await axios.get(
  //           `https://graph.facebook.com/v19.0/${pageId}/posts?fields=message,created_time,full_picture,permalink_url&access_token=${pageAccess}`
  //         );
  //         console.log(response.data?.data);
  //         setPosts(response.data.data);
  //       } catch (error) {
  //         console.error(
  //           "Error fetching posts:",
  //           error.response ? error.response.data : error
  //         );
  //       }
  //     };

  //     fetchPosts();
  //   }, []);
  //   useEffect(() => {
  //     const fetchPosts = async () => {
  //       try {
  //         const response = await axios.get(
  //           `https://graph.facebook.com/v19.0/me/accounts?access_token=${accessToken}`
  //         );
  //         console.log(response.data);
  //         // setPosts(response.data.data);
  //       } catch (error) {
  //         console.error(
  //           "Error fetching posts:",
  //           error.response ? error.response.data : error
  //         );
  //       }
  //     };

  //     fetchPosts();
  //   }, []);
  //   console.log("my value my red",value);
  //   const userTokenChecker =
  //     "EAAJD3fG1KiABO6I4j7pShCCVO9CwODMzfZALOfQbzzOy5GbkkYOecxNLkmZBqbjQkv4xED6tQVjBEANpJAukrLl8sPuy6dUvQpe3SvzOcFC9pTPiJO6VTgsTGCf33pUTVMLYOabsdSxvnOTMVV4bXfAKUZCaUmkduZBSeSRiahsWZAfaO2579UDOx4TFZA64bsAhBx6upGVDs4QBSkxkUdl3zRZArJGR0rlIeYDim4ZAK48ZD";
  //   useEffect(() => {
  //     const fetchPosts = async () => {
  //       try {
  //         const response = await axios.get(
  //           `https://graph.facebook.com/v19.0/me/accounts?access_token=${userTokenChecker}`
  //         );
  //         console.log(response.data);
  //         // setPosts(response.data.data);
  //       } catch (error) {
  //         console.error(
  //           "Error fetching posts:",
  //           error.response ? error.response.data : error
  //         );
  //       }
  //     };

  //     fetchPosts();
  //   }, []);

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
  }, []);
  return (
    <div>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/Bengalchannel24.bd/" // Replace with your Facebook page URL
        data-tabs="timeline"
        data-width="500"
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
