## 1.Hands-On: Creating a Basic HTML Page

Objective: In this guided exercise, you will create a basic html page with minimal content.

Pre-requisite: You need to have Visual Studio Code installed on your local machine (Windows, OSX or Linux) in order to complete this exercise.

**Setup**
- On your local machine, open Visual Studio Code.
- Go to the File menu and select the Open Folder option.
- Create a new folder for this exercise and select this folder in the dialog.

Exercise

1. Create a new file name index.html. The index.html file should now be open in the editor.
2. Add the following markup to your file:

```html
<!DOCTYPE html>
```

3. Below the **DOCTYPE** declaration, add a **HTML** element:

```html
<!DOCTYPE html>
<html>
</html>
```

4. Update the opening HTML element by specifying the value en-US for the lang attribute:

```html
<html lang="en-US">
</html>
```

5. Within the HTML elements, add head and body elements:

```html
<html lang="en-US">
  <head>
  </head>
  <body>
  </body>
</html>
```

6. Within the head elements, add a title element with Introduction to Web Pages as the content of the element:

```html
<head>
  <title>Introduction to Web Pages</title>
</head>
```

7. Within the body elements, add the content Welcome between the opening and closing elements:

```html
<body>
  Welcome
</body>
```

8. Your HTML markup should now look like this:

```html
<!DOCTYPE html>
<html lang="en-US">
<head>
    <title>Introduction to Web Pages</title>
</head>
<body>
    Welcome
</body>
</html>
```

9. Save your HTML file.
10. Activate the View in Default Application extension to view your HTML file in your preferred browser using one of the following methods:
   - Press F1, search for and select the View in Default Application extension
   - Use the Ctrl+K, Ctrl+B keyboard combination (Cmd+K, Cmd+B on OSX)
11. Observe that the title of the web page (most likely displayed in the tab of your browser) reads Introduction to Web Pages.
12. Observe that the only content rendered on the web page is the text "Welcome".
13. Close your open browser and Visual Studio Code.


## 2. Hands-On: Creating a HTML Form

**Setup**

1. On your local machine, open Visual Studio Code.
2. Go to the File menu and select the Open Folder option.
3. Create a new folder for this exercise and select this folder in the dialog.
4. Create a new file name index.html. The index.html file should now be open in the editor.

Exercise

1. Add the following basic HTML structure to your file:
```html
<!DOCTYPE html>
<html lang="en-US">
<head>
    <title>HTML Page</title>
</head>
<body>
</body>
</html>
```

2. Within the body element, add a form child element:

```html
<body>
<form>
</form>
</body>
```

3. Within the form element, add a fieldset child element:

```html
<form>
<fieldset>
</fieldset>
</form>
```

4. Within the fieldset element, add a legend child element with the content "Application Form":

```html
<form>
<fieldset>
    <legend>Application Form</legend>
</fieldset>
</form>
```

5. On a new line within the fieldset element, add the text "First Name":

```html
<form>
<fieldset>
    <legend>Application Form</legend>
    First Name:
</fieldset>
</form>
```

6. After the text, add a new input element with the name attribute set to "firstName":

```html
<form>
<fieldset>
    <legend>Application Form</legend>
    First Name: <input name="firstName" />
</fieldset>
</form>
```

7. Update the input element by setting the following attributes:
   - type: text
   - placeholder: Enter your first name

```html
<form>
<fieldset>
    <legend>Application Form</legend>
    First Name: <input name="firstName" type="text" placeholder="Enter your first name" />
</fieldset>
</form>
```

8. On a new line within the fieldset element, add the text "Last Name":

```html
<form>
<fieldset>
    <legend>Application Form</legend>
    First Name: <input name="firstName" type="text" placeholder="Enter your first name" />
    Last Name:
</fieldset>
</form>
```

9. After the text, add a new input element with the name attribute set to "lastName":
```html
<form>
<fieldset>
    <legend>Application Form</legend>
    First Name: <input name="firstName" type="text" placeholder="Enter your first name" />
    Last Name: <input name="lastName" />
</fieldset>
</form>
```

10. Update the new input element by setting the following attributes:
   - type: text
   - placeholder: Enter your last name

```html
<form>
<fieldset>
    <legend>Application Form</legend>
    First Name: <input name="firstName" type="text" placeholder="Enter your first name" />
    Last Name: <input name="lastName" type="text" placeholder="Enter your last name" />
</fieldset>
</form>
```

11. On a new line within the fieldset element, add the text "Email Address":

```html
<form>
<fieldset>
    <legend>Application Form</legend>
    First Name: <input name="firstName" type="text" placeholder="Enter your first name" />
    Last Name: <input name="lastName" type="text" placeholder="Enter your last name" />
    Email Address:
</fieldset>
</form>
```

12. After the text, add a new input element with the name attribute set to "emailAddress":

```html
<form>
<fieldset>
    <legend>Application Form</legend>
    First Name: <input name="firstName" type="text" placeholder="Enter your first name" />
    Last Name: <input name="lastName" type="text" placeholder="Enter your last name" />
    Email Address: <input name="emailAddress" />
</fieldset>
</form>
```

13. Update the new input element by setting the following attributes:
   - type: email
   - placeholder: Enter your e-mail address

```html
<form>
<fieldset>
    <legend>Application Form</legend>
    First Name: <input name="firstName" type="text" placeholder="Enter your first name" />
    Last Name: <input name="lastName" type="text" placeholder="Enter your last name" />
    Email Address: <input name="emailAddress" type="email" placeholder="Enter your e-mail address" />
</fieldset>
</form>
```

14. On a new line within the form element, add an input element:

```html
<form>
<fieldset>
    <legend>Application Form</legend>
    First Name: <input name="firstName" type="text" placeholder="Enter your first name" />
    Last Name: <input name="lastName" type="text" placeholder="Enter your last name" />
    Email Address: <input name="emailAddress" type="email" placeholder="Enter your e-mail address" />
</fieldset>
<input type="submit" value="Sign up" />
</form>
```

15. Update the new input element by setting the following attributes:
   - type: submit
   - placeholder: Enroll

```html
<form>
<fieldset>
    <legend>Application Form</legend>
    First Name: <input name="firstName" type="text" placeholder="Enter your first name" />
    Last Name: <input name="lastName" type="text" placeholder="Enter your last name" />
    Email Address: <input name="emailAddress" type="email" placeholder="Enter your e-mail address" />
</fieldset>
<input type="submit" value="Enroll" />
</form>
```

16. Activate the View in Default Application extension to view your HTML file in your preferred browser using one of the following methods:
   - Press F1, search for and select the View in Default Application extension
   - Use the Ctrl+K, Ctrl+B keyboard combination (Cmd+K, Cmd+B on OSX)

16. Observe the form inputs and their placeholder (watermark) values.
17. Fill out the form by entering valid values for all three fields.
18. Close your open browser and Visual Studio Code.

### Add HTML5 Field Validation
### Add HTML5 Semantic Elements



