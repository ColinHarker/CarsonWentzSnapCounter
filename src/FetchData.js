import React from "react"

const axios = require("axios");
const cheerio = require("cheerio");
const pretty = require("pretty");
const fs = require("fs")

const url = "https://footballguys.com/subscribers/teams/teampage-clt-6.php";
const inXpath = "/html/body/main/section/div/div/table[2]/tbody/tr[2]/td[2]";
var xpath = inXpath.split("/");
var snap_count
var percentage = "hello";


async function scrapeData() {
    try {
        // Fetch HTML of the page we want to scrape
        const { data } = await axios.get(url);
        // Load HTML we fetched in the previous line
        const $ = cheerio.load(data);
        // Select all the list items in plainlist class
        const listItems = $(".datasmall");

        percentage = "yo";

        percentage = listItems;
        // Stores data for all countries
        const countries = [];
        // Use .each method to loop through the li we selected
        listItems.each((idx, el) => {
            // Object holding data for each country/jurisdiction
            const country = { name: "", iso3: "" };
            // Select the text content of a and span elements
            // Store the textcontent in the above object
            country.name = $(el).children("a").text();
            country.iso3 = $(el).children("span").text();
            // Populate countries array with country data
            countries.push(country);
        });
        // Logs countries array to the console
        console.dir(countries);
        // Write countries array in countries.json file
        fs.writeFile("coutries.json", JSON.stringify(countries, null, 2), (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log("Successfully written data to file");
        });
    } catch (err) {
        console.error(err);
    }
}

export default class FetchData extends React.Component {




    async componentDidMount() {
        console.log("yes");
        scrapeData();
    }

    render() {

        return (
            <div>
                {percentage}
            </div>
        );
    }
}