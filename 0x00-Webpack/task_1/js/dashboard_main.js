import $ from 'jquery';
import _ from 'lodash';

let count = 0;

function updatecounter() {
	count++;
	$('#count').text(count + ' clicks on the button');
}

$('#clickButton').click(_.debounce(updatecounter, 1000));

$(document).ready(function() {
	$('body').append('<p>Holberton Dashboard</p>');
	$('body').append('<p>Dashboard data for the students</p>');
	$('body').append('<button id='clickButton'>Click here to get started</button>');
	$('body').append('<p id='count'></p>');
	$('body').append('<p>Copyright - Holberton School</p>');
});
