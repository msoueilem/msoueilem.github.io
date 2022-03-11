"use strict";

$(document).ready(
    function () {


        $("a").click(function (event) {
            event.preventDefault();

            const dataEntry = `<div id="container">
                <section id="articlesList">
                    <article>
                        <p>Article Title - 
                            <a href="#" id="ourlink">Click to Add a new Article</a>
                        </p>
                    </article>
                </section>
            </div>`;
            createA(dataEntry);
            
        });
        function createA(data) {
            $("#mainArea").append(data);
            console.log("Data Created");
        }
    }
);