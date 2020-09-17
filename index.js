(function () {
  getBookmarks();
})();

const MYFORM = document.getElementById("my-form");

// listen for form submit
document.getElementById("my-form").addEventListener("submit", saveBookmark);

function saveBookmark(e) {
  // get form values
  let siteName = document.getElementById("site-name").value;
  let siteURL = document.getElementById("site-url").value;

  let bookmark = {
    name: siteName,
    url: siteURL,
  };

  if (localStorage.getItem("bookmarks") === null) {
    console.log("it is null");
    let bookmarks = [];
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  } else {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    bookmarks.push(bookmark);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }

  getBookmarks();

  MYFORM.reset();

  e.preventDefault();
}

function getBookmarks() {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  let bookmarksResults = document.getElementById("bookmarks-results");

  bookmarksResults.innerHTML = "";

  for (let i = 0; i < bookmarks.length; i++) {
    let name = bookmarks[i].name;
    let url = bookmarks[i].url;

    bookmarksResults.innerHTML +=
      "<div>" +
      "<h3>" +
      name +
      "<button>View</button>" +
      "<button>Delete</button>" +
      "</h3>" +
      "</div>";
  }
}
