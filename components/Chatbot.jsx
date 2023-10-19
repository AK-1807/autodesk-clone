'use client'
import React, { useEffect } from 'react'
// import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";


function Chatbot() {
    useEffect(() => {
        (async function(d, m){
            var kommunicateSettings = 
                {"appId":"135477d43cea0c992a1179060c2aaeff6","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
        
        },[])
  return (
      <div>
    </div>
  )
}

export default Chatbot