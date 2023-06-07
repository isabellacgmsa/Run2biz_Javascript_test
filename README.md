# Run2biz Javascript test
## Question 1 - Password Counter
This is a simple web application that counts the number of valid passwords based on specific pattern rules. The application is built using HTML, CSS, and JavaScript.
### Features
#### Part 1: Password Validation
The password must be between 184759-856920.
At least two adjacent digits must be the same.
Digits only increase or stay the same from left to right.
Example: 222222 is valid (double 22, never decreases).
#### Part 2: Additional Rule
Includes all rules from Part 1.
Adds an extra rule: There must be at least one group of exactly two adjacent digits.
Example: 334478 is valid (all repeated digits are exactly two digits long).

### Usage
1. Clone this repository or download the source code.
2. Open the index.html file in a web browser.
3. Enter the desired start and end values in the form.
4. Click the "Count Passwords" button.
5. The number of valid passwords (Part 1 and Part 2) will be displayed below the form.

## Question 2 - Address Finding App

The Address Finding App is a simple web application that allows you to find the final address based on a set of commands. This application is built using HTML, CSS, and vanilla JavaScript.

### Features

- Parse and execute commands: The app takes a list of commands as input and executes them one by one, updating the address variable based on the specified rules.

- Command syntax: The commands are represented as numbers, and each command can start with different digits to perform various actions, such as increasing the address or jumping to another command.

- User-friendly interface: The app provides a user-friendly interface where you can enter the commands, run the execution, and see the final address as the output.

### Getting Started

To use the Address Finding App, follow these steps:

1. Clone this repository or download the source code.

2. Open the `index.html` file in a web browser.

### Usage
Once the application is open, you have two options to provide the commands:

#### Option 1: Write Commands
1. Select the "Write Commands" option from the "Select Input Type" dropdown.
2. Enter the commands in the textarea provided. Each command should be on a separate line.
3. Click the "Run" button to execute the commands and determine the final address.
4. The result will be displayed below the "Run" button.

#### Option 2: Upload File
1. Select the "Upload File" option from the "Select Input Type" dropdown.
2. Click on the "Upload File" section to open the file selection dialog.
3. Choose a text file (.txt) containing the commands you want to upload.
4. Click the "Run" button to execute the commands and determine the final address.
5. The result will be displayed below the "Run" button.
###### Note: The file should contain one command per line, and each command should be a number.

### Limitations
The application assumes that the provided commands follow the specified format.
Only text files (.txt) can be uploaded for command input.

### Example

As an example, let's consider the following commands:

```
25
52
53
202
54
402
203
510
201
```

These commands will be parsed and executed by the app, resulting in a final address of 3.
