/* ===================================================================
   Google Analytics 4 — hosted site only.

   Loaded by each page shell. Two deliberate exclusions:

     * file://   the standalone copies in dist/ are meant to work with
                 no connection, so they must never phone home. The tag
                 is also stripped from those builds at build time
                 (see build-standalone.py) — this is the second belt.
     * localhost the local preview server, so my own editing does not
                 show up as traffic.

   Page views only. No user IDs, no custom dimensions, nothing that
   identifies an individual classmate. GA4 does not store full IP
   addresses.
   =================================================================== */
(function () {
"use strict";

var ID = "G-XBXF5E7YM3";

var host = location.hostname;
if (location.protocol === "file:") return;                    // offline copy
if (host === "localhost" || host === "127.0.0.1" || host === "") return;

var s = document.createElement("script");
s.async = true;
s.src = "https://www.googletagmanager.com/gtag/js?id=" + ID;
document.head.appendChild(s);

window.dataLayer = window.dataLayer || [];
function gtag(){ window.dataLayer.push(arguments); }
window.gtag = gtag;

gtag("js", new Date());
gtag("config", ID);
})();
