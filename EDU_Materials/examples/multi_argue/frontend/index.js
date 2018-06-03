function getValues() {
    var prvtKey = document.getElementById("prvtKey").value;
    var endTime = document.getElementById("endTime").value;
    var argueType = document.getElementById("argueType").value;
    var contractAddress = document.getElementById("contractAddress").value;
    createArgue(prvtKey, endTime, argueType, contractAddress);
}
