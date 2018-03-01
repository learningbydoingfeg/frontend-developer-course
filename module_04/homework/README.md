# Hands-On: Using CSS Media Queries

**Objective:** In this guided exercise, you will use CSS media queries to specify scenarios where the apperance of your web page should change.

**Pre-requisite:** You need to have Visual Studio Code installed on your local machine (Windows, OSX or Linux) in order to complete this exercise.

## Setup

1. On your local machine, open Visual Studio Code.
2. Go to the File menu and select the Open Folder option.
3. Create a new folder for this exercise and select this folder in the dialog.
4. Create a new file name index.html. The index.html file should now be open in the editor.
5. In the Explorer pane, create a new folder within your working files named css.
6. Within the new folder, create a new file name style.css. The style.css file should now be open in the editor.
7. Use the Split Editor command in the View menu to split the editor view horizontally.
8. Ensure that one editor view is showing index.html and the other editor is showing style.css.


## Exercise
Using the editor for the index.html file, add the following basic HTML structure to your file:

```html
<!DOCTYPE html>
<html lang="en-US">
<head>
    <title>HTML Page</title>
    <link rel="stylesheet" href="css/style.css" />
</head>
<body>
</body>
</html>
```

Add the following HTML content within the body element of your page

```html
<body>
<nav>
    <aside>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</aside>
    <aside>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</aside>
    <aside>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</aside>
</nav>
</body>
```

Switch to the editor for the style.css file and add the following CSS rules to change the appearance of various HTML elements:

```css
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;       
  background-color: #506566;
}
aside {
  background-color: #23354B;
  color: #CDB09E;
  padding: 25px;
  margin: 5px;
}
```
