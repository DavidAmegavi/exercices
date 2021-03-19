; 

import moment from "moment"; 

function formatDate(date) {

  return moment(date).format("dddd Do MMMM YYYY");
}

function yearsSinceDate(date) {
  return moment(date).fromNow(true);
}

function getDayFromDate(date){
  return moment(date).format("dddd");
}

function daysSinceDate(date) {

}


export { formatDate, yearsSinceDate, getDayFromDate, daysSinceDate }; 