$("#fileup").change(function () {
  //here we take the file extension and set an array of valid extensions
  var res = $("#fileup").val();
  var arr = res.split("\\");
  var filename = arr.slice(-1)[0];
  filextension = filename.split(".");
  filext = "." + filextension.slice(-1)[0];
  valid = [".pdf"];
  //if file is not valid we show the error icon, the red alert, and hide the submit button
  if (valid.indexOf(filext.toLowerCase()) == -1) {
    $(".Polar_bear").hide("slow");
    // $(".imgupload.ok").hide("slow");
    $(".incorrect").show("slow");

    $("#namefile").css({ color: "red", "font-weight": 700 });
    $("#namefile").html("File " + filename + " is not a PDF!");

    $("#submitbtn").hide();
    $("#fakebtn").show();
  } else {
    //if file is valid we show the green alert and show the valid submit
    $(".Polar_bear").hide("slow");
    $(".imgupload.stop").hide("slow");
    $(".imgupload.ok").show("slow");

    $("#namefile").css({ color: "green", "font-weight": 700 });
    $("#namefile").html(filename);

    $("#submitbtn").show();
    $("#fakebtn").hide();
  }
});

function runPythonScript() {
  // Get the path to the Python script.
  var pythonScriptPath = "path/to/python/script.py";
  // Run the Python script.
  subprocess.run(["python", pythonScriptPath]);
}
