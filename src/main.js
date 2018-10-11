import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Quote from './../quote.js';

$(document).ready(function() {
  $("#formQuestion").submit(function() {
    event.preventDefault();
    const userChoice = $("#userInput").val();

    let quote = new Quote();
    let promise = quote.getQuote(userChoice);

    promise.then(function(response) {
      let body = JSON.parse(response);
      if (body.count === 0) {
        $("#errors").text(`He isn't smart enough to know about that`);
      }
      $(".showQuote").text(`This is what Mr. Trump has to say about ${userChoice}: ${body._embedded.quotes[0].value}`);
    }, function(error) {
      $("#errors").text(`Mr Trump doesn't approve of your failure ${error.message}`);
    });
  });
});


//
//     $.ajax({
//       url: ,
//       type: 'GET',
//       data: {
//         format: 'json'
//       },
//       success: function(response) {
//         $(".showQuote").text(`This is what Mr. Trump has to say about ${userChoice}: ${response._embedded.quotes[0].value}`);
//       },
//       error: function() {
//         $("#errors").text("Mr Trump doesn't approve of your failure");
//       }
//     });
//   });
// });
