import $ from 'jquery';
import _ from 'lodash';

let count = 0;

function updateCounter() {
	count++;
	$('#count').text(count + ' clicks on the button');
}

$('#clickButton').click(_.debounce(updateCounter, 1000));
