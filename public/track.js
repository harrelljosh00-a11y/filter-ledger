// Sends a GA4 event for every outbound affiliate click (links to /go/...). No-op if GA isn't configured.
document.addEventListener("click", function (e) {
  var a = e.target && e.target.closest ? e.target.closest('a[href^="/go/"]') : null;
  if (!a || typeof window.gtag !== "function") return;
  window.gtag("event", "affiliate_click", {
    product: a.getAttribute("data-outbound") || a.getAttribute("href"),
    page: location.pathname,
    transport_type: "beacon"
  });
});
