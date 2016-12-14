## justContext.js
![](https://raw.githubusercontent.com/turbo/justContext.js/master/title.png)

justContext is a simple context menu plugin that doesn't require jQuery, but kicks ass anyway. Here are some of the features:

- Just about 30 lines of JS and a bit CSS
- Context menus can be styled. Two themes are included, plus three themes for drop shadow effects (off, light and dark)
- Create unlimited context menus, every HTML element can host it's own, unique menu
- Single elements can be disabled and are styled accordingly
- Menus are auto-positioned relative to the mouse position and window dimensions
- Menu do have fade-in and fade-out effect (again, no jQuery)
- Support for fontawesome icons is built-in

justContext.js is featured at [Unheap](http://www.unheap.com/other/miscellaneous/justcontext-js/) and [cssscript.com](http://www.cssscript.com/lightweight-context-menu-javascript-library-justcontext-js/). 

## Getting Started

**Including**

1. View the demo [here](http://turbo.github.io/justContext.js). All browsers but IE are supported.
2. Include justContext in your website. 

**Styling**

1. Include the CSS for justContext. Either write your own, or just download a pre-configured one from [here](https://raw.githubusercontent.com/minxomat/justContext.js/gh-pages/lib/justcontext.css).
2. Modify the HTML element you want to host a context menu on and give it a unique ID. For example:

```HTML
<p class="jctx-host jctx-id-foo">Right-click this</p>
```

`jctx-host` marks a hosting element. `foo` is the unique ID for this menu.

**Creating**

1. Now create the actual menu. We use the black theme here, and a drop shadow:

```HTML
<ul class="jctx jctx-id-foo jctx-black jctx-black-shadow">
	<li data-action="cut">Cut</li>
	<li data-action="copy">Copy</li>
	<li data-action="paste">Paste</li>
	<hr>
	<li data-action="new_pkg">New package</li>
  <li data-action="new_cls">New class</li>
	<li data-action="new_intf" class="disabled">New interface (a disabled entry)</li>
</ul>
```

The `jctx` styles and hides the menu. The unique ID is re-used here to identify the parent. The `data-action` attribute of each menu entry is the string that is passed to the action handler when an entry is pressed.

**Action Handling**

1. Define your action handler. A simple example that just displays the passed action is:

```HTML
<!-- Defining a sample action handler (for all menus) -->
<script>
	function handleMenuAction(evt) {
		alert("Action required: " + evt);
	}
</script>
```
