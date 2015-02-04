/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// ';'- separate rules, '()'- allowed classes, '[]'- allowed attrs, '{}'- allowed styles, '!'*- req attr (a[!href])
	config.allowedContent = 'p; a[!href]; b blockquote br dd dl dt em h2 h3 h4 h5 i ul ol li span strong sub sup u';

	// apply ID to the body of the WYSIWYG editable area
	config.bodyId = '';

	// apply class to the body of the WYSIWYG editable area
	config.bodyClass = '';

	// path to CSS file for editor styling (string/array)
	// '/css/mysitestyles.css' OR ['/css/mysitestyles.css', '/css/anotherfile.css']
	config.contentsCSS = '';

	config.linkShowTargetTab = false;
	config.scayt_autoStartup = true;
	config.specialChars = ['&lsquo;', '&rsquo;', '&ldquo;', '&rdquo;', '&hellip;', '&ndash;', '&mdash;', '&deg;', '&copy;', '&reg;', '&trade;', '&cent;', '&euro;', '&pound;', '&yen;', '&times;', '&divide;', '&asymp;', '&brvbar;', '&Oslash;', '&oslash;'];

	config.toolbar_Basic = [
		{ name: 'basicstyles', items: ['Bold','Italic','Underline','Subscript','Superscript','-','Blockquote','-','RemoveFormat'] },
		{ name: 'lists', items: ['BulletedList','NumberedList','-','Outdent','Indent'] },
		{ name: 'insert', items: ['SpecialChar'] },
		{ name: 'clipboard', items: ['Paste','PasteText','PasteFromWord'] },
		{ name: 'editing', groups: ['find','selection','spellchecker'], items: ['Find','Replace','-','SelectAll','-','Scayt'] },
		{ name: 'history', items: ['Undo','Redo'] },
		{ name: 'styles', items: ['Styles','Format'] },
		{ name: 'tools', items: ['Maximize'] },
		{ name: 'about', items: ['About'] }
	];
	config.toolbar = 'Basic';
	// Set the most common block elements (toolbar dropdown).
	config.format_tags = 'p;h2;h3;h4;h5';

	// config.extraPlugins = 'selectall,find';
	config.removePlugins = 'jquery';
};