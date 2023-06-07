function hasExactlyTwoAdjacentDigits(passwordString) {
  const digitCounts = {};

  for (let i = 0; i < passwordString.length; i++) {
    const digit = passwordString[i];

    if (digitCounts[digit]) {
      digitCounts[digit]++;
    } else {
      digitCounts[digit] = 1;
    }
  }

  return Object.values(digitCounts).includes(2);
}

function isValidPassword(password) {
  const passwordString = password.toString();
  let hasAdjacentDigits = false;
  let isIncreasingOrSame = true;

  for (let i = 1; i < passwordString.length; i++) {
    if (passwordString[i] === passwordString[i - 1]) {
      hasAdjacentDigits = true;
    }
    if (passwordString[i] < passwordString[i - 1]) {
      isIncreasingOrSame = false;
      break;
    }
  }

  return hasAdjacentDigits && isIncreasingOrSame;
}

function countValidPasswords(start, end) {
  let count = 0;

  for (let password = start; password <= end; password++) {
    if (isValidPassword(password)) {
      count++;
    }
  }

  return count;
}

function countValidPasswordsPart2(start, end) {
  let count = 0;

  for (let password = start; password <= end; password++) {
    if (isValidPassword(password) && hasExactlyTwoAdjacentDigits(password.toString())) {
      count++;
    }
  }

  return count;
}

const passwordForm = document.getElementById("passwordForm");
const resultContainerPart1 = document.getElementById("resultContainerPart1");
const resultContainerPart2 = document.getElementById("resultContainerPart2");

passwordForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const start = parseInt(document.getElementById("startInput").value);
  const end = parseInt(document.getElementById("endInput").value);

  if (isNaN(start) || isNaN(end) || start > end || end > 856920 || start< 184759) {
    alert("Please enter valid start and end values between 184759 and 856920.");
    return;
  }

  const numberOfPasswordsPart1 = countValidPasswords(start, end);
  const numberOfPasswordsPart2 = countValidPasswordsPart2(start, end);

  resultContainerPart1.innerText = "Number of valid passwords (Part 1): " + numberOfPasswordsPart1;
  resultContainerPart2.innerText = "Number of valid passwords (Part 2): " + numberOfPasswordsPart2;
});
