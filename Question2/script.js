document.getElementById("runButton").addEventListener("click", function() {
    const commandsInput = document.getElementById("commandsInput");
    const commands = commandsInput.value.split("\n").map(command => parseInt(command.trim(), 10));
  
    const address = findAddress(commands);
  
    const resultElement = document.getElementById("result");
    resultElement.textContent = "The final address is: " + address;
  });
  
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
  