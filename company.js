$(document).ready(function() {
    var companies = {
        "hardware": ["company1", "globalTech", "company2"],
        "software": ["Asal", "InfiniteTiers", "Exhausted"],
        "networking": ["company3", "company4", "company5"]
    };

    function myfunction(event) {
        event.preventDefault();
        var companyName = $("#nameOfCompany").val().trim();
        var category = $("#typeOfCompany").val();
        var companyList = companies[category];

        if (companyName === "") {
            alert("Please enter a company name.");
        } else if (companyList.includes(companyName)) {
            alert("This company already exists!");
        } else {
            companyList.push(companyName);
            displayCompanies(); 
            $("#nameOfCompany").val("");
        }
    }

    function myfunction_2(event) {
        event.preventDefault();
        var companyName = $("#nameOfCompany").val().trim();
        var category = $("#typeOfCompany").val();
        var companyList = companies[category];

        if (companyName === "") {
            alert("Please enter a company name.");
        } else {
            var index = companyList.indexOf(companyName);
            if (index !== -1) {
                companyList.splice(index, 1);
                displayCompanies(); 
                $("#nameOfCompany").val("");
            } else {
                alert("This company does not exist!");
            }
        }
    }
    function displayCompanies() {
        $("table tbody").empty();
    
        for (var category in companies) {
            var companyList = companies[category];
            var row = "<tr><th>" + category + "</th>";
    
            for (var i = 0; i < companyList.length; i++) {
                var companyName = companyList[i] === "InfiniteTiers" ? "bestCompany" : companyList[i];
                row += "<td>" + companyName + "</td>";
            }
    
            row += "</tr>";
            $("table tbody").append(row);
        }
    }
    
    $("form .add-button").click(myfunction);
    $("#deleteButton").click(myfunction_2);
    //displayCompanies();
});
