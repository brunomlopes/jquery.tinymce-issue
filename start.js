import $ from 'jquery';
// Import jquery.TinyMCE
import 'tinymce/jquery.tinymce';

// A theme is also required
import 'tinymce/themes/modern/theme';

// Any plugins you want to use has to be imported
import 'tinymce/plugins/paste/plugin';
import 'tinymce/plugins/link/plugin';

tinyMCE.baseURL = "/jspm_packages/github/tinymce/tinymce-dist@4.6.4/";

$("#tinymce").tinymce({
  selector: '#tinymce',
  themes: "modern",
  plugins: ['paste', 'link']
});
