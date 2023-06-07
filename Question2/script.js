function handleInputTypeChange() {
    const inputType = document.getElementById("inputType").value;
    const writeCommands = document.getElementById("writeCommands");
    const uploadFile = document.getElementById("uploadFile");
  
    if (inputType === "write") {
      writeCommands.style.display = "block";
      uploadFile.style.display = "none";
    } else if (inputType === "upload") {
      writeCommands.style.display = "none";
      uploadFile.style.display = "block";
    }
  }
  
  // Set the write commands content to show by default
  document.getElementById("inputType").value = "write";
  document.getElementById("writeCommands").style.display = "block";
  
  // Add event listener to the input type select element
  const inputType = document.getElementById("inputType");
  inputType.addEventListener("change", handleInputTypeChange);
  
  // Function to handle the file upload event
  function handleFileUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = function(e) {
      const commands = e.target.result.split("\n").map(command => parseInt(command.trim(), 10));
      const address = findAddress(commands);
      displayResult(address);
    };
  
    reader.readAsText(file);
  }
  
  // Function to handle the run button click event
  function handleRunButtonClick() {
    let commands;
    const inputType = document.getElementById("inputType").value;
  
    if (inputType === "write") {
      const commandsInput = document.getElementById("commandsInput");
      commands = commandsInput.value.split("\n").map(command => parseInt(command.trim(), 10));
    } else if (inputType === "upload") {
      const fileInput = document.getElementById("fileInput");
      if (fileInput.files.length > 0) {
        handleFileUpload({ target: { files: [fileInput.files[0]] } });
      } else {
        alert("Please select a file to upload.");
      }
      return;
    }
  
    const address = findAddress(commands);
    displayResult(address);
  }
  
  // Function to display the result on the page
  function displayResult(address) {
    const resultElement = document.getElementById("result");
    resultElement.textContent = "The final address is: " + address;
  }
  
  const runButton = document.getElementById("runButton");
  runButton.addEventListener("click", handleRunButtonClick);
  
  function findAddress(commands) {
    let address = 0;
    let index = 0;
  
    while (index < commands.length) {
      const command = commands[index].toString();
  
      if (command.startsWith("20")) {
        address += Number(command.slice(2));
      } else if (command.startsWith("5")) {
        const jumpIndex = Number(command.slice(1));
        index += jumpIndex;
        continue;
      }
  
      index++;
    }
  
    return address;
  }
  