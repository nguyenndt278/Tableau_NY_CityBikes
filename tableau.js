function initializeViz() {
    // JS object that points at empty div in the html
    var placeholderDiv = document.getElementById("tableauViz");
    // URL of the viz to be embedded
    var url = "https://prod-useast-a.online.tableau.com/t/nguyennguyen/views/NY_Biker/BikerStory?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link"
    // An object that contains options specifying how to embed the viz
    var options = {
      width: '600px',
      height: '600px',
      hideTabs: true,
      hideToolbar: true,
    };
    viz = new tableau.Viz(placeholderDiv, url, options);
  }