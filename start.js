import $ from 'jquery';
import 'tinymce';
import 'tinymce/jquery.tinymce';
import 'tinymce/plugins/autolink/plugin';
import 'tinymce/plugins/link/plugin';
import 'tinymce/plugins/lists/plugin';
import 'tinymce/plugins/anchor/plugin';
import 'tinymce/plugins/autoresize/plugin';
import 'tinymce/plugins/code/plugin';
import 'tinymce/plugins/directionality/plugin';
import 'tinymce/plugins/paste/plugin';
import 'tinymce/themes/modern/theme.min';

//tinyMCE.baseURL = '/scripts/plugins/tinymce/';


$(() => {
	// Defer TinyMCE instantiation
	setTimeout(function () {
		$("#tinymce").tinymce();
	}, 0);	
})
