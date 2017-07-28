import $ from 'jquery';
// Import jquery.TinyMCE
import 'tinymce/jquery.tinymce';

// A theme is also required
import 'tinymce/themes/modern/theme';

// Any plugins you want to use has to be imported
import 'tinymce/plugins/paste/plugin';
import 'tinymce/plugins/link/plugin';

tinyMCE.baseURL = "/jspm_packages/github/tinymce/tinymce-dist@4.6.4/";


let $tinymceEl = $("#tinymce_editor");
let config = {
	inline: true,
	themes: "modern",
	plugins: ['paste', 'link']
};
$tinymceEl.tinymce(config);


let $countEl = $("#editorCount");
let refreshEditorCount = () => $countEl.text(`tinyMCE.editors.length :${tinyMCE.editors.length}`);
refreshEditorCount();
$("#remove").click(() => {
	$tinymceEl.remove();
	refreshEditorCount();
});

$("#recreate").click(() => {
	$("#tinymcecontainer").html("<div id='tinymce_editor'></div>");
	$tinymceEl= $("#tinymce_editor");
	$tinymceEl.tinymce(config);
	refreshEditorCount();
});