function checkOtherOption() {
    const queryType = document.getElementById("query-type").value;
    const otherComment = document.getElementById("other-comment");
  
    if (queryType === "Others") {
      otherComment.style.display = "block";
    } else {
      otherComment.style.display = "none";
    }
  }
  
  